'use client'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { useLocale, useTranslations } from '@/lib/i18n'
import {
  getBeforeAfterDemo,
  type BeforeCv,
  type AfterCv,
  type Token,
  type StoryPart,
} from '@/lib/i18n/beforeAfterDemo'
import { cn } from '@/lib/utils'

function renderTokens(tokens: Token[]) {
  return tokens.map((t, i) =>
    typeof t === 'string' ? (
      <span key={i}>{t}</span>
    ) : (
      <span
        key={i}
        className="rounded px-0.5 bg-primary/15 text-primary font-medium"
      >
        {t.kw}
      </span>
    )
  )
}

function BeforeSectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-1 mt-2.5 border-b border-neutral-400 pb-0.5 text-[9px] font-normal uppercase tracking-[0.08em] text-neutral-600">
      {children}
    </div>
  )
}

/**
 * Visual “CV fraco”: fundo branco, hierarquia e estrutura só em cinza —
 * datado, sem preto nem layout premium.
 */
function BeforePanel({ data }: { data: BeforeCv }) {
  return (
    <div
      className={cn(
        'absolute inset-0 box-border h-full overflow-hidden text-left',
        'border border-neutral-400 bg-white text-neutral-700',
        'font-serif [color-scheme:light]'
      )}
    >
      <div className="flex h-full min-h-0 flex-col px-8 pb-3 pt-3.5 sm:px-10 md:px-12">
        <header className="mb-2 shrink-0 border-b border-neutral-400 pb-2.5">
          <div className="text-[17px] font-bold tracking-tight text-neutral-800">{data.name}</div>
          <div className="mt-0.5 text-[10px] font-normal text-neutral-600">{data.title}</div>
          <p className="mb-0 mt-1.5 border-l-2 border-neutral-400 pl-2 text-[9px] leading-snug text-neutral-600">
            {data.mutedBanner}
          </p>
        </header>

        <div className="min-h-0 flex-1 overflow-hidden">
          <BeforeSectionLabel>{data.sections.about}</BeforeSectionLabel>
          <p className="mb-2 text-[10px] leading-[1.65] text-neutral-700">{data.aboutBody}</p>

          <BeforeSectionLabel>{data.sections.experience}</BeforeSectionLabel>
          {data.jobs.map((job, i) => (
            <div key={i} className="mb-2">
              <div className="text-[10.5px] font-semibold text-neutral-800">{job.company}</div>
              <div className="mb-0.5 text-[9.5px] text-neutral-600">{job.period}</div>
              <p className="m-0 text-[10px] leading-[1.65] text-neutral-700">{job.body}</p>
            </div>
          ))}

          <BeforeSectionLabel>{data.sections.skills}</BeforeSectionLabel>
          <p className="mb-2 border border-dashed border-neutral-400 bg-neutral-200/90 px-2 py-1.5 text-[10px] leading-[1.75] text-neutral-700">
            {data.skillsLine}
          </p>

          <BeforeSectionLabel>{data.sections.education}</BeforeSectionLabel>
          <div className="text-[10.5px] font-semibold text-neutral-800">{data.education.degree}</div>
          <div className="text-[9.5px] text-neutral-600">{data.education.detail}</div>
        </div>
      </div>
    </div>
  )
}

function AfterSectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-1 mt-2.5 border-b border-primary/20 pb-0.5 text-[9px] font-medium uppercase tracking-[0.13em] text-primary/80">
      {children}
    </div>
  )
}

