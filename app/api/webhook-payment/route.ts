import { NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'
import { sendPaymentNotificationEmail } from '@/lib/mailer'

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null)
    if (!body) return NextResponse.json({ ok: true })

    // O MP envia type="payment" e data.id com o ID do pagamento
    const { type, data } = body as { type?: string; data?: { id?: string | number } }

    if (type !== 'payment' || !data?.id) {
      return NextResponse.json({ ok: true })
    }

    const paymentId = data.id
    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN?.trim()
    if (!accessToken) {
      Sentry.captureException(new Error('Webhook: MERCADOPAGO_ACCESS_TOKEN ausente'))
      return NextResponse.json({ ok: true })
    }

    // Busca os detalhes do pagamento na API do MP
    const res = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })

    if (!res.ok) {
      Sentry.captureException(new Error('Webhook: falha ao buscar pagamento no MP'), {
        extra: { paymentId, status: res.status },
      })
      return NextResponse.json({ ok: true })
    }

    const payment = await res.json() as {
      status?: string
      external_reference?: string
      transaction_amount?: number
      additional_info?: { items?: Array<{ id?: string; quantity?: number }> }
    }

    // Só processa pagamentos aprovados
    if (payment.status !== 'approved') {
      return NextResponse.json({ ok: true })
    }

    const buyerEmail = payment.external_reference ?? 'desconhecido'
    const price = payment.transaction_amount ?? 0

    // Extrai a quantidade de créditos do item (id: "credits-10" → 10)
    const itemId = payment.additional_info?.items?.[0]?.id ?? ''
    const creditsMatch = itemId.match(/^credits-(\d+)$/)
    const credits = creditsMatch ? parseInt(creditsMatch[1], 10) : 0

    await sendPaymentNotificationEmail({ buyerEmail, credits, price, paymentId })

    return NextResponse.json({ ok: true })
  } catch (err) {
    Sentry.captureException(err, { tags: { route: 'webhook-payment' } })
    console.error('Webhook payment error:', err)
    // Sempre retorna 200 para o MP não reenviar infinitamente
    return NextResponse.json({ ok: true })
  }
}
