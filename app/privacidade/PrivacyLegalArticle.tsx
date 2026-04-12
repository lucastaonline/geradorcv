'use client'

import { Fragment } from 'react'
import { useTranslations } from '@/lib/i18n'

const P = 'legal.privacyContent.'

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

export function PrivacyLegalArticle() {
  const t = useTranslations()
  const tk = (k: string) => t(`${P}${k}`)
  const privacyEmail = t('legal.privacy.footerEmail')

  return (
    <>
      <p className="intro">{tk('intro')}</p>

      <section>
        <h2>
          <span className="num">1</span> {tk('s1Title')}
        </h2>
        {paragraphWithSiteLink(tk('s1p1'))}
        <p>{ib(tk('s1p2'))}</p>
        <p>
          {tk('s1p3Before')}
          <a
            href={`mailto:${privacyEmail}`}
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            {privacyEmail}
          </a>
        </p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">2</span> {tk('s2Title')}
        </h2>
        <p>{tk('s2Intro')}</p>
        <ul>
          <li>{ib(tk('s2li0'))}</li>
          <li>{ib(tk('s2li1'))}</li>
          <li>{ib(tk('s2li2'))}</li>
          <li>{ib(tk('s2li3'))}</li>
          <li>{ib(tk('s2li4'))}</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">3</span> {tk('s3Title')}
        </h2>
        <p>{tk('s3Intro')}</p>
        <ul>
          <li>{tk('s3li0')}</li>
          <li>{tk('s3li1')}</li>
          <li>{tk('s3li2')}</li>
          <li>{tk('s3li3')}</li>
          <li>{tk('s3li4')}</li>
          <li>{tk('s3li5')}</li>
        </ul>
        <div className="highlight-box">{ib(tk('s3Highlight'))}</div>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">4</span> {tk('s4Title')}
        </h2>
        <p>{tk('s4Intro')}</p>
        <ul>
          <li>{ib(tk('s4li0'))}</li>
          <li>{ib(tk('s4li1'))}</li>
          <li>{ib(tk('s4li2'))}</li>
          <li>{ib(tk('s4li3'))}</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">5</span> {tk('s5Title')}
        </h2>
        <p>{tk('s5p1')}</p>
        <ul>
          <li>{ib(tk('s5li0'))}</li>
          <li>{ib(tk('s5li1'))}</li>
          <li>{ib(tk('s5li2'))}</li>
          <li>{ib(tk('s5li3'))}</li>
          <li>{ib(tk('s5li4'))}</li>
        </ul>
        <p>{tk('s5p2')}</p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">6</span> {tk('s6Title')}
        </h2>
        <p>{tk('s6Intro')}</p>
        <ul>
          <li>{ib(tk('s6li0'))}</li>
          <li>{ib(tk('s6li1'))}</li>
          <li>{ib(tk('s6li2'))}</li>
        </ul>
        <p>{tk('s6p2')}</p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">7</span> {tk('s7Title')}
        </h2>
        <p>{tk('s7Intro')}</p>
        <ul>
          <li>{ib(tk('s7li0'))}</li>
          <li>{ib(tk('s7li1'))}</li>
          <li>{ib(tk('s7li2'))}</li>
          <li>{ib(tk('s7li3'))}</li>
          <li>{ib(tk('s7li4'))}</li>
          <li>{ib(tk('s7li5'))}</li>
          <li>{ib(tk('s7li6'))}</li>
        </ul>
        <div className="highlight-box">
          {tk('s7HighlightBefore')}
          <strong>
            <a
              href={`mailto:${privacyEmail}`}
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              {privacyEmail}
            </a>
          </strong>
          {tk('s7HighlightAfter')}
        </div>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">8</span> {tk('s8Title')}
        </h2>
        <p>{tk('s8p1')}</p>
        <ul>
          <li>{tk('s8li0')}</li>
          <li>{tk('s8li1')}</li>
          <li>{tk('s8li2')}</li>
        </ul>
        <p>{tk('s8p2')}</p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">9</span> {tk('s9Title')}
        </h2>
        <p>{ib(tk('s9p1'))}</p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">10</span> {tk('s10Title')}
        </h2>
        <p>{tk('s10p1')}</p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">11</span> {tk('s11Title')}
        </h2>
        <p>{tk('s11Intro')}</p>
        <ul>
          <li>
            {tk('s11EmailLabel')}{' '}
            <a
              href={`mailto:${privacyEmail}`}
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              {privacyEmail}
            </a>
          </li>
        </ul>
        <p>
          {ib(tk('s11p2Before'))}
          <a
            href="https://www.gov.br/anpd"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            gov.br/anpd
          </a>
          {tk('s11p2After') ? ib(tk('s11p2After')) : null}
        </p>
      </section>
    </>
  )
}