/** Visual “novo”: fundo claro, leve tom azul e primary nos destaques. */
function AfterPanel({ data }: { data: AfterCv }) {
  return (
    <div
      className={cn(
        'absolute inset-0 box-border h-full overflow-hidden bg-gradient-to-b from-card via-card to-primary/[0.06]',
        'px-8 py-[18px] font-sans text-left shadow-[inset_0_1px_0_0_hsl(var(--primary)/0.12)] ring-1 ring-primary/10 dark:to-primary/[0.09] dark:ring-primary/20 sm:px-10 md:px-12'
      )}
    >
      <div className="mb-0.5 text-[17px] font-bold text-foreground">{data.name}</div>
      <div className="mb-1 text-[10px] font-medium text-primary">
        {data.subtitlePrefix}
        <span className="text-muted-foreground"> | </span>
        {renderTokens(data.headlineKeywords)}
      </div>
      <div className="mb-2 text-[9.5px] text-muted-foreground">{data.contactLine}</div>

      <AfterSectionLabel>{data.sections.summary}</AfterSectionLabel>
      <p className="mb-2 text-[10px] leading-[1.7] text-foreground">
        {renderTokens(data.summary)}
      </p>

      <AfterSectionLabel>{data.sections.keySkills}</AfterSectionLabel>
      <div className="mb-2 space-y-0.5 text-[10px] leading-[1.85] text-foreground">
        {data.skillRows.map((row) => (
          <div key={row.label}>
            <span className="font-medium">{row.label}:</span>{' '}
            {renderTokens(row.parts)}
          </div>
        ))}
      </div>

      <AfterSectionLabel>{data.sections.experience}</AfterSectionLabel>
      {data.jobs.map((job, ji) => (
        <div key={ji} className={ji < data.jobs.length - 1 ? 'mb-2.5' : ''}>
          <div className="text-[10.5px] font-medium text-foreground">{job.roleTitle}</div>
          <div className="mb-1 text-[9.5px] text-muted-foreground">{job.companyLine}</div>
          <p className="mb-1 text-[10px] leading-[1.65] text-foreground">
            {renderTokens(job.intro)}
          </p>
          <div className="space-y-0.5 text-[10px] leading-[1.75] text-foreground">
            {job.highlights.map((line, hi) => (
              <div key={hi}>{renderTokens(line)}</div>
            ))}
          </div>
        </div>
      ))}

      <AfterSectionLabel>{data.sections.education}</AfterSectionLabel>
      <div className="text-[10.5px] font-medium text-foreground">{data.education.degree}</div>
      <div className="text-[9.5px] text-muted-foreground">{data.education.detail}</div>
    </div>
  )
}

