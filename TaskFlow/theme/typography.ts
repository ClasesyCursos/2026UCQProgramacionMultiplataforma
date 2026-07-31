export const typography = {
  displayLarge: {
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 48,
  },

  displayMedium: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
  },

  h1: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 36,
  },

  h2: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
  },

  h3: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  },

  bodyLarge: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
  },

  body: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },

  bodySmall: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },

  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },

  button: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
} as const

export type Typography = typeof typography