import { TextStyle } from 'react-native'

export type TextVariant =
  | 'displayLarge'
  | 'displayMedium'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'bodyLarge'
  | 'body'
  | 'bodySmall'
  | 'caption'
  | 'button'

export interface AppTextProps {
  children: React.ReactNode
  variant?: TextVariant
  color?: string
  align?: TextStyle['textAlign']
  style?: TextStyle
  numberOfLines?: number
}