import { ImageResponse } from 'next/og'
import { brandLogoSvgDataUri } from '@/lib/brand-logo-svg'

export function renderBrandLogoPng(width: number, height: number) {
  const src = brandLogoSvgDataUri()

  return new ImageResponse(
    (
      <div
        style={{
          width,
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        {/* Data URI local; ImageResponse não usa otimizador Next. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={width} height={height} alt="" />
      </div>
    ),
    { width, height }
  )
}
