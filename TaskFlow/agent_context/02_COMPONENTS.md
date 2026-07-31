# Componentes Reutilizables

## Metadata

| Campo | Valor |
|--------|-------|
| Módulo | Design System |
| Estado | Estable |
| Versión | 1.0.0 |
| Última actualización | 2026-07-29 |
| Responsable | TaskFlow Team |
| Capítulo | Capítulo 5 - Sistema de Componentes |
| Dependencias | Theme |
| Utilizado por | Screens |

---

# Objetivo

El módulo **Components** concentra todos los componentes reutilizables de la aplicación.

Su propósito es evitar la duplicación de código, mantener una experiencia visual consistente y desacoplar las pantallas del sistema de diseño.

Los componentes representan la única forma recomendada de construir la interfaz de usuario.

---

# Responsabilidad

Este módulo es responsable de:

- Encapsular componentes reutilizables.
- Consumir el Theme.
- Mantener consistencia visual.
- Exponer una API estable para el resto de la aplicación.

No es responsabilidad de este módulo:

- Contener lógica de negocio.
- Consumir servicios.
- Acceder a almacenamiento.
- Realizar navegación.
- Administrar estado global.

---

# Arquitectura

Los componentes se organizan en dos grandes grupos:

## Componentes de UI

Son componentes reutilizables que representan controles visuales.

Ejemplos:

- Button
- Card
- Input
- Badge
- Chip
- Divider
- Avatar
- Icon
- IconButton
- Loading
- Text
- EmptyState

---

## Componentes de Layout

Representan estructuras reutilizables para organizar pantallas.

Ejemplos:

- Screen
- Header
- Section
- EmptyContainer

Estos componentes no representan controles visuales, sino composición de la interfaz.

---

# Organización

```text
components/
│
├── Avatar/
├── Badge/
├── Button/
├── Card/
├── Chip/
├── Divider/
├── EmptyState/
├── Icon/
├── IconButton/
├── Input/
├── Loading/
├── Text/
│
├── layout/
│   ├── EmptyContainer/
│   ├── Header/
│   ├── Screen/
│   └── Section/
│
└── index.ts
```

Cada componente mantiene una estructura homogénea.

Ejemplo:

```text
Button/
│
├── Button.tsx
├── Button.styles.ts
├── Button.types.ts
└── index.ts
```

---

# Organización Interna

Cada componente sigue la siguiente separación de responsabilidades.

## Component.tsx

Implementación del componente.

---

## Component.styles.ts

Define exclusivamente los estilos.

No contiene lógica.

---

## Component.types.ts

Define las interfaces y tipos públicos.

Representa el contrato del componente.

---

## index.ts

Expone el componente mediante Barrel Export.

Permite importar utilizando:

```ts
import { Button } from '@/components'
```

---

# API Pública

El módulo expone los siguientes componentes.

## UI

- AppText
- Button
- Card
- Divider
- Icon
- IconButton
- Input
- Badge
- Chip
- Avatar
- Loading

## Layout

- Screen
- Header
- Section
- EmptyContainer

Todos los componentes públicos deben exportarse desde:

```text
components/index.ts
```

o desde el Barrel correspondiente.

---
# API de los Componentes

La siguiente sección documenta el contrato público de cada componente reutilizable.

Las pantallas (`Screens`) únicamente deberán consumir esta API y nunca depender de la implementación interna.

---

## AppText

Representa el componente base para mostrar texto dentro de la aplicación.

### Props

| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| children | ReactNode | ✔ | Contenido del texto. |
| variant | TextVariant | | Variante tipográfica definida en el Theme. |
| color | string | | Color del texto. |
| align | TextStyle['textAlign'] | | Alineación del texto. |
| style | TextStyle | | Estilos adicionales. |
| numberOfLines | number | | Limita la cantidad de líneas visibles. |

### Variantes disponibles

- displayLarge
- displayMedium
- h1
- h2
- h3
- bodyLarge
- body
- bodySmall
- caption
- button

---

## Button

Botón reutilizable para ejecutar acciones.

### Props

| Prop | Tipo | Requerido |
|------|------|-----------|
| title | string | ✔ |
| onPress | GestureResponderEvent | ✔ |
| variant | primary \| secondary \| outline \| text | |
| disabled | boolean | |
| loading | boolean | |
| style | ViewStyle | |

---

## Card

Contenedor reutilizable para agrupar contenido.

### Props

| Prop | Tipo | Requerido |
|------|------|-----------|
| children | ReactNode | ✔ |
| style | ViewStyle | |

---

## Avatar

Representación gráfica de un usuario.

### Props

| Prop | Tipo | Requerido |
|------|------|-----------|
| name | string | ✔ |
| size | number | |

---

## Badge

