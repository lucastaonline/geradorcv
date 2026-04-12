/**
 * SVG da logo (gradiente + FileText / Lucide), mesma aparência do header e de app/icon.svg.
 */
export const BRAND_LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <defs>
    <linearGradient id="adaptcv-logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
      <stop stop-color="hsl(217, 91%, 50%)" />
      <stop offset="1" stop-color="hsl(240, 84%, 60%)" />
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="8" fill="url(#adaptcv-logo-grad)" />
  <g transform="translate(4,4)" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
    <path d="M14 2v5a1 1 0 0 0 1 1h5" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </g>
</svg>`

export function brandLogoSvgDataUri(): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(BRAND_LOGO_SVG)}`
}
