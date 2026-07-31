import { View } from 'react-native';
import { AppText } from '@/components';
import { styles } from './EmptyContainer.styles';
import { EmptyContainerProps } from './EmptyContainer.types';

export default function EmptyContainer({
  icon,
  title,
  description,
  action,
}: EmptyContainerProps) {
  return (
    <View style={styles.container}>
      {icon && (
        <View style={styles.icon}>
          {icon}
        </View>
      )}

      <AppText
        variant="h3"
        style={styles.title}
      >
        {title}
      </AppText>

      {description && (
        <AppText
          variant="body"
          color="secondary"
          style={styles.description}
        >
          {description}
        </AppText>
      )}

      {action}
    </View>
  );
}