import { StyleSheet } from 'react-native'
import { theme } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  label: {
    marginBottom: theme.spacing.xs,
  },

  input: {
    height: theme.sizes.input.height,

    borderWidth: 1,
    borderColor: theme.colors.border,

    borderRadius: theme.radius.md,

    paddingHorizontal: theme.spacing.md,

    color: theme.colors.textPrimary,

    backgroundColor: theme.colors.surface,
  },

  error: {
    marginTop: theme.spacing.xs,
  },

})