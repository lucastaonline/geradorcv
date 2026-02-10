'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'
import { PACKAGES } from '@/lib/packages'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function ComprarContent() {
  const searchParams = useSearchParams()
  const pacoteParam = searchParams.get('pacote')
  const initialCredits = pacoteParam ? parseInt(pacoteParam, 10) : null
  const validCredits = initialCredits !== null && PACKAGES.some((p) => p.credits === initialCredits)
  const [selectedCredits, setSelectedCredits] = useState<number>(
    validCredits ? initialCredits! : 10
  )
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const erro = searchParams.get('erro')
  const pendente = searchParams.get('pendente')

  const pkg = PACKAGES.find((p) => p.credits === selectedCredits)!
  const isValid = EMAIL_REGEX.test(email.trim())
  const isDisabled = !isValid || status === 'loading'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isValid) return
    setStatus('loading')
    setErrorMessage(null)
    try {
      const res = await fetch('/api/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), credits: selectedCredits }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus('error')
        setErrorMessage(
          typeof data?.error === 'string' ? data.error : 'Não foi possível iniciar o pagamento.'
        )
        return
      }
      if (data.init_point) {
        window.location.href = data.init_point
        return
      }
      setStatus('error')
      setErrorMessage('Resposta inválida. Tente novamente.')
    } catch {
      setStatus('error')
      setErrorMessage('Não foi possível iniciar o pagamento. Tente novamente.')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-ink-800/10 bg-white">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-primary-950"
          >
            CV <span className="text-primary-600">Tailor</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-ink-600 hover:text-primary-950">
            Voltar
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-display text-2xl font-semibold tracking-tight text-primary-950 sm:text-3xl">
          Comprar créditos
        </h1>
        <p className="mt-2 text-base text-ink-600">
          Cada crédito permite melhorar 1 currículo. Use quando quiser, sem expiração.
        </p>

        {erro === '1' && (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            O pagamento não foi aprovado. Tente novamente ou escolha outra forma de pagamento.
          </div>
        )}
        {pendente === '1' && (
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
            Seu pagamento está em processamento. Você receberá um e-mail quando for aprovado.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-10 space-y-8">
          <div>
            <p className="mb-3 text-sm font-medium text-primary-950">Escolha o pacote</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {PACKAGES.map((p) => (
                <button
                  key={p.credits}
                  type="button"
                  onClick={() => setSelectedCredits(p.credits)}
                  className={`rounded-xl border-2 p-4 text-left transition-colors ${
                    selectedCredits === p.credits
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-ink-800/10 bg-white hover:border-primary-200'
                  }`}
                >
                  <span className="font-display font-semibold text-primary-950">
                    {p.credits} {p.credits === 1 ? 'crédito' : 'créditos'}
                  </span>
                  <p className="mt-1 text-2xl font-bold text-primary-600">R$ {p.price}</p>
                  <p className="text-sm text-ink-600">{p.label}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-primary-950">
              Seu e-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setErrorMessage(null)
              }}
              placeholder="seu@email.com"
              required
              className="w-full rounded-lg border border-ink-800/20 px-3 py-2.5 text-sm text-primary-950 placeholder:text-ink-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
            <p className="mt-1 text-xs text-ink-500">
              Você receberá o link para usar seus créditos neste e-mail.
            </p>
          </div>

          <div className="rounded-xl border border-ink-800/10 bg-[#fafafa] p-4">
            <p className="text-sm font-medium text-primary-950">Resumo</p>
            <p className="mt-1 text-sm text-ink-600">
              {pkg.credits} {pkg.credits === 1 ? 'crédito' : 'créditos'} — R$ {pkg.price}
            </p>
            <p className="mt-2 text-xs text-ink-500">
              Pagamento processado pelo Mercado Pago (PIX, cartão, boleto).
            </p>
          </div>

          {errorMessage && (
            <p className="text-sm text-red-600" role="alert">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isDisabled}
            className="btn-primary w-full"
          >
            {status === 'loading' ? 'Redirecionando…' : 'Pagar com Mercado Pago'}
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-ink-500">
          Ao comprar, você concorda com nossos Termos de Uso e Política de Privacidade.
        </p>
      </main>
    </div>
  )
}

export default function ComprarPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ComprarContent />
    </Suspense>
  )
}
