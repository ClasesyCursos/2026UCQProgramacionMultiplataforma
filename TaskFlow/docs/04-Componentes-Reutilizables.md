# Capítulo 4
# Componentes Reutilizables

## Introducción

Una de las principales ventajas de utilizar un framework como React Native es la posibilidad de construir interfaces mediante componentes reutilizables. En lugar de desarrollar cada pantalla desde cero, los elementos comunes de la interfaz se encapsulan dentro de componentes independientes que pueden reutilizarse en cualquier parte de la aplicación.

Esta filosofía constituye uno de los principios fundamentales de React: construir la interfaz como un conjunto de pequeñas piezas que trabajan juntas para formar aplicaciones complejas.

En TaskFlow todos los elementos visuales serán desarrollados bajo este enfoque. Botones, campos de texto, tarjetas, iconos, etiquetas y otros elementos de la interfaz serán implementados como componentes independientes, evitando la duplicación de código y facilitando el mantenimiento del proyecto.

Cada componente utilizará exclusivamente el Design System desarrollado en el capítulo anterior, garantizando una apariencia uniforme en toda la aplicación.

---

## Objetivos del capítulo

- Comprender el concepto de componente reutilizable.
- Identificar la estructura utilizada para desarrollar componentes en React Native.
- Conocer la organización de la carpeta `components`.
- Comprender la responsabilidad de cada componente implementado.
- Utilizar los componentes desarrollados para construir nuevas pantallas.

---

## ¿Qué es un componente reutilizable?

Un componente reutilizable es una unidad independiente de la interfaz de usuario que encapsula su propia estructura, comportamiento y apariencia, permitiendo utilizarla múltiples veces dentro de una aplicación.

En lugar de escribir el mismo código en distintas pantallas, el componente se desarrolla una única vez y posteriormente puede reutilizarse mediante sus propiedades (Props).

Por ejemplo, un botón utilizado para guardar información puede aparecer en múltiples pantallas. En lugar de copiar el mismo código en cada una de ellas, únicamente se crea un componente `Button` y posteriormente se reutiliza donde sea necesario.

Este enfoque reduce la duplicación de código y facilita considerablemente el mantenimiento del proyecto.

---

## Organización de los componentes

Todos los componentes reutilizables se encuentran organizados dentro del directorio `components`.

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
└── index.ts
```

Cada componente posee su propio directorio.

Esta organización facilita la escalabilidad del proyecto y permite que cada componente mantenga separados sus estilos, tipos y lógica de funcionamiento.

---

## Estructura de un componente

Todos los componentes del proyecto siguen la misma estructura.

```text
Button/
│
├── Button.tsx
├── Button.styles.ts
├── Button.types.ts
└── index.ts
```

Cada archivo tiene una responsabilidad específica.

---

### Componente principal

El archivo principal contiene la lógica del componente y define cómo será representado en pantalla.

Aquí se implementa el comportamiento del componente y la forma en que utiliza sus propiedades.

---

### Archivo de estilos

Todos los estilos del componente se almacenan de manera independiente.

Esta separación mejora la organización del código y facilita la lectura del componente principal.

Además, todos los estilos utilizan el objeto `theme`, evitando valores escritos directamente.

---

### Archivo de tipos

Este archivo define las propiedades que recibirá el componente.

La utilización de TypeScript permite detectar errores durante el desarrollo y proporciona autocompletado dentro del editor de código.

---

### Archivo index

El archivo `index.ts` simplifica las importaciones.

Gracias a este archivo únicamente será necesario escribir:

```tsx
import Button from '@/components/Button'
```

en lugar de importar directamente el archivo principal.

---

## Componentes implementados

Durante este capítulo se desarrollaron los componentes base que servirán como fundamento para toda la aplicación.

---

### Text

El componente `Text` encapsula el componente nativo de React Native y lo integra con el Design System.

Entre sus principales responsabilidades se encuentran:

- Aplicar automáticamente la tipografía definida en el Theme.
- Permitir cambiar variantes de texto.
- Cambiar el color del texto.
- Modificar la alineación.
- Limitar el número de líneas visibles.

Todas las etiquetas de texto de la aplicación utilizarán este componente.

---

### Button

El componente `Button` representa el botón principal de la aplicación.

Entre sus características se encuentran:

- Diferentes variantes visuales.
- Estado deshabilitado.
- Estado de carga.
- Integración completa con el Theme.

El componente evita repetir estilos en todas las pantallas donde exista un botón.

---

### Icon

Este componente encapsula la librería de iconos utilizada por la aplicación.

Su función consiste en centralizar el uso de iconos y aplicar automáticamente los tamaños y colores definidos por el Design System.

---

### Divider

El componente `Divider` representa una línea separadora utilizada para dividir visualmente distintas secciones de una pantalla.

Su implementación evita repetir el mismo código en múltiples componentes.

---

### Card

Las tarjetas constituyen uno de los componentes más utilizados en aplicaciones móviles.

El componente `Card` encapsula:

- Fondo.
- Bordes redondeados.
- Espaciado interno.
- Sombras.

Esto permite construir interfaces consistentes reutilizando un único componente.

---

### Input

El componente `Input` representa los campos de captura de información.

Entre sus funcionalidades se encuentran:

- Etiqueta descriptiva.
- Campo de captura.
- Mensaje de error.
- Integración con el Theme.

Todos los formularios de la aplicación utilizarán este componente.

---

### IconButton

Este componente representa un botón cuyo contenido principal es un icono.

Es utilizado frecuentemente para acciones rápidas como:

- Editar.
- Eliminar.
- Buscar.
- Compartir.
- Regresar.

---

### Badge

Los Badges representan pequeñas etiquetas informativas.

Generalmente se utilizan para mostrar:

- Estados.
- Categorías.
- Prioridades.
- Contadores.

Gracias a este componente todas las etiquetas mantienen una apariencia uniforme.

---

### Chip

Los Chips representan pequeñas opciones seleccionables.

Son utilizados principalmente para:

- Filtros.
- Etiquetas.
- Selección de categorías.

Su apariencia cambia automáticamente cuando se encuentran seleccionados.

---

### Avatar

El componente `Avatar` representa al usuario dentro de la aplicación.

Cuando no existe una fotografía disponible, el componente genera automáticamente las iniciales del nombre del usuario.

Este comportamiento evita tener que implementar la misma lógica en distintas pantallas.

---

### Loading

El componente `Loading` centraliza el indicador de carga de toda la aplicación.

Siempre que una operación requiera esperar una respuesta del sistema, este componente podrá reutilizarse.

De esta forma todos los indicadores de carga mantienen la misma apariencia.

---

### EmptyState

En muchas ocasiones una pantalla no contiene información para mostrar.

En lugar de dejar la pantalla vacía, se utiliza un componente denominado **Empty State**, cuya función consiste en informar al usuario que no existen datos disponibles.

Este componente incluye:

- Icono.
- Título.
- Descripción.

Su utilización mejora considerablemente la experiencia del usuario.

---

## Flujo de utilización

Los componentes reutilizables constituyen el segundo nivel dentro de la arquitectura de la aplicación.

```text
Theme
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

