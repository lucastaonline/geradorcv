'use client'

import { LegalPageShell } from '@/app/components/LegalPageShell'
import { useTranslations } from '@/lib/i18n'
import { PrivacyLegalArticle } from '@/app/privacidade/PrivacyLegalArticle'

export default function PrivacyContent() {
  const t = useTranslations()

  return (
    <LegalPageShell
      title={t('legal.privacy.title')}
      meta={t('legal.privacy.meta')}
      footerEmail={t('legal.privacy.footerEmail')}
    >
      <PrivacyLegalArticle />
    </LegalPageShell>
  )
}
