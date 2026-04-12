'use client'

import Link from 'next/link'
import { Fragment } from 'react'
import { useTranslations } from '@/lib/i18n'

const P = 'legal.termsContent.'

/** Trechos **negrito** nos JSON (LGPD/Mercado Pago etc.). */
function ib(s: string) {
  const parts = s.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    const inner = /^\*\*(.+)\*\*$/.exec(part)
    if (inner) {
      return (
        <strong key={i} className="text-foreground">
          {inner[1]}
        </strong>
      )
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}

function paragraphWithSiteLink(text: string) {
  const bits = text.split('adaptcv.app')
  if (bits.length === 1) {
    return <p>{ib(text)}</p>
  }
  return (
    <p>
      {ib(bits[0])}
      <a
        href="https://adaptcv.app"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-primary underline-offset-2 hover:underline"
      >
        adaptcv.app
      </a>
      {ib(bits.slice(1).join('adaptcv.app'))}
    </p>
  )
}

export function TermsLegalArticle() {
  const t = useTranslations()
  const tk = (k: string) => t(`${P}${k}`)
  const contactEmail = t('legal.terms.footerEmail')

  return (
    <>
      <p className="intro">
        {tk('introBefore')}
        <a
          href={`mailto:${contactEmail}`}
          className="font-medium text-primary underline-offset-2 hover:underline"
        >
          {contactEmail}
        </a>
        {tk('introAfter')}
      </p>

      <section>
        <h2>
          <span className="num">1</span> {tk('s1Title')}
        </h2>
        <p>{ib(tk('s1p1'))}</p>
        {paragraphWithSiteLink(tk('s1p2'))}
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">2</span> {tk('s2Title')}
        </h2>
        <p>{tk('s2Intro')}</p>
        <ul>
          <li>{tk('s2li0')}</li>
          <li>{tk('s2li1')}</li>
          <li>{tk('s2li2')}</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">3</span> {tk('s3Title')}
        </h2>
        <p>{tk('s3p1')}</p>
        <p>{tk('s3p2')}</p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">4</span> {tk('s4Title')}
        </h2>
        <p>{tk('s4Intro')}</p>
        <ul>
          <li>{ib(tk('s4li0'))}</li>
          <li>{tk('s4li1')}</li>
          <li>{ib(tk('s4li2'))}</li>
          <li>{tk('s4li3')}</li>
          <li>{tk('s4li4')}</li>
        </ul>
        <div className="warning-box">{tk('s4Warning')}</div>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">5</span> {tk('s5Title')}
        </h2>
        <p>{tk('s5Intro')}</p>
        <ul>
          <li>{tk('s5li0')}</li>
          <li>{tk('s5li1')}</li>
          <li>{tk('s5li2')}</li>
          <li>{tk('s5li3')}</li>
          <li>{tk('s5li4')}</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">6</span> {tk('s6Title')}
        </h2>
        <p>{tk('s6Intro')}</p>
        <ul>
          <li>{tk('s6li0')}</li>
          <li>{tk('s6li1')}</li>
          <li>{tk('s6li2')}</li>
        </ul>
        <div className="highlight-box">{ib(tk('s6Highlight'))}</div>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">7</span> {tk('s7Title')}
        </h2>
        <p>{ib(tk('s7p1'))}</p>
        <p>{tk('s7p2')}</p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">8</span> {tk('s8Title')}
        </h2>
        <p>{tk('s8p1')}</p>
        <p>{tk('s8p2')}</p>
        <ul>
          <li>{tk('s8li0')}</li>
          <li>{tk('s8li1')}</li>
          <li>{tk('s8li2')}</li>
          <li>{tk('s8li3')}</li>
        </ul>
        <p>{tk('s8p3')}</p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">9</span> {tk('s9Title')}
        </h2>
        <p>
          {tk('s9Before')}
          <Link
            href="/privacidade"
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            {tk('s9Link')}
          </Link>
          {tk('s9After')}
        </p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">10</span> {tk('s10Title')}
        </h2>
        <p>{tk('s10p1')}</p>
        <p>{tk('s10p2')}</p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">11</span> {tk('s11Title')}
        </h2>
        <p>{tk('s11p1')}</p>
        <p>{tk('s11p2')}</p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">12</span> {tk('s12Title')}
        </h2>
        <p>{tk('s12p1')}</p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">13</span> {tk('s13Title')}
        </h2>
        <p>{tk('s13Intro')}</p>
        <ul>
          <li>
            {tk('s13EmailLabel')}{' '}
            <a
              href={`mailto:${contactEmail}`}
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              {contactEmail}
            </a>
          </li>
          <li>
            {tk('s13SiteLabel')}{' '}
            <a
              href="https://adaptcv.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              adaptcv.app
            </a>
          </li>
        </ul>
        <p>
          {tk('s13ConsumerBefore')}
          <a
            href="https://www.consumidor.gov.br"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            consumidor.gov.br
          </a>
          {tk('s13ConsumerAfter')}
        </p>
      </section>
    </>
  )
}
