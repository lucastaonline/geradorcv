'use client'

import { SiteHeader } from '@/app/components/SiteHeader'
import { useTranslations } from '@/lib/i18n'

type LegalPageShellProps = {
  title: string
  meta: string
  children: React.ReactNode
  /** E-mail do rodapé (sempre via `t('legal.terms.footerEmail')` ou `t('legal.privacy.footerEmail')`). */
  footerEmail: string
}

export function LegalPageShell({
  title,
  meta,
  children,
  footerEmail,
}: LegalPageShellProps) {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-background pt-16">
      <SiteHeader anchorHrefPrefix="/" />

      <main className="container mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <div className="mb-10 border-b border-border pb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{meta}</p>
        </div>
        <article className="legal-doc">{children}</article>
      </main>

      <footer className="mt-12 border-t border-border/50 py-8">
        <div className="container mx-auto flex max-w-3xl flex-col justify-between gap-2 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {t('common.brand')}. {t('common.allRightsReserved')}
          </span>
          <a
            href={`mailto:${footerEmail}`}
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            {footerEmail}
          </a>
        </div>
      </footer>
    </div>
  )
}
