/** Chaves de sessionStorage para correlacionar checkout → compra (GA4). */
export const CHECKOUT_SESSION_KEY = 'adaptcv_checkout'
export const PURCHASE_SENT_PREFIX = 'adaptcv_ga_purchase_'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackGa4Event(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', eventName, params ?? {})
}

export function trackBuyCreditsClick(
  location: string,
  extra?: Record<string, unknown>
): void {
  trackGa4Event('click_buy_credits', { location, ...extra })
}
