import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.xl,
  },
  logo: {
    marginBottom: theme.spacing.lg,
  },
  title: {
    marginBottom: theme.spacing.sm,
    color: theme.colors.surface,
  },
  subtitle: {
    color: theme.colors.surface,
    textAlign: 'center',
    opacity: 0.85,
  },
});