function StoryParagraph({ parts }: { parts: StoryPart[] }) {
  return (
    <p className="text-sm leading-relaxed text-muted-foreground">
      {parts.map((part, i) =>
        part.emphasis ? (
          <strong key={i} className="font-medium text-foreground">
            {part.text}
          </strong>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </p>
  )
}

/** Parecido com arrastar e soltar: acelera no meio, freia ao chegar (ease in-out). */
function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

function animatePct(
  from: number,
  to: number,
  durationMs: number,
  setPct: (v: number) => void,
  shouldAbort: () => boolean
): Promise<void> {
  return new Promise((resolve) => {
    const start = performance.now()
    const step = (now: number) => {
      if (shouldAbort()) {
        resolve()
        return
      }
      const t = Math.min(1, (now - start) / durationMs)
      const e = easeInOutQuad(t)
      setPct(from + (to - from) * e)
      if (t < 1) {
        requestAnimationFrame(step)
      } else {
        resolve()
      }
    }
    requestAnimationFrame(step)
  })
}

function sleep(ms: number, shouldAbort: () => boolean): Promise<void> {
  return new Promise((resolve) => {
    let settled = false
    const finish = () => {
      if (settled) return
      settled = true
      window.clearInterval(poll)
      resolve()
    }
    const t = window.setTimeout(finish, ms)
    const poll = window.setInterval(() => {
      if (shouldAbort()) {
        window.clearTimeout(t)
        finish()
      }
    }, 80)
  })
}

export default function BeforeAfterCVSlider() {
  const { locale } = useLocale()
  const t = useTranslations()
  const demo = getBeforeAfterDemo(locale)

  const wrapRef = useRef<HTMLDivElement>(null)
  const [pct, setPct] = useState(50)
  const dragging = useRef(false)
  const cancelIntroRef = useRef(false)
  const introStartedRef = useRef(false)

  const update = useCallback((clientX: number) => {
    const el = wrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const next = Math.max(4, Math.min(96, ((clientX - rect.left) / rect.width) * 100))
    setPct(next)
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (dragging.current) update(e.clientX)
    }
    const onTouchMove = (e: TouchEvent) => {
      if (dragging.current) {
        e.preventDefault()
        update(e.touches[0].clientX)
      }
    }
    const stop = () => {
      dragging.current = false
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('touchmove', onTouchMove, { passive: false })
    document.addEventListener('mouseup', stop)
    document.addEventListener('touchend', stop)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('mouseup', stop)
      document.removeEventListener('touchend', stop)
    }
  }, [update])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    cancelIntroRef.current = false

    const shouldAbort = () => cancelIntroRef.current

    /**
     * Simula o arraste do usuário: puxa para um lado (mais “depois”), depois o outro (mais “antes”), volta ao meio.
     * Valores em % da largura (mesmo cálculo do mouse).
     */
    const playIntro = async () => {
      let cursor = 50
      const setSmooth = (v: number) => {
        cursor = v
        setPct(v)
      }

      const pauseAfterDrag = 450
      const dragMs = 1100

      await animatePct(cursor, 22, dragMs, setSmooth, shouldAbort)
      if (shouldAbort()) return
      await sleep(pauseAfterDrag, shouldAbort)
      if (shouldAbort()) return

      await animatePct(cursor, 78, dragMs, setSmooth, shouldAbort)
      if (shouldAbort()) return
      await sleep(pauseAfterDrag, shouldAbort)
      if (shouldAbort()) return

      await animatePct(cursor, 50, dragMs, setSmooth, shouldAbort)
    }

    let observer: IntersectionObserver | null = null
    let cancelled = false

    const startWhenVisible = () => {
      const el = wrapRef.current
      if (!el || cancelled) return

      const run = () => {
        if (introStartedRef.current || cancelled) return
        introStartedRef.current = true
        observer?.disconnect()
        observer = null
        void playIntro()
      }

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.some((e) => e.isIntersecting)
          if (!visible) return
          run()
        },
        { threshold: 0, rootMargin: '60px 0px 60px 0px' }
      )

      observer.observe(el)

      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 0
      if (rect.top < vh && rect.bottom > 0) {
        run()
      }
    }

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(startWhenVisible)
    })

    return () => {
      cancelled = true
      cancelIntroRef.current = true
      cancelAnimationFrame(raf)
      observer?.disconnect()
    }
  }, [])

  const clipBefore = `inset(0 ${100 - pct}% 0 0)`

  return (
    <div className="mx-auto w-full max-w-3xl font-sans">
      <div className="mb-8 grid gap-8 md:grid-cols-2 md:gap-10">
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {t('home.beforeAfter.beforeTopicsTitle')}
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {demo.beforeTopics.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            {t('home.beforeAfter.afterTopicsTitle')}
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {demo.afterTopics.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mb-3 text-center text-sm text-muted-foreground">
        {t('home.beforeAfter.dragHint')}
      </p>

      <div className="mb-3 flex justify-between text-[11px] font-semibold uppercase tracking-wider">
        <span className="text-muted-foreground">{t('home.beforeAfter.labelBefore')}</span>
        <span className="text-primary">{t('home.beforeAfter.labelAfter')}</span>
      </div>

      <div
        ref={wrapRef}
        role="slider"
        aria-valuemin={4}
        aria-valuemax={96}
        aria-valuenow={Math.round(pct)}
        aria-label={t('home.beforeAfter.sliderAriaLabel')}
        tabIndex={0}
        className={cn(
          'relative h-[520px] cursor-ew-resize select-none overflow-hidden rounded-xl border border-border bg-card',
          'touch-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
        )}
        onMouseDown={(e) => {
          cancelIntroRef.current = true
          dragging.current = true
          update(e.clientX)
        }}
        onTouchStart={(e) => {
          cancelIntroRef.current = true
          dragging.current = true
          update(e.touches[0].clientX)
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.preventDefault()
            cancelIntroRef.current = true
            const delta = e.key === 'ArrowLeft' ? 4 : -4
            setPct((p) => Math.max(4, Math.min(96, p + delta)))
          }
        }}
      >
        <AfterPanel data={demo.after} />

        <div
          className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
          style={{ clipPath: clipBefore }}
        >
          <BeforePanel data={demo.before} />
        </div>

        <div
          className="pointer-events-none absolute top-0 z-[19] h-full w-0.5 -translate-x-px bg-primary"
          style={{ left: `${pct}%` }}
          aria-hidden
        />
        <div
          className="absolute top-0 z-20 flex h-full -translate-x-1/2 items-center"
          style={{ left: `${pct}%` }}
          aria-hidden
        >
          <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M4 7L1 4.5M1 4.5L4 2M1 4.5H13M10 7L13 4.5M13 4.5L10 2M13 4.5H1"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-border bg-muted/40 p-3.5 md:p-4">
        <StoryParagraph parts={demo.story} />
      </div>
    </div>
  )
}
