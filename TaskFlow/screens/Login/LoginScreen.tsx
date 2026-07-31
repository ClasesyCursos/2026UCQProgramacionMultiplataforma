import { router } from 'expo-router';
import { View } from 'react-native';
import { AppText, Button, Icon, Input, Screen } from '@/components';
import { styles } from './Login.styles';

export default function LoginScreen() {
  return (
    <Screen scrollable>
      <View style={styles.logo}>
        <Icon
          name="check-circle"
          size={80}
        />

        <AppText variant="h2">
          Bienvenido
        </AppText>

        <AppText color="secondary">
          Inicia sesión para continuar
        </AppText>
      </View>

      <View style={styles.form}>
        <Input
          label="Correo electrónico"
          placeholder="correo@ejemplo.com"
        />

        <Input
          label="Contraseña"
          placeholder="********"
        />

        <Button
          title="Iniciar sesión"
          onPress={() => router.replace('/(tabs)/home')}
        />
      </View>

      <View style={styles.footer}>
        <Button
          variant="text"
          title="Crear una cuenta"
          onPress={() => router.push('/(auth)/register')}
        />
      </View>
    </Screen>
  );
}