import { StyleSheet } from 'react-native';

import { theme } from '@/theme';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerInfo: {
    flex: 1,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  summaryItem: {
    flex: 1,
    alignItems: 'center',
    gap: theme.spacing.xs,
  },

  taskRow: {
    gap: theme.spacing.xs,
  },

  eventRow: {
    gap: theme.spacing.xs,
  },
});