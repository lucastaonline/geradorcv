import type { Metadata } from 'next'
import TermsContent from './TermsContent'
import { getServerLocale } from '@/lib/i18n/get-server-locale'
import { getTranslation } from '@/lib/i18n/get'
import type { Locale } from '@/lib/i18n/types'
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
  const dict = translations[locale]
  const title = getTranslation(dict, 'legal.seo.termsTitle') ?? 'AdaptCV'
  const description = getTranslation(dict, 'legal.seo.termsDescription') ?? ''
  return {
    title,
    description,
    openGraph: { title, description: description || undefined },
  }
}

export default function TermosPage() {
  return <TermsContent />
}
