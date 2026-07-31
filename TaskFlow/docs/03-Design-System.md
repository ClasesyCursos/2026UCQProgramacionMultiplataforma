# Capítulo 3
# Design System

## Introducción

Uno de los problemas más comunes durante el desarrollo de aplicaciones es la inconsistencia visual. Conforme el proyecto crece, distintos desarrolladores comienzan a utilizar colores ligeramente diferentes, tamaños de texto distintos, espaciados arbitrarios o componentes con estilos particulares. Aunque estos cambios puedan parecer pequeños de manera individual, con el tiempo generan interfaces poco uniformes, difíciles de mantener y costosas de actualizar.

El **Design System** surge como una solución a este problema. Se trata de un conjunto de reglas, componentes y estilos reutilizables que definen la identidad visual de una aplicación y establecen la forma correcta de construir su interfaz.

En TaskFlow, el Design System será la base sobre la cual se desarrollarán todos los componentes de la aplicación. Ningún elemento visual utilizará colores, tamaños, tipografías o espaciados definidos directamente dentro del componente. En su lugar, todos estos valores se centralizarán en un único lugar denominado **Theme**, permitiendo mantener una apariencia consistente en toda la aplicación.

Además de facilitar el desarrollo, este enfoque simplifica el mantenimiento y prepara el proyecto para futuras modificaciones, como la incorporación de nuevos temas visuales o la actualización completa de la identidad gráfica sin necesidad de modificar cientos de archivos.

---

## Objetivos del capítulo

- Comprender qué es un Design System.
- Identificar los beneficios de centralizar los estilos de una aplicación.
- Comprender la organización de la carpeta `theme`.
- Conocer la finalidad de cada archivo que compone el sistema de diseño.
- Utilizar el objeto `theme` para construir componentes reutilizables.

---

## ¿Qué es un Design System?

Un Design System es un conjunto organizado de reglas, recursos y componentes que definen la identidad visual y la experiencia de usuario de una aplicación.

Su propósito consiste en garantizar que todos los elementos visuales mantengan un comportamiento uniforme independientemente del desarrollador que los implemente.

En lugar de permitir que cada pantalla defina sus propios colores, tamaños o tipografías, todas estas decisiones se documentan y centralizan en un único sistema que será reutilizado por toda la aplicación.

Un Design System normalmente está compuesto por elementos como:

- Paleta de colores.
- Tipografías.
- Espaciados.
- Bordes y radios.
- Sombras.
- Iconografía.
- Componentes reutilizables.
- Reglas de diseño.

Aunque muchos proyectos pequeños prescinden de un Design System, su utilización se vuelve prácticamente indispensable en aplicaciones medianas y grandes, donde la consistencia visual representa un aspecto fundamental para la experiencia del usuario.

---

## Beneficios de un Design System

Implementar un Design System proporciona múltiples ventajas tanto para el desarrollo como para el mantenimiento de una aplicación.

### Consistencia visual

Todos los componentes utilizan exactamente la misma paleta de colores, tamaños y tipografías.

Esto evita diferencias visuales entre distintas pantallas.

---

### Reutilización

Los estilos se definen una única vez y pueden utilizarse desde cualquier componente del proyecto.

Esto reduce significativamente la duplicación de código.

---

### Facilidad de mantenimiento

Si en algún momento se desea modificar el color principal de la aplicación, únicamente será necesario cambiar un valor dentro del Theme.

Todos los componentes se actualizarán automáticamente.

---

### Escalabilidad

Cuando el proyecto crece y aparecen nuevos desarrolladores, el Design System proporciona un conjunto claro de reglas que deben seguirse.

Esto permite mantener una arquitectura consistente durante todo el ciclo de vida del proyecto.

---

## Organización de la carpeta Theme

Todo el sistema de diseño se encuentra concentrado dentro del directorio `theme`.

```text
theme/
├── colors.ts
├── typography.ts
├── spacing.ts
├── radius.ts
├── shadows.ts
├── sizes.ts
├── theme.ts
└── index.ts
```

Cada archivo representa un conjunto específico de reglas de diseño.

Esta separación facilita el mantenimiento y evita concentrar toda la configuración en un único archivo de gran tamaño.

---

### colors.ts

Este archivo contiene toda la paleta de colores utilizada por la aplicación.

Aquí se definen los colores principales, secundarios, estados de la interfaz y colores auxiliares.

Entre ellos se encuentran:

- Colores principales.
- Colores secundarios.
- Colores de éxito.
- Colores de advertencia.
- Colores de error.
- Colores informativos.
- Colores para fondos.
- Colores para superficies.
- Colores para texto.
- Colores para bordes.
- Colores auxiliares.

Gracias a esta organización, ningún componente necesita conocer el valor hexadecimal de un color.

Por ejemplo, en lugar de escribir:

```tsx
backgroundColor: "#2563EB"
```

se utilizará:

```tsx
backgroundColor: theme.colors.primary
```

Esto facilita futuras modificaciones de la identidad visual.

---

### typography.ts

Este archivo define el sistema tipográfico de toda la aplicación.

