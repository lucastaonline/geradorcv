import { renderBrandLogoPng } from '@/lib/render-brand-logo-png'

export const runtime = 'edge'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return renderBrandLogoPng(size.width, size.height)
}
