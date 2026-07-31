import {
  ActivityIndicator,
  Pressable,
} from 'react-native'
import { theme } from '@/theme'
import AppText from '../Text'
import { ButtonProps } from './Button.types'
import { styles } from './Button.styles'

export default function Button({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
}: ButtonProps) {
  const background = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    outline: theme.colors.white,
    text: 'transparent',
  }

  const textColor = {
    primary: theme.colors.white,
    secondary: theme.colors.white,
    outline: theme.colors.primary,
    text: theme.colors.primary,
  }

  return (
    <Pressable
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles.button,

        {
          backgroundColor: background[variant],
          opacity: disabled ? 0.5 : 1,
        },

        variant === 'outline' && styles.outline,
        variant === 'text' && styles.text,

        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={textColor[variant]} />
      ) : (
        <AppText
          variant="button"
          color={textColor[variant]}
        >
          {title}
        </AppText>
      )}
    </Pressable>
  )
}