Cada componente obtiene sus estilos desde el Theme y posteriormente es utilizado por las distintas pantallas del proyecto.

---

## Beneficios de utilizar componentes reutilizables

El desarrollo basado en componentes proporciona múltiples ventajas.

### Reutilización

Un componente puede utilizarse tantas veces como sea necesario sin volver a escribir el mismo código.

---

### Mantenimiento

Si se requiere modificar la apariencia de un botón, únicamente será necesario actualizar el componente correspondiente.

Todos los botones de la aplicación reflejarán automáticamente dicho cambio.

---

### Consistencia

Todos los elementos mantienen la misma apariencia visual.

Esto mejora la experiencia del usuario y proporciona una identidad uniforme a la aplicación.

---

### Escalabilidad

A medida que el proyecto crece, los nuevos desarrolladores únicamente necesitan reutilizar los componentes existentes.

Esto evita la proliferación de implementaciones diferentes para resolver un mismo problema.

---

## Buenas prácticas

Durante el desarrollo de TaskFlow se seguirán las siguientes recomendaciones.

- Construir componentes pequeños y especializados.
- Asignar una única responsabilidad a cada componente.
- Utilizar siempre el Design System.
- Evitar estilos escritos directamente dentro de las pantallas.
- Definir correctamente las propiedades mediante TypeScript.
- Mantener la misma estructura de carpetas para todos los componentes.
- Reutilizar componentes antes de crear nuevos.

---

## Errores comunes

### Duplicar componentes

Uno de los errores más frecuentes consiste en desarrollar varios componentes que realizan exactamente la misma función.

Siempre debe evaluarse si un componente existente puede reutilizarse.

---

### Escribir estilos dentro de las pantallas

Los estilos deben permanecer encapsulados dentro del componente correspondiente.

Esto facilita el mantenimiento y mejora la organización del código.

---

### No utilizar TypeScript

Omitir la definición de tipos dificulta detectar errores durante el desarrollo y reduce el soporte del editor de código.

---

### Acoplar componentes

Cada componente debe tener una responsabilidad específica.

Si un componente comienza a depender excesivamente de otros, probablemente deba dividirse en componentes más pequeños.

---

## Resumen del capítulo

En este capítulo se desarrolló la biblioteca de componentes reutilizables que servirá como base para construir toda la interfaz de TaskFlow.

Cada componente fue diseñado siguiendo una estructura uniforme compuesta por un archivo principal, un archivo de estilos, un archivo de tipos y un archivo de exportación, facilitando la organización y escalabilidad del proyecto.

Gracias a esta arquitectura, las futuras pantallas podrán construirse reutilizando componentes ya implementados, reduciendo la duplicación de código y garantizando una experiencia visual consistente en toda la aplicación.

En el siguiente capítulo comenzará el desarrollo de la estructura funcional de la aplicación, incorporando la navegación, las pantallas principales y la lógica de negocio que dará vida a TaskFlow.