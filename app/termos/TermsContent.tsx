'use client'

import { LegalPageShell } from '@/app/components/LegalPageShell'
import { useTranslations } from '@/lib/i18n'
import { TermsLegalArticle } from '@/app/termos/TermsLegalArticle'

export default function TermsContent() {
  const t = useTranslations()

  return (
    <LegalPageShell
      title={t('legal.terms.title')}
      meta={t('legal.terms.meta')}
      footerEmail={t('legal.terms.footerEmail')}
    >
      <TermsLegalArticle />
    </LegalPageShell>
  )
}