Indicador visual compacto.

### Props

| Prop | Tipo | Requerido |
|------|------|-----------|
| label | string | ✔ |

---

## Chip

Elemento seleccionable.

### Props

| Prop | Tipo | Requerido |
|------|------|-----------|
| label | string | ✔ |
| selected | boolean | |

---

## Divider

Separador visual.

No expone propiedades públicas.

---

## Icon

Renderiza un ícono de Material Icons.

### Props

| Prop | Tipo | Requerido |
|------|------|-----------|
| name | IconName | ✔ |
| size | number | |
| color | string | |

---

## IconButton

Botón basado en un ícono.

### Props

| Prop | Tipo | Requerido |
|------|------|-----------|
| icon | IconName | ✔ |
| onPress | GestureResponderEvent | ✔ |
| size | number | |
| color | string | |
| style | ViewStyle | |

---

## Input

Campo reutilizable de captura.

### Props

Hereda todas las propiedades de `TextInputProps`.

Además agrega:

| Prop | Tipo | Requerido |
|------|------|-----------|
| label | string | |
| error | string | |

---

## Loading

Indicador de carga reutilizable.

Actualmente no expone propiedades públicas.

---

## EmptyState

Representación visual para estados sin información.

### Props

| Prop | Tipo | Requerido |
|------|------|-----------|
| icon | IconName | ✔ |
| title | string | ✔ |
| description | string | ✔ |

---

# Componentes de Layout

---

## Screen

Contenedor principal de una pantalla.

### Props

| Prop | Tipo | Requerido |
|------|------|-----------|
| children | ReactNode | ✔ |
| scrollable | boolean | |
| safeArea | boolean | |
| style | ViewStyle | |

---

## Header

Encabezado reutilizable de una pantalla.

### Props

| Prop | Tipo | Requerido |
|------|------|-----------|
| title | string | ✔ |
| subtitle | string | |
| left | ReactNode | |
| right | ReactNode | |

---

## Section

Agrupa contenido relacionado dentro de una pantalla.

### Props

| Prop | Tipo | Requerido |
|------|------|-----------|
| title | string | |
| subtitle | string | |
| action | ReactNode | |
| children | ReactNode | ✔ |

---

## EmptyContainer

Contenedor utilizado para mostrar estados vacíos.

### Props

| Prop | Tipo | Requerido |
|------|------|-----------|
| icon | ReactNode | |
| title | string | ✔ |
| description | string | |
| action | ReactNode | |

# Convenciones

Todos los componentes deben:

- Ser reutilizables.
- Ser independientes de la lógica de negocio.
- Utilizar el Theme.
- Definir sus Props en *.types.ts.
- Mantener sus estilos en *.styles.ts.
- Exportarse mediante index.ts.
- Ser funcionales (Functional Components).

---

# Restricciones

No está permitido:

- Acceder directamente a AsyncStorage.
- Consumir APIs.
- Contener lógica de autenticación.
- Modificar navegación.
- Crear dependencias entre componentes que generen acoplamiento innecesario.
- Duplicar componentes existentes.

---

# Flujo de Dependencias

```text
Screens
        │
        ▼
Components
        │
        ▼
Theme
```

Los componentes dependen exclusivamente del sistema de diseño.

Las pantallas dependen de los componentes.

Nunca ocurre en sentido contrario.

---

# Catálogo de Componentes

| Componente | Categoría | Estado |
|------------|-----------|--------|
| AppText | UI | ✔ |
| Button | UI | ✔ |
| Card | UI | ✔ |
| Divider | UI | ✔ |
| Icon | UI | ✔ |
| IconButton | UI | ✔ |
| Input | UI | ✔ |
| Badge | UI | ✔ |
| Chip | UI | ✔ |
| Avatar | UI | ✔ |
| Loading | UI | ✔ |
| EmptyState | UI | ✔ |
| Screen | Layout | ✔ |
| Header | Layout | ✔ |
| Section | Layout | ✔ |
| EmptyContainer | Layout | ✔ |

---

# Estado Actual

- ✔ Arquitectura definida.
- ✔ Barrel Exports implementados.
- ✔ Separación entre UI y Layout.
- ✔ Componentes desacoplados del Theme.
- ✔ Organización homogénea.
- ✔ Preparado para crecimiento.

---

# Notas

Todo nuevo componente deberá mantener la estructura establecida por este documento.

Antes de crear un componente nuevo deberá verificarse que no exista uno con la misma responsabilidad.

Los componentes de Layout únicamente organizan la interfaz; no deben contener reglas de negocio.

---

# Historial de Cambios

## v1.0.0

- Creación del documento.
- Definición de la arquitectura del módulo Components.
- Clasificación entre componentes de UI y Layout.