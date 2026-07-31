export const colors = {
  primary: '#2563EB',
  primaryLight: '#60A5FA',
  primaryDark: '#1D4ED8',

  secondary: '#7C3AED',
  secondaryLight: '#A78BFA',
  secondaryDark: '#5B21B6',

  success: '#16A34A',
  warning: '#F59E0B',
  error: '#DC2626',
  info: '#0284C7',

  background: '#F8FAFC',
  surface: '#FFFFFF',
  surfaceVariant: '#F1F5F9',

  textPrimary: '#0F172A',
  textSecondary: '#475569',
  textDisabled: '#94A3B8',
  textInverse: '#FFFFFF',

  border: '#CBD5E1',
  divider: '#E2E8F0',

  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
} as const

export type Colors = typeof colors