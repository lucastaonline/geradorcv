'use client'

import Link from 'next/link'
import { FileText } from 'lucide-react'
import { useTranslations } from '@/lib/i18n'

const linkClass =
  'text-sm text-muted-foreground transition-colors hover:text-foreground'

export function SiteFooter() {
  const t = useTranslations()
  const contactEmail = t('common.contactEmail')

  return (
    <footer className="border-t border-border/50 bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <FileText className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">{t('common.brand')}</span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/termos" className={linkClass}>
              {t('common.termsOfUse')}
            </Link>
            <Link href="/privacidade" className={linkClass}>
              {t('common.privacy')}
            </Link>
            <a href={`mailto:${contactEmail}`} className={linkClass}>
              {t('common.contact')}
            </a>
          </nav>

          <p className="text-center text-sm text-muted-foreground md:text-right">
            © {new Date().getFullYear()} {t('common.brand')}.{' '}
            {t('common.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  )
}
