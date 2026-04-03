import type { Metadata } from 'next'
import TermsContent from './TermsContent'

export const metadata: Metadata = {
  title: 'Termos de Uso — AdaptCV',
  description:
    'Termos e condições de uso da plataforma AdaptCV: serviço, créditos, IA, privacidade e legislação brasileira.',
  openGraph: {
    title: 'Termos de Uso — AdaptCV',
    description: 'Termos e condições de uso da plataforma AdaptCV.',
  },
}

export default function TermosPage() {
  return <TermsContent />
}
