type NestedRecord = Record<string, unknown>

export function getTranslation(
  obj: NestedRecord,
  path: string
): string | undefined {
  const keys = path.split('.')
  let current: unknown = obj
  for (const key of keys) {
    if (current === null || current === undefined) return undefined
    current = (current as NestedRecord)[key]
  }
  return typeof current === 'string' ? current : undefined
}
