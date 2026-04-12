import type { Metadata } from 'next'
import './globals.css'
import { LocaleProvider } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import CookieConsent from '@/app/components/CookieConsent'
import { getTranslation } from '@/lib/i18n/get'
import { getServerLocale } from '@/lib/i18n/get-server-locale'
import ptBR from '@/lib/i18n/translations/pt-BR.json'
import en from '@/lib/i18n/translations/en.json'
import es from '@/lib/i18n/translations/es.json'

const translations: Record<Locale, Record<string, unknown>> = {
  'pt-BR': ptBR as Record<string, unknown>,
  en: en as Record<string, unknown>,
  es: es as Record<string, unknown>,
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
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
  const locale = await getServerLocale()

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
