'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { useRouter } from 'next/navigation'
import { getTranslation } from './get'
import { COOKIE_NAME, DEFAULT_LOCALE, type Locale } from './types'
import ptBR from './translations/pt-BR.json'
import en from './translations/en.json'
import es from './translations/es.json'

const translations: Record<Locale, Record<string, unknown>> = {
  'pt-BR': ptBR as Record<string, unknown>,
  en: en as Record<string, unknown>,
  es: es as Record<string, unknown>,
}

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function setLocaleCookie(locale: Locale) {
  if (typeof document === 'undefined') return
  document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=31536000; SameSite=Lax`
}

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode
  initialLocale: Locale
}) {
  const router = useRouter()
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  const setLocale = useCallback(
    (newLocale: Locale) => {
      setLocaleState(newLocale)
      setLocaleCookie(newLocale)
      router.refresh()
    },
    [router]
  )

  const t = useCallback(
    (key: string): string => {
      const value = getTranslation(translations[locale], key)
      return value ?? key
    },
    [locale]
  )

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return ctx
}

export function useTranslations() {
  const { t } = useLocale()
  return t
}
