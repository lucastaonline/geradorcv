import type { Metadata } from 'next'
import { cookies, headers } from 'next/headers'
import './globals.css'
import { LocaleProvider } from '@/lib/i18n'
import { localeFromAcceptLanguage } from '@/lib/i18n/accept-language'
import { COOKIE_NAME, type Locale } from '@/lib/i18n'
import CookieConsent from '@/app/components/CookieConsent'
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

function getInitialLocale(cookieValue: string | undefined, acceptLanguage: string | null): Locale {
  if (cookieValue && VALID_LOCALES.includes(cookieValue as Locale)) {
    return cookieValue as Locale
  }
  return localeFromAcceptLanguage(acceptLanguage)
}

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const headersList = await headers()
  const localeCookie = cookieStore.get(COOKIE_NAME)?.value
  const acceptLanguage = headersList.get('accept-language')
  const locale = getInitialLocale(localeCookie, acceptLanguage)
  const localeTranslations = translations[locale]
  const title = getTranslation(localeTranslations, 'seo.title') ?? 'AdaptCV'
  const description =
    getTranslation(localeTranslations, 'seo.description') ??
    'AdaptCV'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const headersList = await headers()
  const localeCookie = cookieStore.get(COOKIE_NAME)?.value
  const acceptLanguage = headersList.get('accept-language')
  const locale = getInitialLocale(localeCookie, acceptLanguage)

  return (
    <html lang={locale}>
      <body className="bg-background text-foreground font-sans antialiased">
        <LocaleProvider initialLocale={locale}>
          {children}
          <CookieConsent />
        </LocaleProvider>
      </body>
    </html>
  )
}
