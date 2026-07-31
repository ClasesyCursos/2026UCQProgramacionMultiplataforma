import { Text } from 'react-native'
import { theme } from '@/theme'
import { styles } from './Text.styles'
import { AppTextProps } from './Text.types'

export default function AppText({
  children,
  variant = 'body',
  color = theme.colors.textPrimary,
  align = 'left',
  style,
  numberOfLines,
}: AppTextProps) {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles.text,
        theme.typography[variant],
        {
          color,
          textAlign: align,
        },
        style,
      ]}
    >
      {children}
    </Text>
  )
}