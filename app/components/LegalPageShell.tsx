'use client'

import Link from 'next/link'
import { FileText } from 'lucide-react'
import LanguageSwitcher from '@/app/components/LanguageSwitcher'
import { useTranslations } from '@/lib/i18n'

type LegalPageShellProps = {
  title: string
  meta: string
  children: React.ReactNode
  /** E-mail exibido no rodapé do documento (ex.: contato vs privacidade). */
  footerEmail?: string
}

export function LegalPageShell({
  title,
  meta,
  children,
  footerEmail = 'privacidade@adaptcv.app',
}: LegalPageShellProps) {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">{t('common.brand')}</span>
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t('common.backToSite')}
            </Link>
          </div>
        </div>
      </header>

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
