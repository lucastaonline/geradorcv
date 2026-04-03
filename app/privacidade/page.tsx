import type { Metadata } from 'next'
import PrivacyContent from './PrivacyContent'

export const metadata: Metadata = {
  title: 'Política de Privacidade — AdaptCV',
  description:
    'Como o AdaptCV coleta, usa e protege seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).',
  openGraph: {
    title: 'Política de Privacidade — AdaptCV',
    description:
      'Como o AdaptCV coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.',
  },
}

export default function PrivacidadePage() {
  return <PrivacyContent />
}
