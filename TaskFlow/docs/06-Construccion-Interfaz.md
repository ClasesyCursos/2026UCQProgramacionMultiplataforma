

### Screen

La mayoría de las pantallas de una aplicación móvil comparten características comunes, como el color de fondo, el espaciado interno, el uso de áreas seguras (*Safe Area*) y, en algunos casos, la capacidad de desplazarse mediante un `ScrollView`. Repetir esta configuración en cada pantalla genera código duplicado y dificulta el mantenimiento del proyecto.

Para evitar este problema, se desarrolló el componente **Screen**, cuya responsabilidad es actuar como contenedor base para todas las vistas de la aplicación.

Este componente proporciona automáticamente un fondo consistente, aplica el espaciado definido en el Design System y permite elegir si la pantalla utilizará un `SafeAreaView` para respetar las zonas ocupadas por la barra de estado y las muescas de los dispositivos. Además, mediante la propiedad `scrollable`, es posible convertir cualquier pantalla en una vista desplazable sin modificar su estructura interna.

#### Propiedades

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `children` | `ReactNode` | Componentes que serán renderizados dentro de la pantalla. |
| `scrollable` | `boolean` | Indica si la pantalla utilizará un `ScrollView`. |
| `safeArea` | `boolean` | Define si debe respetarse la zona segura del dispositivo. |
| `style` | `ViewStyle` | Permite agregar estilos personalizados al contenedor. |

#### Beneficios

- Centraliza la configuración base de todas las pantallas.
- Mantiene una apariencia consistente en toda la aplicación.
- Reduce la duplicación de código.
- Facilita la incorporación de cambios globales en el diseño.
- Permite convertir cualquier pantalla en desplazable mediante una sola propiedad.

#### Ejemplo de uso

```tsx
import { Screen } from '@/components';

export default function HomeScreen() {
  return (
    <Screen>
      {/* Contenido */}
    </Screen>
  );
}
```

Si la pantalla requiere desplazamiento vertical:

```tsx
<Screen scrollable>
  {/* Contenido */}
</Screen>
```

Si no se desea utilizar la zona segura del dispositivo:

```tsx
<Screen safeArea={false}>
  {/* Contenido */}
</Screen>
```

---

El componente **Screen** será utilizado como contenedor principal de prácticamente todas las pantallas de **TaskFlow**, proporcionando una base uniforme para la interfaz y evitando repetir configuraciones comunes en cada vista.

