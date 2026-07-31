import React from 'react';
import { View } from 'react-native';
import {
  AppText,
  Avatar,
  Card,
  Header,
  Screen,
  Section,
} from '@/components';
import styles from './Home.styles';

const summary = {
  pending: 12,
  today: 4,
  completed: 8,
};

const upcomingTasks = [
  {
    id: 1,
    title: 'Diseñar pantalla Home',
    date: 'Hoy · 10:00',
  },
  {
    id: 2,
    title: 'Preparar presentación',
    date: 'Mañana · 09:00',
  },
  {
    id: 3,
    title: 'Revisión del proyecto',
    date: 'Viernes · 16:00',
  },
];

export default function HomeScreen() {
  return (
    <Screen>
      <Header
        title="TaskFlow"
        subtitle="Organiza tu día"
        right={<Avatar name="CM" size={48} />}
      />

      <Section title="Resumen del día">
        <Card>
          <View style={styles.summaryRow}>
            <View style={styles.summaryItem}>
              <AppText variant="h2">{summary.pending}</AppText>
              <AppText variant="caption">Pendientes</AppText>
            </View>

            <View style={styles.summaryItem}>
              <AppText variant="h2">{summary.today}</AppText>
              <AppText variant="caption">Hoy</AppText>
            </View>

            <View style={styles.summaryItem}>
              <AppText variant="h2">{summary.completed}</AppText>
              <AppText variant="caption">Completadas</AppText>
            </View>
          </View>
        </Card>
      </Section>

      <Section title="Próximas tareas">
        {upcomingTasks.map(task => (
          <Card key={task.id}>
            <View style={styles.taskRow}>
              <AppText variant="bodyLarge">
                {task.title}
              </AppText>

              <AppText variant="caption">
                {task.date}
              </AppText>
            </View>
          </Card>
        ))}
      </Section>

      <Section title="Próximos eventos">
        <Card>
          <View style={styles.eventRow}>
            <AppText variant="bodyLarge">
              Reunión semanal
            </AppText>

            <AppText variant="caption">
              Viernes · 09:00
            </AppText>
          </View>
        </Card>
      </Section>
    </Screen>
  );
}