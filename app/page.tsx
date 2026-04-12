'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import {
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './components/ui/accordion'
import { cn } from '@/lib/utils'
import { PACKAGES } from '@/lib/packages'
import CVUploadSection from './components/CVUploadSection'
import BeforeAfterCVSlider from './components/BeforeAfterCVSlider'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
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

const FAQ_ITEM_KEYS = [
  { q: 'home.faq.qAts', a: 'home.faq.aAts' },
  { q: 'home.faq.qFirstFree', a: 'home.faq.aFirstFree' },
  { q: 'home.faq.qCredits', a: 'home.faq.aCredits' },
  { q: 'home.faq.qNoCredits', a: 'home.faq.aNoCredits' },
  { q: 'home.faq.qFormats', a: 'home.faq.aFormats' },
  { q: 'home.faq.qJobDesc', a: 'home.faq.aJobDesc' },
  { q: 'home.faq.qDelivery', a: 'home.faq.aDelivery' },
  { q: 'home.faq.qData', a: 'home.faq.aData' },
  { q: 'home.faq.qPayment', a: 'home.faq.aPayment' },
  {
    q: 'home.faq.qSupport',
    a: 'home.faq.aSupport',
    emailKey: 'home.faq.supportEmail',
  },
] as const

function faqAnswerContent(
  item: (typeof FAQ_ITEM_KEYS)[number],
  translate: (key: string) => string
): ReactNode {
  const text = translate(item.a)
  if (!('emailKey' in item) || !item.emailKey) {
    return text
  }
  const linkEmail = translate(item.emailKey)
  const i = text.indexOf(linkEmail)
  if (i < 0) {
    return text
  }
  return (
    <>
      {text.slice(0, i)}
      <a
        href={`mailto:${linkEmail}`}
        className="font-medium text-primary underline-offset-2 hover:underline"
      >
        {linkEmail}
      </a>
      {text.slice(i + linkEmail.length)}
    </>
  )
}

export default function Home() {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

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

        <section
          id="antes-depois"
          className="border-t border-border/60 py-24 bg-card"
          aria-labelledby="antes-depois-heading"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2
                  id="antes-depois-heading"
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  {t('home.beforeAfter.title')}{' '}
                  <span className="text-gradient">{t('home.beforeAfter.titleHighlight')}</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t('home.beforeAfter.subtitle')}
                </p>
              </div>
              <BeforeAfterCVSlider />
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

        <section
          id="faq"
          className="py-24 bg-background border-t border-border/60"
          aria-labelledby="faq-heading"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2
                  id="faq-heading"
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  {t('home.faq.title')}{' '}
                  <span className="text-gradient">{t('home.faq.titleHighlight')}</span>
                </h2>
                <p className="text-muted-foreground">{t('home.faq.subtitle')}</p>
              </div>
              <Accordion
                type="single"
                collapsible
                className="rounded-2xl border border-border/50 bg-card shadow-soft overflow-hidden"
              >
                {FAQ_ITEM_KEYS.map((item, index) => (
                  <AccordionItem key={item.q} value={`faq-${index}`}>
                    <AccordionTrigger>{t(item.q)}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {faqAnswerContent(item, t)}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
