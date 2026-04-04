'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
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

function BeforePanel({ data }: { data: BeforeCv }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-card p-5 md:p-[22px] font-sans text-left">
      <div className="-mx-5 md:-mx-[22px] -mt-5 md:-mt-[22px] mb-3.5 bg-[#232323] px-[18px] py-3.5 text-white md:mb-3.5">
        <div className="text-xl font-bold tracking-[0.2em]">{data.name}</div>
        <div className="mt-1 text-[9px] tracking-[0.35em] text-neutral-400">
          {data.title}
        </div>
      </div>
      <p className="mb-2.5 text-[10px] leading-relaxed text-neutral-700">
        {data.summary}
      </p>
      <div className="-mx-5 md:-mx-[22px] mb-3.5 flex flex-wrap gap-3.5 bg-[#555555] px-[18px] py-1.5 text-[9.5px] text-neutral-300">
        {data.contact.map((c, i) => (
          <span key={i}>{c}</span>
        ))}
      </div>
      <div className="mb-1 border-b border-neutral-200 pb-1 text-[9px] font-normal uppercase tracking-[0.12em] text-neutral-500">
        {data.sections.knowledge}
      </div>
      <div className="mb-3 grid grid-cols-5 gap-1.5">
        {data.skills.map((s) => (
          <div key={s.label}>
            <div className="mb-0.5 text-[9px] font-bold text-neutral-900">
              {s.label}
            </div>
            {s.items.map((item, j) => (
              <div key={j} className="text-[9px] leading-snug text-neutral-600">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3.5">
        <div>
          <div className="mb-1 border-b border-neutral-200 pb-1 text-[9px] uppercase tracking-[0.12em] text-neutral-500">
            {data.sections.experience}
          </div>
          <div className="text-[11px] font-bold text-neutral-900">
            {data.experience.company}
          </div>
          <div className="mb-1 text-[9px] text-neutral-500">
            {data.experience.role}
          </div>
          <ul className="ml-3 list-disc pl-0 text-[9px] text-neutral-600">
            {data.experience.bullets.map((b, i) => (
              <li key={i} className="mb-0.5 leading-snug">
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-1 border-b border-neutral-200 pb-1 text-[9px] uppercase tracking-[0.12em] text-neutral-500">
            {data.sections.education}
          </div>
          <div className="text-[11px] font-bold text-neutral-900">
            {data.education.degree}
          </div>
          <div className="text-[9px] text-neutral-500">{data.education.detail}</div>
        </div>
      </div>
    </div>
  )
}

function AfterPanel({ data }: { data: AfterCv }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-card p-5 md:p-[22px] font-sans text-left">
      <div className="mb-0.5 text-lg font-bold tracking-wide text-foreground">
        {data.name}
      </div>
      <div className="mb-1.5 text-[10px] font-medium text-primary">
        {data.subtitlePrefix}
        <span className="text-muted-foreground"> | </span>
        {data.titleKws.map((kw, i) => (
          <span key={i}>
            <span className="rounded px-0.5 bg-primary/15 text-primary font-medium">
              {kw}
            </span>
            {i < data.titleKws.length - 1 && (
              <span className="text-neutral-400"> · </span>
            )}
          </span>
        ))}
      </div>
      <div className="mb-0.5 text-[10px] text-muted-foreground">{data.contactLine}</div>

      <div className="mb-1 mt-2 border-b border-border pb-1 text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
        {data.sections.summary}
      </div>
      <p className="mb-2 text-[10px] leading-relaxed text-foreground">
        {renderTokens(data.summary)}
      </p>

      <div className="mb-1 border-b border-border pb-1 text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
        {data.sections.keySkills}
      </div>
      <div className="mb-2.5 space-y-0.5">
        {data.skills.map((s) => (
          <div key={s.label} className="text-[10px] leading-relaxed text-foreground">
            <span className="mr-1 font-medium text-foreground">{s.label}:</span>
            {s.items.map((item, i) => (
              <span key={i}>
                {typeof item === 'string' ? (
                  <span>{item}</span>
                ) : (
                  <span className="rounded px-0.5 bg-primary/15 text-primary font-medium">
                    {item.kw}
                  </span>
                )}
                {i < s.items.length - 1 && <span>, </span>}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="mb-1 border-b border-border pb-1 text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
        {data.sections.experience}
      </div>
      <div className="text-[11px] font-semibold text-foreground">
        {data.experience.roleTitle}
      </div>
      <div className="mb-1 text-[9px] text-muted-foreground">
        {data.experience.companyLine}
      </div>
      <p className="mb-1 text-[10px] leading-relaxed text-neutral-700">
        {renderTokens(data.experience.context)}
      </p>
      <div className="space-y-0.5 text-[10px] leading-relaxed text-foreground">
        {data.experience.bullets.map((b, i) => (
          <div key={i}>– {renderTokens(b)}</div>
        ))}
      </div>

      <div className="mb-1 mt-3 border-b border-border pb-1 text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
        {data.sections.education}
      </div>
      <div className="text-[11px] font-semibold text-foreground">
        {data.education.degree}
      </div>
      <div className="text-[9px] text-muted-foreground">{data.education.detail}</div>
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

export default function BeforeAfterCVSlider() {
  const { locale } = useLocale()
  const t = useTranslations()
  const demo = getBeforeAfterDemo(locale)

  const wrapRef = useRef<HTMLDivElement>(null)
  const [pct, setPct] = useState(50)
  const dragging = useRef(false)

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
    let p = 50
    const target = 34
    const iv = setInterval(() => {
      p += (target - p) * 0.1
      if (Math.abs(p - target) < 0.3) {
        p = target
        clearInterval(iv)
      }
      setPct(p)
    }, 16)
    const reset = setTimeout(() => {
      clearInterval(iv)
      let p2 = target
      const iv2 = setInterval(() => {
        p2 += (50 - p2) * 0.08
        if (Math.abs(p2 - 50) < 0.3) {
          p2 = 50
          clearInterval(iv2)
        }
        setPct(p2)
      }, 16)
    }, 1800)
    return () => {
      clearInterval(iv)
      clearTimeout(reset)
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
          'relative h-[460px] cursor-ew-resize select-none overflow-hidden rounded-xl border border-border bg-card',
          'touch-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
        )}
        onMouseDown={(e) => {
          dragging.current = true
          update(e.clientX)
        }}
        onTouchStart={(e) => {
          dragging.current = true
          update(e.touches[0].clientX)
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.preventDefault()
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
