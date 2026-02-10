import Link from 'next/link'

export default function ComprarSucessoPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-ink-800/10 bg-white">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-primary-950"
          >
            CV <span className="text-primary-600">Tailor</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-ink-600 hover:text-primary-950">
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-2xl font-semibold tracking-tight text-primary-950 sm:text-3xl">
          Obrigado pela compra!
        </h1>
        <p className="mt-4 text-base text-ink-600">
          Seu pagamento foi aprovado. Você receberá um e-mail em breve com o link para usar
          seus créditos. Use sempre o mesmo e-mail para consumir seus créditos.
        </p>
        <Link href="/#cta" className="btn-primary mt-10 inline-flex">
          Melhorar meu currículo
        </Link>
      </main>
    </div>
  )
}
