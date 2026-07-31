import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export type ScreenProps = {
  children: ReactNode;
  scrollable?: boolean;
  safeArea?: boolean;
  style?: ViewStyle;
};