/**
 * Pacotes de créditos e preços.
 * Dados carregados de config/packages.json (edite o JSON e faça redeploy para alterar).
 */
import packagesJson from '@/config/packages.json'

export type Package = {
  credits: number
  price: number
  title: string
  label: string
}

export const PACKAGES: Package[] = packagesJson as Package[]

export function getPackageByCredits(credits: number): Package | undefined {
  return PACKAGES.find((p) => p.credits === credits)
}
