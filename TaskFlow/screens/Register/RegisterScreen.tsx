import { router } from 'expo-router';
import { View } from 'react-native';
import { Button, Header, Input, Screen } from '@/components';
import { styles } from './Register.styles';

export default function RegisterScreen() {
  return (
    <Screen scrollable>
      <Header
        title="Crear cuenta"
        subtitle="Completa la siguiente información"
      />

      <View style={styles.form}>
        <Input
          label="Nombre"
          placeholder="Nombre completo"
        />

        <Input
          label="Correo"
          placeholder="correo@ejemplo.com"
        />

        <Input
          label="Contraseña"
          placeholder="********"
        />

        <Button
          title="Registrarse"
          onPress={() => router.back()}
        />
      </View>
    </Screen>
  );
}