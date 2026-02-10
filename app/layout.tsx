import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CV Tailor — Seu CV adaptado para cada vaga',
  description:
    'Envie seu currículo e a descrição da vaga. Receba um CV customizado que destaca suas qualificações para aquela oportunidade específica.',
  openGraph: {
    title: 'CV Tailor — Seu CV adaptado para cada vaga',
    description:
      'Envie seu currículo e a descrição da vaga. Receba um CV customizado que destaca suas qualificações para aquela oportunidade específica.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">{children}</body>
    </html>
  )
}
