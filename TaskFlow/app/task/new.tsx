import { View } from 'react-native';
import { AppText } from '@/components';

export default function NewTaskScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AppText variant="h1">
        Nueva tarea
      </AppText>
    </View>
  );
}