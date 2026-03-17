import { DEFAULT_LOCALE, type Locale } from './types'

const SUPPORTED_LOCALES: Locale[] = ['pt-BR', 'en', 'es']

/**
 * Mapeia um código de idioma do Accept-Language para um dos nossos locales.
 * Ex.: "pt", "pt-BR" -> "pt-BR"; "en", "en-US" -> "en"; "es", "es-ES" -> "es"
 */
function matchLocale(langCode: string): Locale | null {
  const lower = langCode.toLowerCase().trim()
  if (lower === 'pt' || lower === 'pt-br') return 'pt-BR'
  if (lower.startsWith('en')) return 'en'
  if (lower.startsWith('es')) return 'es'
  return null
}

/**
 * Parseia o header Accept-Language e retorna o primeiro idioma que suportamos.
 * Formato típico: "pt-BR,pt;q=0.9,en;q=0.8" ou "en-US,en;q=0.9"
 */
export function localeFromAcceptLanguage(acceptLanguage: string | null): Locale {
  if (!acceptLanguage || typeof acceptLanguage !== 'string') {
    return DEFAULT_LOCALE
  }

  const parts = acceptLanguage.split(',').map((p) => p.trim())

  for (const part of parts) {
    // Pode ser "pt-BR" ou "en;q=0.9"
    const lang = part.split(';')[0].trim()
    if (!lang) continue

    const matched = matchLocale(lang)
    if (matched && SUPPORTED_LOCALES.includes(matched)) {
      return matched
    }
  }

  return DEFAULT_LOCALE
}
