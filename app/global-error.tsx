'use client'

import * as Sentry from '@sentry/nextjs'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { COOKIE_NAME, DEFAULT_LOCALE, type Locale } from '@/lib/i18n'
import { getTranslation } from '@/lib/i18n/get'
import ptBR from '@/lib/i18n/translations/pt-BR.json'
import en from '@/lib/i18n/translations/en.json'
import es from '@/lib/i18n/translations/es.json'

const VALID_LOCALES: Locale[] = ['pt-BR', 'en', 'es']
const translations: Record<Locale, Record<string, unknown>> = {
  'pt-BR': ptBR as Record<string, unknown>,
  en: en as Record<string, unknown>,
  es: es as Record<string, unknown>,
}

function getLocaleFromCookie(): Locale {
  if (typeof document === 'undefined') return DEFAULT_LOCALE
  const pattern = new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]+)`)
  const match = document.cookie.match(pattern)
  const value = decodeURIComponent(match?.[1] ?? '')
  return VALID_LOCALES.includes(value as Locale) ? (value as Locale) : DEFAULT_LOCALE
}

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string }
}) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    Sentry.captureException(error)
    setLocale(getLocaleFromCookie())
  }, [error])

  const localeTranslations = useMemo(() => translations[locale], [locale])
  const title = getTranslation(localeTranslations, 'globalError.title') ?? 'Something went wrong'
  const description =
    getTranslation(localeTranslations, 'globalError.description') ??
    'An unexpected error occurred.'
  const backHome = getTranslation(localeTranslations, 'globalError.backHome') ?? 'Back to home'

  return (
    <html lang={locale}>
      <body className="flex min-h-screen flex-col items-center justify-center bg-background p-4 font-sans antialiased">
        <div className="max-w-md text-center">
          <h1 className="mb-2 text-2xl font-bold text-foreground">
            {title}
          </h1>
          <p className="mb-6 text-muted-foreground">
            {description}
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {backHome}
          </Link>
        </div>
      </body>
    </html>
  )
}
