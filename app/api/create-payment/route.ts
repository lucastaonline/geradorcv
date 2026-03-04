import { NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'
import { getPackageByCredits } from '@/lib/packages'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, credits } = body as { email?: string; credits?: number }

    const emailTrimmed = (email ?? '').trim()
    if (!emailTrimmed || !emailRegex.test(emailTrimmed)) {
      return NextResponse.json(
        { error: 'Informe um e-mail válido.' },
        { status: 400 }
      )
    }

    if (typeof credits !== 'number') {
      return NextResponse.json(
        { error: 'Pacote inválido. Escolha 1, 10, 30 ou 50 créditos.' },
        { status: 400 }
      )
    }

    const pkg = getPackageByCredits(credits)
    if (!pkg) {
      return NextResponse.json(
        { error: 'Pacote inválido. Escolha 1, 10, 30 ou 50 créditos.' },
        { status: 400 }
      )
    }

    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN?.trim()
    if (!accessToken) {
      const configError = new Error('Create payment: MERCADOPAGO_ACCESS_TOKEN ausente')
      Sentry.captureException(configError, {
        tags: { route: 'create-payment' },
      })
      console.error('Create payment: missing MERCADOPAGO_ACCESS_TOKEN')
      return NextResponse.json(
        { error: 'Pagamento não configurado. Tente mais tarde.' },
        { status: 500 }
      )
    }

    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
    const baseUrl = (origin || 'http://localhost:3000').replace(/\/$/, '')

    const successUrl = `${baseUrl}/comprar/sucesso`
    const failureUrl = `${baseUrl}/comprar?erro=1`
    const pendingUrl = `${baseUrl}/comprar/sucesso`

    const notificationUrl = `${baseUrl}/api/webhook-payment`

    const preference: Record<string, unknown> = {
      items: [
        {
          id: `credits-${pkg.credits}`,
          title: pkg.title,
          quantity: 1,
          unit_price: pkg.price,
          currency_id: 'BRL',
        },
      ],
      payer: {
        email: emailTrimmed,
      },
      back_urls: {
        success: successUrl,
        failure: failureUrl,
        pending: pendingUrl,
      },
      notification_url: notificationUrl,
      external_reference: emailTrimmed,
    }

    if (baseUrl.startsWith('https://')) {
      preference.auto_return = 'approved'
    }

    const res = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(preference),
    })

    if (!res.ok) {
      const errText = await res.text()
      Sentry.captureException(new Error('Mercado Pago: erro ao criar preferência'), {
        tags: { route: 'create-payment' },
        extra: {
          statusCode: res.status,
          response: errText,
          credits: pkg.credits,
        },
      })
      console.error('Mercado Pago preference error:', res.status, errText)
      return NextResponse.json(
        { error: 'Não foi possível iniciar o pagamento. Tente novamente.' },
        { status: 500 }
      )
    }

    const data = (await res.json()) as { init_point?: string; sandbox_init_point?: string }
    const initPoint = data.init_point || data.sandbox_init_point
    if (!initPoint) {
      Sentry.captureException(new Error('Mercado Pago: init_point ausente na resposta'), {
        tags: { route: 'create-payment' },
        extra: { credits: pkg.credits },
      })
      console.error('Mercado Pago: no init_point in response', data)
      return NextResponse.json(
        { error: 'Resposta inválida do gateway. Tente novamente.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ init_point: initPoint })
  } catch (err) {
    Sentry.captureException(err, {
      tags: { route: 'create-payment' },
    })
    console.error('Create payment error:', err)
    return NextResponse.json(
      { error: 'Não foi possível iniciar o pagamento. Tente novamente.' },
      { status: 500 }
    )
  }
}
