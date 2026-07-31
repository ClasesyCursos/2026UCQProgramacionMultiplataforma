import { View } from 'react-native';
import { AppText } from '@/components';
import { styles } from './Section.styles';
import { SectionProps } from './Section.types';

export default function Section({
  title,
  subtitle,
  action,
  children,
}: SectionProps) {
  return (
    <View style={styles.container}>
      {(title || subtitle || action) && (
        <View style={styles.header}>
          <View style={styles.titles}>
            {title && (
              <AppText
                variant="h3"
                style={styles.title}
              >
                {title}
              </AppText>
            )}

            {subtitle && (
              <AppText
                variant="caption"
                color="secondary"
              >
                {subtitle}
              </AppText>
            )}
          </View>

          {action}
        </View>
      )}

      {children}
    </View>
  );
}