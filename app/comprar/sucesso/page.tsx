'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { CheckCircle2, Clock, FileText } from 'lucide-react'
import { buttonVariants } from '@/app/components/ui/button'
import { cn } from '@/lib/utils'

function SucessoContent() {
  const searchParams = useSearchParams()
  const status = searchParams.get('status')
  const paymentId = searchParams.get('payment_id')
  const buyerEmail = searchParams.get('external_reference')

  // status=approved → cartão aprovado na hora
  // status=pending  → PIX / boleto aguardando
  // sem status      → veio de um redirect manual ou link direto
  const isPending = status === 'pending'
  const isApproved = status === 'approved' || (!status && !isPending)

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">CVMatch</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-24 max-w-lg text-center">
        {isApproved ? (
          <>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-accent" />
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Compra <span className="text-gradient">aprovada!</span>
            </h1>
            <p className="text-muted-foreground mb-3">
              Seus créditos foram registrados. Use o e-mail{' '}
              {buyerEmail ? (
                <strong className="text-foreground">{buyerEmail}</strong>
              ) : (
                'da compra'
              )}{' '}
              para consumi-los no site.
            </p>
            {paymentId && (
              <p className="text-sm text-muted-foreground mb-8">
                ID do pagamento: <span className="font-mono">{paymentId}</span>
              </p>
            )}
          </>
        ) : (
          <>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Pagamento em <span className="text-gradient">processamento</span>
            </h1>
            <p className="text-muted-foreground mb-3">
              Seu PIX ou boleto ainda não foi confirmado. Assim que o pagamento for
              aprovado, seus créditos serão registrados automaticamente.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Isso pode levar alguns minutos. Não é preciso fazer nada — você
              pode fechar esta página.
            </p>
            {paymentId && (
              <p className="text-sm text-muted-foreground mb-8">
                ID do pagamento: <span className="font-mono">{paymentId}</span>
              </p>
            )}
          </>
        )}

        <Link
          href="/#upload"
          className={cn(buttonVariants({ variant: 'hero', size: 'lg' }))}
        >
          Melhorar meu currículo agora
        </Link>
      </main>
    </div>
  )
}

export default function ComprarSucessoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <SucessoContent />
    </Suspense>
  )
}
