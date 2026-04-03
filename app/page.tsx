'use client'

import Link from 'next/link'
import {
  FileText,
  Sparkles,
  ArrowRight,
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
import LanguageSwitcher from './components/LanguageSwitcher'
import { useTranslations } from '@/lib/i18n'
import { trackBuyCreditsClick } from '@/lib/analytics/client'

const HOW_IT_WORKS_KEYS = [
  { icon: CreditCard, number: '01', titleKey: 'home.howItWorks.step1Title', descKey: 'home.howItWorks.step1Desc' },
  { icon: Upload, number: '02', titleKey: 'home.howItWorks.step2Title', descKey: 'home.howItWorks.step2Desc' },
  { icon: Mail, number: '03', titleKey: 'home.howItWorks.step3Title', descKey: 'home.howItWorks.step3Desc' },
]

const BENEFITS_KEYS = [
  { icon: Brain, titleKey: 'home.benefits.ai', descKey: 'home.benefits.aiDesc' },
  { icon: TrendingUp, titleKey: 'home.benefits.conversion', descKey: 'home.benefits.conversionDesc' },
  { icon: Clock, titleKey: 'home.benefits.time', descKey: 'home.benefits.timeDesc' },
  { icon: Shield, titleKey: 'home.benefits.security', descKey: 'home.benefits.securityDesc' },
  { icon: CheckCircle2, titleKey: 'home.benefits.keywords', descKey: 'home.benefits.keywordsDesc' },
  { icon: Users, titleKey: 'home.benefits.ats', descKey: 'home.benefits.atsDesc' },
]

export default function Home() {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="animate-header fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 h-16">
          <div className="max-w-6xl mx-auto h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">{t('common.brand')}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#beneficios"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('home.nav.benefits')}
            </a>
            <a
              href="#como-funciona"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('home.nav.howItWorks')}
            </a>
            <a
              href="#creditos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('home.nav.credits')}
            </a>
            <a
              href="#preco"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('home.nav.pricing')}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="/comprar"
              onClick={() => trackBuyCreditsClick('header')}
              className={cn(buttonVariants({ variant: 'heroOutline', size: 'sm' }), 'hidden sm:inline-flex')}
            >
              {t('home.nav.buyCredits')}
            </Link>
            <Link
              href="#upload"
              className={cn(buttonVariants({ variant: 'hero', size: 'sm' }))}
            >
              {t('home.nav.startFree')}
            </Link>
          </div>
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
              <h1 className="hero-item text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                {t('home.hero.headlineBefore')}{' '}
                <span className="text-gradient">{t('home.hero.headlineHighlight')}</span>{' '}
                {t('home.hero.headlineAfter')}
              </h1>

              <p className="hero-item text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                {t('home.hero.subtitle')}
              </p>

              <div className="hero-item flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Link
                  href="#upload"
                  className={cn(buttonVariants({ variant: 'hero', size: 'xl' }))}
                >
                  {t('home.hero.ctaPrimary')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#como-funciona"
                  className={cn(buttonVariants({ variant: 'heroOutline', size: 'xl' }))}
                >
                  {t('home.hero.ctaSecondary')}
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="beneficios" className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t('home.benefits.title')} <span className="text-gradient">{t('common.brand')}</span>{t('home.benefits.titleSuffix')}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t('home.benefits.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BENEFITS_KEYS.map((benefit, index) => (
                <div
                  key={benefit.titleKey}
                  className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300 section-item"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {t(benefit.titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(benefit.descKey)}
                  </p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section
          id="como-funciona"
          className="py-24 bg-background"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t('home.howItWorks.title')} <span className="text-gradient">{t('home.howItWorks.titleHighlight')}</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t('home.howItWorks.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {HOW_IT_WORKS_KEYS.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="bg-card rounded-2xl p-8 shadow-soft h-full border border-border/50 hover:border-primary/30 transition-colors section-item">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className="text-5xl font-bold text-muted-foreground/30 absolute top-6 right-8">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-muted-foreground">{t(step.descKey)}</p>
                  </div>
                  {index < HOW_IT_WORKS_KEYS.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sistema de créditos */}
        <section
          id="creditos"
          className="py-24 bg-card"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('home.creditsSection.title')} <span className="text-gradient">{t('home.creditsSection.titleHighlight')}</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t('home.creditsSection.intro')}{' '}
                <span className="font-semibold text-primary">{t('home.creditsSection.introHighlight')}</span>
              </p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{t('home.creditsSection.bullet1')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{t('home.creditsSection.bullet2')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{t('home.creditsSection.bullet3')}</span>
                </div>
              </div>
              <Link
                href="#preco"
                className={cn(buttonVariants({ variant: 'hero', size: 'lg' }))}
              >
                {t('home.creditsSection.cta')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            </div>
          </div>
        </section>

        {/* Preços */}
        <section
          id="preco"
          className="py-24 bg-background"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('home.pricing.title')} <span className="text-gradient">{t('home.pricing.titleHighlight')}</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {t('home.pricing.subtitle')}
              </p>
              <p className="mt-4 text-sm font-medium text-primary max-w-lg mx-auto">
                {t('home.pricing.firstFree')}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.credits}
                  className="rounded-2xl border border-border/50 bg-card p-6 text-center shadow-soft hover:border-primary/30 transition-all duration-300"
                >
                  <p className="text-xl font-semibold text-foreground">
                    {pkg.credits} {pkg.credits === 1 ? t('common.credit') : t('common.credits')}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-primary">
                    R$ {pkg.price}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pkg.credits} {pkg.credits === 1 ? t('common.resume') : t('common.resumes')}
                  </p>
                  <Link
                    href={`/comprar?pacote=${pkg.credits}`}
                    onClick={() =>
                      trackBuyCreditsClick('pricing', { credits: pkg.credits })
                    }
                    className={cn(
                      buttonVariants({ variant: 'hero', size: 'default' }),
                      'mt-4 w-full inline-flex justify-center'
                    )}
                  >
                    {t('common.buy')}
                  </Link>
                </div>
              ))}
            </div>
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
            <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {t('home.cta.title')}
              </h2>

              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                {t('home.cta.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <Link
                  href="#upload"
                  className={cn(buttonVariants({ variant: 'accent', size: 'xl' }))}
                >
                  {t('home.cta.startNow')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/comprar"
                  onClick={() => trackBuyCreditsClick('cta_section')}
                  className={cn(buttonVariants({ variant: 'heroOutline', size: 'xl' }))}
                >
                  {t('home.nav.buyCredits')}
                </Link>
              </div>

              <p className="text-sm text-muted-foreground">
                {t('common.paymentViaMercadoPago')} {t('common.needMoreCredits')}{' '}
                <Link
                  href="/comprar"
                  onClick={() => trackBuyCreditsClick('cta_footer_link')}
                  className="text-primary font-medium hover:underline"
                >
                  {t('common.seePackages')}
                </Link>
              </p>
            </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <FileText className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">{t('common.brand')}</span>
            </Link>

            <nav className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('common.termsOfUse')}
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('common.privacy')}
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('common.contact')}
              </a>
            </nav>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {t('common.brand')}. {t('common.allRightsReserved')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
