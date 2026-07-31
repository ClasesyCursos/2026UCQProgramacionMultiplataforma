import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';
import { styles } from './Screen.styles';
import { ScreenProps } from './Screen.types';

export default function Screen({
  children,
  scrollable = false,
  safeArea = true,
  style,
}: ScreenProps) {
  const Container = safeArea ? SafeAreaView : View;

  if (scrollable) {
    return (
      <Container style={[styles.container, style]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {children}
        </ScrollView>
      </Container>
    );
  }

  return (
    <Container style={[styles.container, style]}>
      {children}
    </Container>
  );
}