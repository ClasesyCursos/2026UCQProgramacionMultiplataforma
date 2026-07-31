export const sizes = {
  icon: {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40,
  },

  avatar: {
    sm: 32,
    md: 48,
    lg: 64,
    xl: 96,
  },

  button: {
    sm: 36,
    md: 44,
    lg: 52,
  },

  input: {
    height: 48,
  },
} as const

export type Sizes = typeof sizes