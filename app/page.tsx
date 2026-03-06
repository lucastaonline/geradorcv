import Link from 'next/link'
import {
  FileText,
  Sparkles,
  ArrowRight,
  Target,
  Zap,
  CreditCard,
  Upload,
  Mail,
  Brain,
  TrendingUp,
  Clock,
  Shield,
  CheckCircle2,
  Users,
} from 'lucide-react'
import { buttonVariants } from './components/ui/button'
import { cn } from '@/lib/utils'
import { PACKAGES } from '@/lib/packages'
import CVUploadSection from './components/CVUploadSection'

const HOW_IT_WORKS = [
  {
    icon: CreditCard,
    number: '01',
    title: 'Compre créditos',
    description:
      'Escolha o pacote que faz sentido para você. Cada crédito permite melhorar 1 currículo. A primeira otimização é grátis.',
  },
  {
    icon: Upload,
    number: '02',
    title: 'Envie seu CV e a vaga',
    description:
      'Faça upload do seu currículo em PDF e cole a descrição da vaga. Use o mesmo e-mail da compra para consumir seus créditos.',
  },
  {
    icon: Mail,
    number: '03',
    title: 'Receba por e-mail',
    description:
      'Em poucos minutos você recebe o currículo otimizado direto no seu e-mail, pronto para enviar.',
  },
]

const BENEFITS = [
  {
    icon: Brain,
    title: 'IA Avançada',
    description:
      'Algoritmos de última geração que entendem o contexto da vaga e suas experiências.',
  },
  {
    icon: TrendingUp,
    title: 'Maior Conversão',
    description:
      'CVs otimizados têm 3x mais chances de passar pelos sistemas de triagem (ATS).',
  },
  {
    icon: Clock,
    title: 'Economize Tempo',
    description:
      'Pare de reescrever seu CV manualmente. Resultados em menos de 1 minuto.',
  },
  {
    icon: Shield,
    title: 'Dados Seguros',
    description:
      'Seus dados são criptografados e nunca compartilhados com terceiros.',
  },
  {
    icon: CheckCircle2,
    title: 'Palavras-chave Certas',
    description:
      'Identificamos e incluímos as palavras-chave que os recrutadores buscam.',
  },
  {
    icon: Users,
    title: 'Formatos ATS-Friendly',
    description:
      'CVs formatados para passar pelos sistemas automáticos de triagem.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="animate-header fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">AdaptCV</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#beneficios"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefícios
            </a>
            <a
              href="#como-funciona"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Como Funciona
            </a>
            <a
              href="#creditos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Créditos
            </a>
            <a
              href="#preco"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Preços
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/comprar"
              className={cn(buttonVariants({ variant: 'heroOutline', size: 'sm' }), 'hidden sm:inline-flex')}
            >
              Comprar créditos
            </Link>
            <Link
              href="#upload"
              className={cn(buttonVariants({ variant: 'hero', size: 'sm' }))}
            >
              Começar Grátis
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center pt-16 gradient-hero overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="hero-item inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  A primeira otimização é grátis
                </span>
              </div>

              <h1 className="hero-item text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                Seu CV <span className="text-gradient">personalizado</span>
                <br />
                para cada vaga
              </h1>

              <p className="hero-item text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Nossa IA analisa a descrição da vaga e adapta seu currículo para
                destacar exatamente o que os recrutadores procuram. Aumente suas
                chances em até 3x.
              </p>

              <div className="hero-item flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Link
                  href="#upload"
                  className={cn(buttonVariants({ variant: 'hero', size: 'xl' }))}
                >
                  Customizar Meu CV
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#como-funciona"
                  className={cn(buttonVariants({ variant: 'heroOutline', size: 'xl' }))}
                >
                  Como funciona?
                </Link>
              </div>

              <div className="hero-item grid grid-cols-2 gap-8 max-w-md mx-auto">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-2xl md:text-3xl font-bold text-foreground mb-1">
                    <Target className="w-5 h-5 text-primary" />
                    95%
                  </div>
                  <p className="text-sm text-muted-foreground">Taxa de Match</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-2xl md:text-3xl font-bold text-foreground mb-1">
                    <Zap className="w-5 h-5 text-accent" />
                    Algumas horas
                  </div>
                  <p className="text-sm text-muted-foreground">Tempo de entrega</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="beneficios" className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por que escolher o <span className="text-gradient">AdaptCV</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tecnologia de ponta para maximizar suas chances de conseguir a
                vaga dos sonhos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {BENEFITS.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300 section-item"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section
          id="como-funciona"
          className="py-24 bg-background"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Como <span className="text-gradient">funciona</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Compre créditos, envie seu CV e a descrição da vaga, e receba o
                currículo otimizado por e-mail. A primeira otimização é grátis.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {HOW_IT_WORKS.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="bg-card rounded-2xl p-8 shadow-soft h-full border border-border/50 hover:border-primary/30 transition-colors section-item">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className="text-5xl font-bold text-muted-foreground/30 absolute top-6 right-8">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sistema de créditos */}
        <section
          id="creditos"
          className="py-24 bg-card"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sistema de <span className="text-gradient">créditos</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Você compra um pacote com créditos. Cada crédito permite melhorar
                1 currículo. Use quando quiser, sem expiração. A primeira otimização é grátis.
              </p>
              <ul className="space-y-2 text-left text-sm text-muted-foreground max-w-sm mx-auto mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  Pacotes com 1 a 50 créditos
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  1 crédito = 1 currículo melhorado
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  Créditos sem data de validade
                </li>
              </ul>
              <Link
                href="#preco"
                className={cn(buttonVariants({ variant: 'hero', size: 'lg' }))}
              >
                Ver pacotes e preços
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Preços */}
        <section
          id="preco"
          className="py-24 bg-background"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Escolha seu <span className="text-gradient">pacote</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Quanto mais créditos, melhor o custo por currículo.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.credits}
                  className="rounded-2xl border border-border/50 bg-card p-6 text-center shadow-soft hover:border-primary/30 transition-all duration-300"
                >
                  <p className="text-xl font-semibold text-foreground">
                    {pkg.credits} {pkg.credits === 1 ? 'crédito' : 'créditos'}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-primary">
                    R$ {pkg.price}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pkg.label}
                  </p>
                  <Link
                    href={`/comprar?pacote=${pkg.credits}`}
                    className={cn(
                      buttonVariants({ variant: 'hero', size: 'default' }),
                      'mt-4 w-full inline-flex justify-center'
                    )}
                  >
                    Comprar
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upload */}
        <CVUploadSection />

        {/* CTA final */}
        <section
          id="cta"
          className="py-24 bg-card relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Comece grátis hoje
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Pronto para conseguir mais entrevistas?
              </h2>

              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                Junte-se a milhares de profissionais que já estão usando o
                AdaptCV para destacar suas candidaturas.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <Link
                  href="#upload"
                  className={cn(buttonVariants({ variant: 'accent', size: 'xl' }))}
                >
                  Começar Agora - Grátis
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/comprar"
                  className={cn(buttonVariants({ variant: 'heroOutline', size: 'xl' }))}
                >
                  Comprar créditos
                </Link>
              </div>

              <p className="text-sm text-muted-foreground">
                Pagamento via Mercado Pago. Precisa de mais créditos?{' '}
                <Link href="/comprar" className="text-primary font-medium hover:underline">
                  Ver pacotes
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <FileText className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">AdaptCV</span>
            </Link>

            <nav className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacidade
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contato
              </a>
            </nav>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AdaptCV. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
