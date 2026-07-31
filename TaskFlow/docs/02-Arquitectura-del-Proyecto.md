# Capítulo 2
# Arquitectura del Proyecto

## Introducción

Una de las principales diferencias entre un proyecto personal y un proyecto profesional no radica en el lenguaje de programación utilizado, sino en la forma en que se organiza el código.

Es común que, al iniciar un proyecto pequeño, todo el desarrollo se concentre en unos cuantos archivos. Sin embargo, conforme la aplicación crece, también aumenta la cantidad de pantallas, componentes, servicios y reglas de negocio. Si no existe una arquitectura definida desde el principio, el código termina siendo difícil de mantener, reutilizar y escalar.

La arquitectura de software proporciona una organización clara del proyecto, definiendo la responsabilidad de cada módulo y la forma en que estos interactúan entre sí.

En este capítulo se presenta la arquitectura que seguirá TaskFlow durante todo su desarrollo. Cada decisión tomada busca favorecer la reutilización del código, facilitar el mantenimiento de la aplicación y permitir que nuevos desarrolladores puedan comprender rápidamente la estructura del proyecto.

---

## Objetivos del capítulo

Al finalizar este capítulo el lector será capaz de:

- Comprender el concepto de arquitectura de software.
- Identificar las responsabilidades de cada capa del proyecto.
- Comprender la organización de carpetas utilizada en TaskFlow.
- Entender el flujo de información dentro de la aplicación.
- Conocer las convenciones que se seguirán durante todo el desarrollo.

---

## ¿Qué es la arquitectura de software?

La arquitectura de software es la forma en que se organiza un sistema antes de comenzar su implementación.

Define cómo se dividirá la aplicación, qué responsabilidad tendrá cada módulo y cómo se comunicarán entre ellos.

Una buena arquitectura no hace que una aplicación sea más rápida, pero sí consigue que sea mucho más sencilla de mantener, ampliar y corregir.

En proyectos pequeños puede parecer innecesario dedicar tiempo a diseñar una arquitectura; sin embargo, conforme aumenta la cantidad de funcionalidades, una mala organización suele convertirse en la principal causa de errores y código duplicado.

Por esta razón, la arquitectura debe considerarse como una inversión que facilitará el desarrollo futuro del proyecto.

---

## Principios de diseño utilizados

La arquitectura de TaskFlow se basa en una serie de principios ampliamente utilizados en el desarrollo profesional de software.

### Separación de responsabilidades

Cada módulo del proyecto tendrá una única responsabilidad.

Por ejemplo:

- Las pantallas mostrarán información.
- Los componentes construirán la interfaz.
- Los servicios accederán a los datos.
- El almacenamiento persistirá la información.

Esto evita que un mismo archivo concentre demasiadas funciones.

---

### Reutilización del código

Siempre que una funcionalidad pueda utilizarse en varios lugares, se implementará una única vez.

Por ejemplo, un botón personalizado no deberá construirse nuevamente en cada pantalla, sino convertirse en un componente reutilizable.

Esto reduce considerablemente la cantidad de código repetido.

---

### Bajo acoplamiento

Los distintos módulos del proyecto deberán depender lo menos posible entre sí.

Por ejemplo, una pantalla no deberá conocer cómo funciona AsyncStorage ni cómo se almacenan físicamente los datos.

Simplemente solicitará la información que necesita.

Si en el futuro se cambia AsyncStorage por una base de datos remota, las pantallas prácticamente no necesitarán modificaciones.

---

### Alta cohesión

Todos los elementos de una carpeta deberán estar relacionados con una misma responsabilidad.

Una carpeta llamada `components` únicamente contendrá componentes.

Una carpeta llamada `services` únicamente contendrá servicios.

Esto facilita localizar rápidamente cualquier archivo dentro del proyecto.

---

## Arquitectura general de TaskFlow

La aplicación se organiza en diferentes capas, donde cada una tiene una responsabilidad específica.

```text
                  Usuario
                     │
                     ▼
              Pantallas (Screens)
                     │
                     ▼
        Componentes reutilizables
                     │
                     ▼
           Hooks personalizados
                     │
                     ▼
                Servicios
                     │
                     ▼
          Persistencia (Storage)
```

Cada capa solamente conoce a la inmediatamente inferior.

De esta forma se evita que una pantalla acceda directamente al almacenamiento o que un componente implemente lógica de negocio.

---

## Flujo de información

Para comprender mejor la arquitectura, imaginemos que el usuario desea guardar una nueva tarea.

El recorrido de la información sería el siguiente:

```text
Usuario
    │
    ▼
CreateTaskScreen
    │
    ▼
useTasks()
    │
    ▼
TaskService
    │
    ▼
AsyncStorage
    │
    ▼
Respuesta
    │
    ▼
Actualización de la interfaz
```

Este flujo permite mantener cada responsabilidad claramente separada.

Las pantallas no conocen cómo se almacenan los datos.

Los servicios no conocen cómo se muestran.

Cada módulo hace únicamente el trabajo para el que fue diseñado.

---

## Organización del proyecto

La estructura general utilizada en TaskFlow es la siguiente.

```text
TaskFlow
│
├── app/
├── assets/
├── components/
├── hooks/
├── services/
├── storage/
├── styles/
├── theme/
├── types/
└── utils/
```

Cada directorio representa una responsabilidad distinta dentro del sistema.

En las siguientes secciones se describe el propósito de cada uno.