Cada estilo de texto especifica:

- Tamaño de fuente.
- Peso.
- Altura de línea.

Entre los estilos definidos se encuentran:

- Display.
- Encabezados.
- Texto principal.
- Texto secundario.
- Botones.
- Etiquetas.

De esta forma todos los textos mantienen una apariencia uniforme.

---

### spacing.ts

Los espaciados representan las distancias utilizadas entre componentes.

En lugar de escribir valores arbitrarios dentro de cada pantalla, se utiliza una escala previamente definida.

Por ejemplo:

- xs
- sm
- md
- lg
- xl

Gracias a esta estrategia se consigue una distribución visual consistente en toda la aplicación.

---

### radius.ts

Este archivo define los radios de las esquinas utilizados por botones, tarjetas, imágenes y otros componentes.

La utilización de radios predefinidos evita diferencias visuales entre distintos elementos de la interfaz.

---

### shadows.ts

Las sombras representan uno de los aspectos más complejos del desarrollo multiplataforma, ya que Android e iOS utilizan mecanismos diferentes para representarlas.

Este archivo abstrae esas diferencias y proporciona un conjunto uniforme de sombras reutilizables.

Los componentes únicamente seleccionan el nivel de sombra requerido sin preocuparse por la plataforma donde se ejecuta la aplicación.

---

### sizes.ts

Además de colores y tipografías, existen múltiples elementos de la interfaz que requieren tamaños constantes.

Entre ellos se encuentran:

- Iconos.
- Botones.
- Inputs.
- Avatares.

Centralizar estos valores facilita mantener una escala visual coherente.

---

### theme.ts

Este archivo constituye el núcleo del Design System.

Su responsabilidad consiste en reunir todos los elementos del sistema de diseño dentro de un único objeto.

Gracias a ello cualquier componente puede acceder fácilmente a todos los recursos visuales mediante una única referencia.

Por ejemplo:

```tsx
theme.colors.primary

theme.spacing.md

theme.radius.lg

theme.typography.h1
```

Este enfoque simplifica considerablemente el desarrollo de componentes.

---

## index.ts

El archivo `index.ts` centraliza todas las exportaciones del Theme.

Esto permite importar cualquier recurso del sistema de diseño desde un único punto.

En lugar de realizar múltiples importaciones individuales, los componentes únicamente necesitarán importar el Theme principal.

---

## Flujo de utilización

El Design System será utilizado por absolutamente todos los componentes de la aplicación.

El flujo general será el siguiente:

```text
Theme
    │
    ├── Colores
    ├── Tipografías
    ├── Espaciados
    ├── Radios
    ├── Sombras
    └── Tamaños
            │
            ▼
Componentes reutilizables
            │
            ▼
Pantallas
            │
            ▼
Aplicación
```

Esta estructura garantiza que toda la interfaz comparta la misma identidad visual.

---

## Buenas prácticas

Durante el desarrollo de TaskFlow se seguirán las siguientes recomendaciones.

- Utilizar siempre el objeto `theme`.
- Evitar escribir colores hexadecimal directamente.
- No utilizar tamaños arbitrarios.
- Centralizar todos los estilos reutilizables.
- Mantener una nomenclatura consistente.
- Agrupar elementos relacionados en un mismo archivo.
- Evitar duplicar configuraciones existentes.

Estas prácticas permitirán construir una aplicación uniforme y sencilla de mantener.

---

## Errores comunes

### Utilizar colores directamente

Uno de los errores más frecuentes consiste en escribir colores hexadecimal dentro de los componentes.

```tsx
color: "#2563EB"
```

Esta práctica dificulta el mantenimiento de la aplicación.

Siempre debe utilizarse:

```tsx
color: theme.colors.primary
```

---

### Utilizar tamaños arbitrarios

Es frecuente definir márgenes o rellenos utilizando valores diferentes en cada pantalla.

```tsx
margin: 13
```

Esto genera una interfaz inconsistente.

Siempre debe utilizarse el sistema de espaciados definido en el Theme.

---

### Duplicar estilos

Cuando varios componentes comparten exactamente el mismo conjunto de estilos, éstos deben centralizarse dentro del Design System en lugar de repetirse en distintos archivos.

---

### No reutilizar componentes

Un Design System no solamente define colores o tipografías.

También promueve la reutilización de componentes completos.

Si un mismo botón aparece en varias pantallas, debe convertirse en un componente reutilizable.

---

## Resumen del capítulo

En este capítulo se construyó el Design System que servirá como base para toda la interfaz de TaskFlow.

Se centralizaron los colores, tipografías, espaciados, radios, sombras y tamaños dentro del directorio `theme`, permitiendo que todos los componentes compartan una misma identidad visual.

Este enfoque facilitará el mantenimiento del proyecto, reducirá la duplicación de código y permitirá incorporar futuras mejoras visuales sin modificar cada componente individualmente.

En el siguiente capítulo comenzará la construcción de los primeros componentes reutilizables, los cuales utilizarán el Design System desarrollado en este capítulo como única fuente de estilos para toda la aplicación.