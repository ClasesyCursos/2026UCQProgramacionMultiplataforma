# Capítulo 5
# Navegación con Expo Router

## Introducción

Toda aplicación móvil requiere un mecanismo que permita al usuario desplazarse entre sus diferentes pantallas de manera organizada y eficiente. Este mecanismo recibe el nombre de **navegación**.

En React Native existen diversas alternativas para implementar la navegación entre pantallas; sin embargo, Expo incorpora una solución moderna denominada **Expo Router**, la cual simplifica considerablemente el desarrollo mediante un sistema de enrutamiento basado en archivos (*File Based Routing*).

En este capítulo se implementará la estructura de navegación de TaskFlow utilizando Expo Router. Se desarrollará una arquitectura preparada para crecer conforme aumente la complejidad del proyecto, separando claramente los distintos flujos de navegación de la aplicación.

---

# Objetivos del capítulo

Al finalizar este capítulo el lector será capaz de:

- Comprender el funcionamiento de Expo Router.
- Entender el concepto de File Based Routing.
- Organizar correctamente la carpeta `app`.
- Implementar navegación mediante Stack y Tabs.
- Crear grupos de rutas.
- Implementar rutas dinámicas.
- Realizar redirecciones entre pantallas.
- Obtener parámetros enviados mediante la URL.

---

# ¿Qué es Expo Router?

Expo Router es la solución oficial de navegación para proyectos desarrollados con Expo.

A diferencia de React Navigation tradicional, Expo Router elimina gran parte de la configuración manual y genera automáticamente las rutas utilizando la estructura de carpetas del proyecto.

Esto significa que cada archivo dentro de la carpeta `app` representa automáticamente una pantalla de la aplicación.

Por ejemplo:

```text
app/
│
├── index.tsx
├── login.tsx
└── profile.tsx
```

genera automáticamente las siguientes rutas:

```text
/
├── /
├── /login
└── /profile
```

Este enfoque reduce la cantidad de código de configuración y facilita considerablemente el mantenimiento del proyecto.

---

# ¿Por qué utilizar File Based Routing?

El File Based Routing consiste en generar las rutas de la aplicación directamente a partir de la estructura de carpetas.

En lugar de registrar manualmente cada pantalla, basta con crear un archivo dentro de la carpeta `app`.

Por ejemplo:

```text
app/
│
├── home.tsx
├── settings.tsx
└── profile.tsx
```

Cada archivo representa automáticamente una pantalla.

Esta filosofía ya es utilizada por frameworks modernos como:

- Next.js
- Nuxt
- Remix
- SvelteKit

Expo Router adopta este mismo enfoque para React Native.

---

# Organización de la carpeta app

La aplicación TaskFlow utiliza la siguiente estructura.

```text
app/
│
├── _layout.tsx
├── index.tsx
│
├── (auth)/
│   ├── _layout.tsx
│   ├── login.tsx
│   └── register.tsx
│
├── (tabs)/
│   ├── _layout.tsx
│   ├── home.tsx
│   ├── tasks.tsx
│   ├── calendar.tsx
│   └── profile.tsx
│
└── task/
    ├── new.tsx
    └── [id].tsx
```

Cada carpeta representa una sección lógica de la aplicación.

---

# El archivo _layout.tsx

El archivo `_layout.tsx` constituye el elemento más importante dentro de Expo Router.

Su función consiste en definir el tipo de navegación que utilizarán las pantallas contenidas dentro de un directorio.

Puede contener:

- Stack Navigation
- Tabs Navigation
- Drawer Navigation
- Providers globales
- Temas de la aplicación

Cada carpeta puede poseer su propio `_layout.tsx`, permitiendo combinar distintos tipos de navegación.

---

# Root Layout

El archivo ubicado en:

```text
app/_layout.tsx
```

representa la raíz de toda la aplicación.

Desde este punto se inicializan todos los navegadores y configuraciones globales.

En TaskFlow este archivo crea un **Stack Navigation**, el cual actuará como contenedor principal.

---

# Stack Navigation

El Stack Navigation funciona de manera similar a una pila.

Cada nueva pantalla se coloca sobre la anterior.

```text
Pantalla A

↓

Pantalla B

↓

Pantalla C
```

Cuando el usuario presiona el botón "Regresar", la pantalla superior se elimina de la pila.

```text
Pantalla A

↓

Pantalla B
```

Este comportamiento resulta ideal para:

- Login
- Registro
- Detalles
- Formularios
- Configuración

---

# Tabs Navigation

Las pestañas permiten cambiar rápidamente entre las principales secciones de la aplicación.

En TaskFlow se implementaron cuatro pestañas principales.

```text
Inicio

Tareas

Calendario

Perfil
```

Cada pestaña mantiene su propio historial de navegación, mejorando considerablemente la experiencia del usuario.

---

# Grupos de rutas

Expo Router permite agrupar pantallas mediante directorios entre paréntesis.

Por ejemplo:

```text
(auth)
```

o

```text
(tabs)
```

