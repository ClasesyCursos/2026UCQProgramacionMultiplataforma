import { View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { AppText } from '@/components';

export default function TaskDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AppText variant="h1">
        Tarea {id}
      </AppText>
    </View>
  );
}