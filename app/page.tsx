import Link from 'next/link'
import { PACKAGES } from '@/lib/packages'
import CVForm from './components/CVForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="animate-header fixed top-0 left-0 right-0 z-50 border-b border-ink-800/10 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-primary-950"
          >
            CV <span className="text-primary-600">Tailor</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#como-funciona"
              className="text-sm font-medium text-ink-600 transition-colors hover:text-primary-950"
            >
              Como funciona
            </a>
            <a
              href="#beneficios"
              className="text-sm font-medium text-ink-600 transition-colors hover:text-primary-950"
            >
              Benefícios
            </a>
            <a
              href="#creditos"
              className="text-sm font-medium text-ink-600 transition-colors hover:text-primary-950"
            >
              Créditos
            </a>
            <a
              href="#cta"
              className="text-sm font-medium text-ink-600 transition-colors hover:text-primary-950"
            >
              Começar
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/comprar"
              className="btn-secondary hidden text-sm sm:inline-flex"
            >
              Comprar créditos
            </Link>
            <Link href="#cta" className="btn-primary text-sm">
              Melhorar meu currículo
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-36 gradient-mesh">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="hero-item mb-5 inline-flex items-center rounded-full border border-primary-200/80 bg-primary-50/80 px-3.5 py-1.5 text-xs font-medium text-primary-700">
                Experimente grátis — otimize seu primeiro currículo sem comprar créditos.
              </p>
              <h1 className="hero-item font-display text-4xl font-bold tracking-tight text-primary-950 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
                Seu currículo não está te chamando para entrevistas?
              </h1>
              <p className="hero-item mt-6 text-lg leading-relaxed text-ink-600 sm:text-xl">
                Transforme seu currículo em um currículo profissional em minutos.
                Envie seu CV e a descrição da vaga e receba uma versão otimizada por
                e-mail.
              </p>
              <div className="hero-item mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="#cta" className="btn-primary w-full sm:w-auto">
                  Melhorar meu currículo agora
                </Link>
                <Link
                  href="/comprar"
                  className="btn-secondary w-full sm:w-auto"
                >
                  Comprar créditos
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section
          id="como-funciona"
          className="border-t border-ink-800/10 bg-[#fafafa] py-24 sm:py-32"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-primary-950 sm:text-3xl">
                Como funciona
              </h2>
              <p className="mt-3 text-base text-ink-600">
                Três passos simples para um CV que se encaixa na vaga.
              </p>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              {[
                {
                  step: '1',
                  title: 'Compre um pacote de créditos',
                  description:
                    'Escolha o pacote que faz sentido para você. Cada crédito permite melhorar 1 currículo.',
                },
                {
                  step: '2',
                  title: 'Use 1 crédito por currículo',
                  description:
                    'Envie seu CV e a descrição da vaga. Usamos IA para clareza, estrutura e linguagem.',
                },
                {
                  step: '3',
                  title: 'Receba por e-mail',
                  description:
                    'Em poucos minutos você recebe o currículo otimizado direto no seu e-mail.',
                },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className="section-item group rounded-xl border border-ink-800/10 bg-white p-6 card-hover"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary-100 text-sm font-semibold text-primary-700">
                    {item.step}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-primary-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section
          id="beneficios"
          className="border-t border-ink-800/10 bg-white py-24 sm:py-32"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-primary-950 sm:text-3xl">
                O que você ganha
              </h2>
              <p className="mt-3 text-base text-ink-600">
                Currículo revisado com foco em clareza e profissionalismo.
              </p>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Linguagem profissional e objetiva',
                  description: 'Texto claro e adequado para processos seletivos.',
                },
                {
                  title: 'Melhor organização das informações',
                  description: 'Estrutura que destaca suas experiências e habilidades.',
                },
                {
                  title: 'Adequado para ATS e recrutadores',
                  description: 'Otimizado para sistemas de triagem e leitura humana.',
                },
                {
                  title: 'Pronto para enviar',
                  description: 'Receba o arquivo por e-mail e use quando quiser.',
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="section-item rounded-xl border border-ink-800/10 bg-[#fafafa] p-6 card-hover"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <h3 className="font-display text-lg font-semibold text-primary-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sistema de créditos */}
        <section
          id="creditos"
          className="border-t border-ink-800/10 bg-[#fafafa] py-24 sm:py-32"
        >
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-primary-950 sm:text-3xl">
              Sistema de créditos
            </h2>
            <p className="mt-4 text-base text-ink-600">
              Você compra um pacote com créditos. Cada crédito permite melhorar 1
              currículo. Use quando quiser, sem expiração.
            </p>
            <ul className="mt-6 space-y-2 text-left text-sm text-ink-600">
              <li className="flex items-center gap-2">
                <span className="text-cta-500">•</span>
                Pacotes com 1 a 50 créditos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cta-500">•</span>
                1 crédito = 1 currículo melhorado
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cta-500">•</span>
                Créditos sem data de validade
              </li>
            </ul>
            <Link
              href="/comprar"
              className="btn-primary mt-8 inline-flex"
            >
              Ver pacotes e preços
            </Link>
          </div>
        </section>

        {/* Preço */}
        <section
          id="preco"
          className="border-t border-ink-800/10 bg-white py-24 sm:py-32"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-primary-950 sm:text-3xl">
                Preços
              </h2>
              <p className="mt-3 text-base text-ink-600">
                Escolha o pacote que faz sentido para você.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.credits}
                  className="rounded-xl border border-ink-800/10 bg-[#fafafa] p-6 text-center card-hover"
                >
                  <p className="font-display text-2xl font-semibold text-primary-950">
                    {pkg.credits} {pkg.credits === 1 ? 'crédito' : 'créditos'}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-primary-600">
                    R$ {pkg.price}
                  </p>
                  <p className="mt-1 text-sm text-ink-600">{pkg.label}</p>
                  <Link
                    href={`/comprar?pacote=${pkg.credits}`}
                    className="btn-primary mt-4 inline-block w-full"
                  >
                    Comprar
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prova / confiança */}
        <section className="border-t border-ink-800/10 bg-[#fafafa] py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 text-center text-sm text-ink-600">
              <span className="flex items-center gap-2">
                <span className="font-medium text-primary-950">Pagamento seguro</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="font-medium text-primary-950">Entrega por e-mail</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="font-medium text-primary-950">Processo rápido</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="font-medium text-primary-950">Suporte em caso de erro</span>
              </span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-ink-800/10 bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-primary-950 sm:text-3xl text-center">
              Perguntas frequentes
            </h2>
            <dl className="mt-12 space-y-8">
              {[
                {
                  q: 'Em quanto tempo recebo meu currículo?',
                  a: 'Geralmente em poucos minutos. Você recebe o arquivo por e-mail.',
                },
                {
                  q: 'Posso usar os créditos depois?',
                  a: 'Sim. Os créditos não expiram. Use quando quiser.',
                },
                {
                  q: 'Quais formatos são aceitos?',
                  a: 'Envie seu currículo em PDF. Você receberá o resultado também em PDF.',
                },
                {
                  q: 'Posso melhorar mais de um currículo?',
                  a: 'Sim. Cada envio consome 1 crédito. Compre um pacote com vários créditos para usar em várias vagas.',
                },
              ].map((faq) => (
                <div key={faq.q}>
                  <dt className="font-display font-semibold text-primary-950">
                    {faq.q}
                  </dt>
                  <dd className="mt-2 text-sm text-ink-600">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA final */}
        <section
          id="cta"
          className="border-t border-ink-800/10 bg-primary-950 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Pronto para um CV que se destaca?
            </h2>
            <p className="mt-3 text-base text-primary-200">
              Envie seu currículo e a descrição da vaga. Use o mesmo e-mail que você usou na compra para consumir seus créditos.
            </p>
            <CVForm />
            <p className="mt-6 text-xs text-primary-400">
              Ao continuar, você concorda com nossos Termos de Uso e Política de
              Privacidade.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-ink-800/10 bg-white py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <span className="font-display text-base font-semibold text-primary-950">
              CV <span className="text-primary-600">Tailor</span>
            </span>
            <div className="flex gap-6 text-sm text-ink-600">
              <a href="#" className="transition-colors hover:text-primary-950">
                Termos
              </a>
              <a href="#" className="transition-colors hover:text-primary-950">
                Privacidade
              </a>
              <a href="#" className="transition-colors hover:text-primary-950">
                Contato
              </a>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-ink-400">
            © {new Date().getFullYear()} CV Tailor. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
