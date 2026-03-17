'use client'

import { useLocale, LOCALES, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border/50 bg-muted/30 p-0.5">
      {LOCALES.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => setLocale(value as Locale)}
          className={cn(
            'rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors',
            locale === value
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
          )}
          aria-label={label}
          aria-current={locale === value ? 'true' : undefined}
        >
          {value === 'pt-BR' ? 'PT' : value === 'en' ? 'EN' : 'ES'}
        </button>
      ))}
    </div>
  )
}
