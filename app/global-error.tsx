'use client'

import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'
import Link from 'next/link'

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col items-center justify-center bg-background p-4 font-sans antialiased">
        <div className="max-w-md text-center">
          <h1 className="mb-2 text-2xl font-bold text-foreground">
            Algo deu errado
          </h1>
          <p className="mb-6 text-muted-foreground">
            Ocorreu um erro inesperado. Já fomos notificados e estamos verificando.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </body>
    </html>
  )
}
