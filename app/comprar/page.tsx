'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'
import { FileText, Check } from 'lucide-react'
import { PACKAGES } from '@/lib/packages'
import { Button, buttonVariants } from '@/app/components/ui/button'
import { cn } from '@/lib/utils'
import { useTranslations } from '@/lib/i18n'
import LanguageSwitcher from '@/app/components/LanguageSwitcher'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function ComprarContent() {
  const t = useTranslations()
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
          typeof data?.error === 'string' ? data.error : t('comprar.errorGeneric')
        )
        return
      }
      if (data.init_point) {
        window.location.href = data.init_point
        return
      }
      setStatus('error')
      setErrorMessage(t('comprar.errorInvalid'))
    } catch {
      setStatus('error')
      setErrorMessage(t('comprar.errorGeneric'))
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">{t('common.brand')}</span>
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('common.backToSite')}
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 sm:py-16 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {t('comprar.title')} <span className="text-gradient">{t('comprar.titleHighlight')}</span>
        </h1>
        <p className="mt-2 text-muted-foreground">
          {t('comprar.intro')}
        </p>

        {erro === '1' && (
          <div className="mt-6 rounded-xl border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
            {t('comprar.errorPayment')}
          </div>
        )}
        {pendente === '1' && (
          <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm text-foreground">
            {t('comprar.pendingPayment')}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-10 space-y-8">
          <div>
            <p className="mb-4 text-sm font-medium text-foreground">{t('comprar.choosePackage')}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {PACKAGES.map((p) => {
                const selected = selectedCredits === p.credits
                return (
                  <button
                    key={p.credits}
                    type="button"
                    onClick={() => setSelectedCredits(p.credits)}
                    className={cn(
                      'relative rounded-2xl border-2 p-6 text-left transition-all duration-200',
                      selected
                        ? 'border-primary bg-primary/10 shadow-soft ring-2 ring-primary/30'
                        : 'border-border bg-card hover:border-primary/40 hover:bg-muted/30'
                    )}
                  >
                    {selected && (
                      <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                    <span className="text-lg font-semibold text-foreground">
                      {p.credits} {p.credits === 1 ? t('common.credit') : t('common.credits')}
                    </span>
                    <p className="mt-2 text-2xl font-bold text-primary">R$ {p.price}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {p.credits} {p.credits === 1 ? t('common.resume') : t('common.resumes')}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
              {t('common.yourEmail')}
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
              placeholder={t('common.emailPlaceholder')}
              required
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <p className="mt-1 text-xs text-muted-foreground">
              {t('comprar.useEmail')}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <p className="text-sm font-semibold text-foreground">{t('comprar.summary')}</p>
            <p className="mt-2 text-foreground">
              {pkg.credits} {pkg.credits === 1 ? t('common.credit') : t('common.credits')} — R$ {pkg.price}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              {t('comprar.paymentNote')}
            </p>
          </div>

          {errorMessage && (
            <p className="text-sm text-destructive" role="alert">
              {errorMessage}
            </p>
          )}

          <Button
            type="submit"
            disabled={isDisabled}
            variant="hero"
            size="lg"
            className="w-full"
          >
            {status === 'loading' ? t('comprar.redirecting') : t('comprar.payButton')}
          </Button>
        </form>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          {t('comprar.termsNote')}
        </p>
      </main>
    </div>
  )
}

export default function ComprarPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ComprarContent />
    </Suspense>
  )
}
