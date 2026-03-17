export type Locale = 'pt-BR' | 'en' | 'es'

export const LOCALES: { value: Locale; label: string }[] = [
  { value: 'pt-BR', label: 'Português' },
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
]

export const DEFAULT_LOCALE: Locale = 'pt-BR'

export const COOKIE_NAME = 'cvadapt-locale'
