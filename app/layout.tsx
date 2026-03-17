import type { Metadata } from 'next'
import { cookies, headers } from 'next/headers'
import './globals.css'
import { LocaleProvider } from '@/lib/i18n'
import { localeFromAcceptLanguage } from '@/lib/i18n/accept-language'
import { COOKIE_NAME, type Locale } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'AdaptCV — Seu CV personalizado para cada vaga',
  description:
    'Envie seu currículo e a descrição da vaga. Receba um CV customizado que destaca suas qualificações para aquela oportunidade específica.',
  openGraph: {
    title: 'AdaptCV — Seu CV personalizado para cada vaga',
    description:
      'Envie seu currículo e a descrição da vaga. Receba um CV customizado que destaca suas qualificações para aquela oportunidade específica.',
  },
}

const VALID_LOCALES: Locale[] = ['pt-BR', 'en', 'es']

function getInitialLocale(cookieValue: string | undefined, acceptLanguage: string | null): Locale {
  if (cookieValue && VALID_LOCALES.includes(cookieValue as Locale)) {
    return cookieValue as Locale
  }
  return localeFromAcceptLanguage(acceptLanguage)
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
        <LocaleProvider initialLocale={locale}>{children}</LocaleProvider>
      </body>
    </html>
  )
}
