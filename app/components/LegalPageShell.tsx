'use client'

import { SiteFooter } from '@/app/components/SiteFooter'
import { SiteHeader } from '@/app/components/SiteHeader'

type LegalPageShellProps = {
  title: string
  meta: string
  children: React.ReactNode
}

export function LegalPageShell({
  title,
  meta,
  children,
}: LegalPageShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background pt-16">
      <SiteHeader anchorHrefPrefix="/" />

      <main className="container mx-auto max-w-3xl flex-1 px-4 py-10 sm:py-14">
        <div className="mb-10 border-b border-border pb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{meta}</p>
        </div>
        <article className="legal-doc">{children}</article>
      </main>

      <SiteFooter />
    </div>
  )
}
