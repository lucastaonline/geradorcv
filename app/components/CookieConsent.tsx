'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import { useTranslations } from '@/lib/i18n'
import GoogleAnalytics from '@/app/components/GoogleAnalytics'
const STORAGE_KEY = 'cvadapt_consent_analytics'

type StoredConsent = 'granted' | 'denied'

export default function CookieConsent() {
  const t = useTranslations()
  const [mounted, setMounted] = useState(false)
  const [consent, setConsent] = useState<StoredConsent | null>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw === 'granted' || raw === 'denied') {
        setConsent(raw)
      }
    } catch {
      // ignore
    }
    setMounted(true)
  }, [])

  const accept = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, 'granted')
    } catch {
      // ignore
    }
    setConsent('granted')
  }, [])

  const reject = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, 'denied')
    } catch {
      // ignore
    }
    setConsent('denied')
  }, [])

  const showBanner = mounted && consent === null

  return (
    <>
      {consent === 'granted' ? <GoogleAnalytics /> : null}
      {showBanner ? (
        <div
          role="dialog"
          aria-modal="false"
          aria-label={t('cookies.dialogLabel')}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-sm shadow-[0_-4px_24px_-4px_hsl(217_91%_50%/0.12)]"
        >
          <div className="container mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="text-sm text-muted-foreground sm:max-w-xl md:max-w-2xl">
              {t('cookies.banner')}
              <Link
                href="/privacidade"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                {t('cookies.privacy')}
              </Link>
              {t('cookies.bannerSuffix')}
            </p>
            <div className="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">
              <Button type="button" variant="outline" size="sm" onClick={reject}>
                {t('cookies.reject')}
              </Button>
              <Button type="button" variant="default" size="sm" onClick={accept}>
                {t('cookies.accept')}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
