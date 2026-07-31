# Pantallas

## Metadata

| Campo | Valor |
|--------|-------|
| Módulo | Aplicación |
| Estado | En desarrollo |
| Versión | 1.0.0 |
| Última actualización | 2026-07-29 |
| Responsable | TaskFlow Team |
| Capítulo | Capítulo 6 - Construcción de la Interfaz |
| Dependencias | Components, Theme |
| Utilizado por | Expo Router |

---

# Objetivo

El módulo **Screens** contiene la implementación visual de todas las pantallas de la aplicación.

Cada pantalla representa una vista completa de la interfaz de usuario y constituye el punto donde se integran los componentes reutilizables para construir la experiencia del usuario.

Las pantallas son independientes del sistema de navegación y son consumidas por Expo Router mediante archivos adaptadores ubicados en la carpeta `app/`.

---

# Responsabilidad

Este módulo es responsable de:

- Construir la interfaz de usuario.
- Organizar los componentes reutilizables.
- Gestionar el estado local de la pantalla cuando sea necesario.
- Coordinar la interacción entre los componentes de la interfaz.

No es responsabilidad de este módulo:

- Implementar lógica de negocio.
- Consumir APIs.
- Acceder directamente al almacenamiento.
- Definir la navegación de la aplicación.
- Implementar reglas de dominio.

---

# Arquitectura

Las pantallas representan el nivel superior de la interfaz de usuario.

Cada pantalla consume componentes reutilizables y el sistema de diseño para construir una vista completa.

Durante el **Capítulo 6**, las pantallas contienen únicamente la implementación visual.

La lógica de negocio será incorporada posteriormente en el **Capítulo 7** mediante servicios, hooks y almacenamiento local.

---

# Organización

```text
screens/
│
├── Splash/
│   ├── SplashScreen.tsx
│   ├── Splash.styles.ts
│   └── index.ts
│
├── Login/
│   ├── LoginScreen.tsx
│   ├── Login.styles.ts
│   └── index.ts
│
├── Register/
│   ├── RegisterScreen.tsx
│   ├── Register.styles.ts
│   └── index.ts
│
├── Home/
│   ├── HomeScreen.tsx
│   ├── Home.styles.ts
│   └── index.ts
│
├── Tasks/
├── Calendar/
├── Profile/
├── Settings/
└── ...
```

Cada pantalla mantiene la misma estructura para facilitar el mantenimiento y la escalabilidad.

---

# Organización Interna

Cada pantalla sigue la siguiente estructura:

## Screen.tsx

Contiene la implementación de la interfaz de usuario.

Es el único archivo que construye la vista.

---

## Screen.styles.ts

Contiene exclusivamente los estilos de la pantalla.

No debe incluir lógica de negocio.

---

## index.ts

Expone la pantalla mediante un Barrel Export.

Ejemplo:

```ts
export { default } from './HomeScreen';
```

---

# API Pública

Cada pantalla exporta un único componente por defecto.

Ejemplo:

```ts
import HomeScreen from '@/screens/Home';
```

Los archivos dentro de `app/` importan estas pantallas y las exponen como rutas de Expo Router.

---

# Convenciones

Todas las pantallas deben:

- Ser Functional Components.
- Utilizar exclusivamente componentes reutilizables cuando existan.
- Consumir el Theme.
- Mantener los estilos separados.
- Exportarse mediante `index.ts`.
- Tener nombres descriptivos.

Las pantallas pequeñas (por ejemplo Splash, Login o Register) pueden permanecer en un único componente.

Las pantallas complejas podrán dividirse en componentes internos únicamente cuando el tamaño o la responsabilidad lo justifiquen.

---

# Restricciones

No está permitido:

- Duplicar componentes reutilizables dentro de una pantalla.
- Implementar acceso directo a APIs.
- Acceder directamente a AsyncStorage.
- Contener lógica de autenticación.
- Definir estilos hardcodeados que ya existan en el Theme.
- Implementar navegación mediante React Navigation.

Durante el Capítulo 6 las pantallas deben contener únicamente la implementación visual.

---

# Flujo de Dependencias

```text
Expo Router

        │

        ▼

Screens

        │

        ▼

Components

        │

        ▼

Theme
```

Las pantallas no deben depender directamente de servicios, almacenamiento o lógica de negocio durante esta etapa del proyecto.

---

# Estado Actual

## Implementadas

- ✔ Splash
- ✔ Login
- ✔ Register
- ✔ Home (en desarrollo)

## Pendientes

- Tasks
- New Task
- Task Detail
- Calendar
- Profile
- Settings

---

# Notas

Las pantallas representan la capa de presentación de la aplicación.

No deben contener decisiones de infraestructura ni reglas de negocio.

Toda funcionalidad relacionada con autenticación, persistencia, servicios o sincronización será incorporada en capítulos posteriores para mantener una separación clara entre interfaz y lógica de aplicación.

---

# Historial de Cambios

## v1.0.0

- Creación del documento.
- Definición de la arquitectura de pantallas.
- Documentación de la organización del módulo.