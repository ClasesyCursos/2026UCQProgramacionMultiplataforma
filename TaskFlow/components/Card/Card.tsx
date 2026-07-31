import { View } from 'react-native'
import { styles } from './Card.styles'
import { CardProps } from './Card.types'

export default function Card({
  children,
  style,
}: CardProps) {
  return (
    <View
      style={[
        styles.card,
        style,
      ]}
    >
      {children}
    </View>
  )
}