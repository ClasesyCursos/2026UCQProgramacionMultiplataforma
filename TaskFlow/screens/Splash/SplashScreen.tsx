import { View } from 'react-native';

import { AppText, Icon, Screen } from '@/components';

import { styles } from './Splash.styles';

export default function SplashScreen() {
  return (
    <Screen
      safeArea={false}
      style={styles.container}
    >
      <View style={styles.logo}>
        <Icon
          name="check-circle"
          size={90}
          color="white"
        />
      </View>

      <AppText
        variant="h1"
        style={styles.title}
      >
        TaskFlow
      </AppText>

      <AppText
        variant="body"
        style={styles.subtitle}
      >
        Organiza tus tareas de forma inteligente
      </AppText>
    </Screen>
  );
}