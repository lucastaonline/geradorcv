'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeft, FileText } from 'lucide-react'
import LanguageSwitcher from '@/app/components/LanguageSwitcher'
import { useTranslations } from '@/lib/i18n'
import { buttonVariants } from '@/app/components/ui/button'
import { cn } from '@/lib/utils'
import { trackBuyCreditsClick } from '@/lib/analytics/client'

const NAV_SECTIONS = [
  { id: 'beneficios', labelKey: 'home.nav.benefits' },
  { id: 'como-funciona', labelKey: 'home.nav.howItWorks' },
  { id: 'creditos', labelKey: 'home.nav.credits' },
  { id: 'preco', labelKey: 'home.nav.pricing' },
  { id: 'faq', labelKey: 'home.nav.faq' },
] as const

const navLinkClass =
  'text-sm text-muted-foreground hover:text-foreground transition-colors'

type AnchorPrefix = '' | '/'

type SiteHeaderProps = {
  /**
   * Na home use `""` (links `#secao`).
   * Em outras rotas use `"/"` para `/#secao` e o scroll na landing funcionar.
   */
  anchorHrefPrefix?: AnchorPrefix
}

export function SiteHeader({ anchorHrefPrefix = '' }: SiteHeaderProps) {
  const t = useTranslations()
  const pathname = usePathname()
  const showBackHome =
    pathname === '/termos' || pathname === '/privacidade'

  const hashHref = (id: string) => `${anchorHrefPrefix}#${id}`

  return (
    <header className="animate-header fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto h-16 px-4">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Link href="/" className="flex min-w-0 items-center gap-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg gradient-primary">
                <FileText className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">{t('common.brand')}</span>
            </Link>
            {showBackHome ? (
              <>
                <span
                  className="hidden h-6 w-px shrink-0 bg-border/70 sm:block"
                  aria-hidden
                />
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({ variant: 'heroOutline', size: 'sm' }),
                    'shrink-0 gap-1.5 whitespace-nowrap'
                  )}
                >
                  <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
                  {t('legal.backToHome')}
                </Link>
              </>
            ) : null}
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_SECTIONS.map(({ id, labelKey }) => (
              <a key={id} href={hashHref(id)} className={navLinkClass}>
                {t(labelKey)}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <Link
              href="/comprar"
              onClick={() => trackBuyCreditsClick('header')}
              className={cn(
                buttonVariants({ variant: 'heroOutline', size: 'sm' }),
                'hidden sm:inline-flex'
              )}
            >
              {t('home.nav.buyCredits')}
            </Link>
            <Link href={hashHref('upload')} className={cn(buttonVariants({ variant: 'hero', size: 'sm' }))}>
              {t('home.nav.startFree')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
