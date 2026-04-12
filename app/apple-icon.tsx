import { renderBrandLogoPng } from '@/lib/render-brand-logo-png'

export const runtime = 'edge'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return renderBrandLogoPng(size.width, size.height)
}