Estos grupos no forman parte de la URL.

Su única finalidad consiste en organizar el proyecto.

Esto permite separar claramente diferentes flujos de navegación.

---

# Grupo Auth

El grupo:

```text
(auth)
```

contiene todas las pantallas relacionadas con la autenticación.

En TaskFlow incluye:

- Login
- Registro

En el futuro podrán agregarse:

- Recuperar contraseña
- Verificación por correo
- Cambio de contraseña

---

# Grupo Tabs

El grupo:

```text
(tabs)
```

representa la navegación principal de la aplicación.

Todas las pantallas disponibles después del inicio de sesión se encuentran dentro de este grupo.

Esto facilita mantener separada la navegación pública de la navegación privada.

---

# Rutas dinámicas

Expo Router permite recibir parámetros mediante archivos entre corchetes.

Por ejemplo:

```text
[id].tsx
```

representa cualquier identificador.

Ejemplos:

```text
/task/15

/task/34

/task/128
```

Todos utilizan la misma pantalla.

---

# useLocalSearchParams

Para obtener los parámetros enviados por la URL se utiliza el Hook:

```tsx
useLocalSearchParams()
```

Este Hook devuelve un objeto con todos los parámetros disponibles.

Por ejemplo:

```text
/task/28
```

produce:

```ts
id = 28
```

Gracias a este mecanismo una sola pantalla puede mostrar la información de cualquier tarea.

---

# Redirecciones

Expo Router incorpora el componente:

```tsx
<Redirect />
```

Su función consiste en enviar automáticamente al usuario hacia otra pantalla.

En TaskFlow la pantalla inicial redirige al Login.

Posteriormente esta lógica podrá modificarse para validar si el usuario ya inició sesión.

---

# Navegación entre pantallas

Expo Router proporciona distintos mecanismos para navegar.

Entre los más utilizados se encuentran:

- push()
- replace()
- back()

Cada uno responde a necesidades diferentes.

Por ejemplo:

**push()**

Agrega una nueva pantalla encima de la pila.

---

**replace()**

Reemplaza la pantalla actual.

Generalmente se utiliza después del Login para impedir regresar mediante el botón "Atrás".

---

**back()**

Regresa a la pantalla anterior.

---

# Flujo de navegación de TaskFlow

La navegación implementada sigue la siguiente estructura.

```text
Inicio

↓

Login

↓

Tabs

├── Inicio

├── Tareas

├── Calendario

└── Perfil

↓

Detalle de tarea

↓

Nueva tarea
```

Esta arquitectura permite incorporar nuevas funcionalidades sin modificar la estructura principal.

---

# Beneficios de Expo Router

La utilización de Expo Router proporciona numerosas ventajas.

## Menor configuración

No es necesario registrar manualmente cada pantalla.

---

## Organización

La estructura de carpetas refleja directamente la navegación de la aplicación.

---

## Escalabilidad

Agregar nuevas pantallas consiste únicamente en crear nuevos archivos.

---

## Integración con Expo

Expo Router funciona de manera nativa con Expo SDK.

No requiere configuraciones adicionales.

---

# Buenas prácticas

Durante el desarrollo de TaskFlow se seguirán las siguientes recomendaciones.

- Organizar las pantallas mediante grupos.
- Mantener un único propósito por pantalla.
- Utilizar nombres descriptivos para los archivos.
- Evitar rutas demasiado profundas.
- Aprovechar los Layouts para compartir configuración.
- Utilizar rutas dinámicas cuando sea necesario.
- Mantener separada la navegación pública y privada.

---

# Errores comunes

## Registrar pantallas manualmente

Expo Router genera las rutas automáticamente.

No es necesario crear listas manuales de pantallas.

---

## Colocar demasiada lógica dentro del Layout

Los archivos `_layout.tsx` únicamente deben encargarse de la navegación.

La lógica de negocio debe permanecer dentro de las pantallas.

---

## Duplicar pantallas

Si una pantalla puede reutilizarse mediante parámetros dinámicos, no es necesario crear múltiples archivos.

---

## No separar los flujos

Las pantallas públicas y privadas deben mantenerse organizadas en grupos independientes.

Esto facilita el crecimiento del proyecto.

---

# Resumen del capítulo

En este capítulo se implementó la arquitectura de navegación de TaskFlow utilizando Expo Router. Se organizó la aplicación mediante una estructura basada en archivos, incorporando un Stack principal, un conjunto de pestañas para la navegación interna y grupos de rutas para separar el proceso de autenticación del resto de la aplicación.

Además, se introdujeron conceptos fundamentales como los archivos `_layout.tsx`, las rutas dinámicas, las redirecciones automáticas y el uso del Hook `useLocalSearchParams`, estableciendo una base sólida y escalable para el desarrollo del resto del proyecto.

En el siguiente capítulo comenzará la construcción de las primeras pantallas funcionales de TaskFlow, incorporando formularios, autenticación y navegación entre vistas utilizando los componentes reutilizables desarrollados previamente.