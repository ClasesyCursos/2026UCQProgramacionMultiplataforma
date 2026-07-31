import { colors } from './colors'
import { spacing } from './spacing'
import { radius } from './radius'
import { typography } from './typography'
import { shadows } from './shadows'
import { sizes } from './sizes'

export const theme = {
  colors,
  spacing,
  radius,
  typography,
  shadows,
  sizes,
} as const

export type Theme = typeof theme