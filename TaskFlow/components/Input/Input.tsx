import { TextInput, View } from 'react-native'
import AppText from '../Text'
import { theme } from '@/theme'
import { styles } from './Input.styles'
import { InputProps } from './Input.types'

export default function Input({
  label,
  error,
  ...props
}: InputProps) {
  return (
    <View style={styles.container}>

      {label && (
        <AppText
          variant="bodySmall"
          style={styles.label}
        >
          {label}
        </AppText>
      )}

      <TextInput
        {...props}
        placeholderTextColor={theme.colors.textDisabled}
        style={styles.input}
      />

      {error && (
        <AppText
          variant="caption"
          color={theme.colors.error}
          style={styles.error}
        >
          {error}
        </AppText>
      )}

    </View>
  )
}