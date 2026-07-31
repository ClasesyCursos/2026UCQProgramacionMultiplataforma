import { GestureResponderEvent, ViewStyle } from 'react-native'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'text'

export interface ButtonProps {
  title: string
  onPress: (event: GestureResponderEvent) => void
  variant?: ButtonVariant
  disabled?: boolean
  loading?: boolean
  style?: ViewStyle
}