import type { ECOption } from '@/components/Canvas/type'

export const formatter = (code: string): ECOption => {
  code = code + '; return option;'
  return new Function(code)()
}
