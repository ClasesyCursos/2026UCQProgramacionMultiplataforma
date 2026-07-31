import { GestureResponderEvent, ViewStyle } from 'react-native'
import { IconName } from '../Icon'

export interface IconButtonProps {
  icon: IconName
  onPress: (event: GestureResponderEvent) => void
  size?: number
  color?: string
  style?: ViewStyle
}