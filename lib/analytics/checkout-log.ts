import { createHash } from 'crypto'
import { appendFileSync } from 'fs'

export function hashEmailForLog(email: string): string {
  return createHash('sha256')
    .update(email.toLowerCase().trim())
    .digest('hex')
    .slice(0, 16)
}

type CheckoutLogPayload = {
  emailHash: string
  credits: number
  price: number
  referer: string | null
}

/**
 * Sempre escreve JSON em uma linha no stdout (útil em Vercel/hosting serverless).
 * Se CHECKOUT_LOG_PATH estiver definido, também faz append no arquivo (ex.: dev local).
 */
export function logCheckoutStarted(payload: CheckoutLogPayload): void {
  const line = JSON.stringify({
    ts: new Date().toISOString(),
    event: 'checkout_started',
    ...payload,
  })
  console.info('[analytics]', line)

  const logPath = process.env.CHECKOUT_LOG_PATH?.trim()
  if (!logPath) return
  try {
    appendFileSync(logPath, `${line}\n`, 'utf8')
  } catch (err) {
    console.warn('[analytics] CHECKOUT_LOG_PATH append failed', err)
  }
}
