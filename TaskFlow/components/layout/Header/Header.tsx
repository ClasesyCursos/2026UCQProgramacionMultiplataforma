import { View } from 'react-native';
import { AppText } from '@/components';
import { styles } from './Header.styles';
import { HeaderProps } from './Header.types';

export default function Header({
  title,
  subtitle,
  left,
  right,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      {left}

      <View style={styles.content}>
        <AppText
          variant="h2"
          style={styles.title}
        >
          {title}
        </AppText>

        {subtitle && (
          <AppText
            variant="body"
            color="secondary"
          >
            {subtitle}
          </AppText>
        )}
      </View>

      {right && (
        <View style={styles.actions}>
          {right}
        </View>
      )}
    </View>
  );
}