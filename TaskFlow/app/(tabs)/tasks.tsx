import { View } from 'react-native';
import { AppText } from '@/components';

export default function TasksScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AppText variant="h1">
        Tareas
      </AppText>
    </View>
  );
}