import { cookies, headers } from 'next/headers'
import { localeFromAcceptLanguage } from '@/lib/i18n/accept-language'
import { COOKIE_NAME, type Locale } from '@/lib/i18n/types'

const VALID_LOCALES: Locale[] = ['pt-BR', 'en', 'es']

/** Locale para páginas e metadados no servidor (cookie do app ou Accept-Language). */
export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const headersList = await headers()
  const cookieLocale = cookieStore.get(COOKIE_NAME)?.value
  if (cookieLocale && VALID_LOCALES.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale
  }
  return localeFromAcceptLanguage(headersList.get('accept-language'))
}