---

## Carpeta app

La carpeta `app` constituye el punto de entrada de la aplicación.

Expo Router utiliza este directorio para generar automáticamente todas las rutas de navegación.

Aquí únicamente se colocarán pantallas y archivos relacionados con la navegación.

No deberá implementarse lógica de negocio ni acceso directo al almacenamiento.

Ejemplos:

- Login
- Home
- Perfil
- Configuración

---

## Carpeta components

Esta carpeta contendrá todos los componentes reutilizables de la aplicación.

Un componente representa una pieza de la interfaz gráfica que puede utilizarse en distintas pantallas.

Ejemplos:

- Botones
- Tarjetas
- Inputs
- Modales
- Barras de navegación
- Listas

El objetivo es evitar escribir varias veces el mismo código.

---

## Carpeta hooks

Los Hooks permiten encapsular lógica reutilizable.

En lugar de repetir el mismo código en varias pantallas, esa lógica se implementará una única vez.

Ejemplos:

- useAuth()
- useTasks()
- useTheme()

Los Hooks pueden comunicarse con los servicios y devolver información lista para ser utilizada por la interfaz.

---

## Carpeta services

Los servicios representan la capa encargada de acceder a los datos.

Actualmente utilizarán AsyncStorage, pero en el futuro podrían comunicarse con una API REST o cualquier otra fuente de información.

Las pantallas nunca accederán directamente al almacenamiento.

Siempre deberán hacerlo mediante un servicio.

---

## Carpeta storage

Esta carpeta contendrá toda la lógica relacionada con la persistencia de datos.

Inicialmente se utilizará AsyncStorage.

Si en el futuro se cambia por SQLite o Firebase, únicamente esta carpeta deberá modificarse.

---

## Carpeta theme

El Theme concentrará todos los elementos relacionados con el diseño visual.

Aquí se definirán:

- Colores.
- Tipografías.
- Espaciados.
- Bordes.
- Sombras.

Esto permitirá mantener una apariencia consistente en toda la aplicación.

---

## Carpeta styles

Aunque React Native permite escribir estilos directamente dentro de cada componente, en este proyecto se utilizarán archivos independientes cuando los estilos sean compartidos entre varias vistas.

Esto mejora considerablemente la organización del código.

---

## Carpeta types

Todos los tipos e interfaces de TypeScript se almacenarán en este directorio.

Centralizar los modelos facilita su reutilización y evita inconsistencias entre distintos módulos.

Ejemplos:

- User
- Task
- LoginRequest
- LoginResponse

---

## Carpeta utils

Las utilidades agrupan funciones auxiliares que pueden utilizarse desde cualquier parte del proyecto.

Estas funciones no dependen de la interfaz gráfica.

Ejemplos:

- Formatear fechas.
- Validar correos.
- Generar identificadores.
- Convertir cadenas de texto.

---

## Dependencias entre carpetas

No todas las carpetas pueden comunicarse libremente entre sí.

Para mantener una arquitectura limpia se seguirá la siguiente regla.

| Carpeta | Puede utilizar | No debe utilizar |
|----------|----------------|------------------|
| app | components, hooks | storage |
| components | theme, utils | storage |
| hooks | services | app |
| services | storage | components |
| storage | AsyncStorage | app |
| theme | Ninguna | services |
| types | Ninguna | lógica de negocio |
| utils | Ninguna | componentes |

Esta organización evita dependencias innecesarias y facilita el mantenimiento del proyecto.

---

## Convenciones del proyecto

Durante todo el desarrollo se seguirán las siguientes reglas.

### Componentes

- Un componente por archivo.
- Nombre en PascalCase.
- Exportación por defecto únicamente cuando sea necesario.

---

### Hooks

Todos los Hooks comenzarán con el prefijo `use`.

Ejemplo:

```
useAuth.ts
useTasks.ts
useTheme.ts
```

---

### Tipos

Las interfaces y tipos estarán centralizados en la carpeta `types`.

No deberán declararse repetidamente dentro de distintos componentes.

---

### Servicios

Toda comunicación con el almacenamiento o con servicios externos deberá realizarse mediante la carpeta `services`.

---

### Pantallas

Las pantallas únicamente coordinarán la interacción del usuario.

No deberán implementar reglas de negocio complejas.

---

## Beneficios de esta arquitectura

La arquitectura propuesta ofrece diversas ventajas.

- Facilita la lectura del proyecto.
- Reduce la duplicación de código.
- Simplifica el mantenimiento.
- Favorece el trabajo colaborativo.
- Permite escalar la aplicación sin reorganizar completamente el proyecto.
- Facilita la realización de pruebas unitarias.

En proyectos pequeños estas ventajas pueden parecer poco relevantes; sin embargo, conforme aumenta el tamaño de la aplicación, una buena arquitectura representa un ahorro considerable de tiempo y esfuerzo.

---

## Resumen del capítulo

En este capítulo se definió la arquitectura que servirá como base para todo el desarrollo de TaskFlow.

Se establecieron los principios de diseño, la organización de carpetas, las responsabilidades de cada módulo y las reglas que guiarán el crecimiento del proyecto.

A partir del siguiente capítulo comenzará la construcción del **Design System**, donde se definirá la identidad visual de la aplicación mediante colores, tipografías, espaciados y estilos reutilizables. Esta capa será utilizada por todos los componentes y pantallas desarrollados posteriormente.