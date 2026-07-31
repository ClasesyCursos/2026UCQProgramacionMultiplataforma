# AI Context

## Objetivo

Este documento tiene como finalidad proporcionar el contexto necesario para continuar el desarrollo de TaskFlow en nuevas conversaciones.

No forma parte de la documentación técnica del proyecto.

Su propósito es resumir las decisiones de diseño, arquitectura y organización que ya fueron tomadas para evitar perder contexto y mantener consistencia durante el desarrollo.

Antes de generar nuevo código deben revisarse los documentos contenidos en esta carpeta.

---

# Estado actual del proyecto

Actualmente el proyecto se encuentra en la fase de construcción de la interfaz de usuario.

Se han completado los siguientes módulos:

- Theme
- Componentes reutilizables
- Navegación
- Pantallas

Los módulos restantes aún no han sido implementados.

---

# Objetivo inmediato

El siguiente código que se genere deberá continuar a partir de la implementación actual de las pantallas.

No deberán proponerse cambios de arquitectura salvo que el usuario lo solicite explícitamente.

---

# Documentos disponibles

## 01_THEME.md

Describe completamente el sistema de diseño.

Contiene información sobre:

- Colores
- Tipografía
- Spacing
- Radius
- Sombras
- Organización del Theme

Todo nuevo componente deberá utilizar exclusivamente este sistema.

---

## 02_COMPONENTS.md

Describe la arquitectura del sistema de componentes reutilizables.

Incluye:

- Organización de carpetas.
- Responsabilidades.
- Convenciones.
- Componentes existentes.
- Componentes de Layout.

Antes de crear un componente nuevo debe verificarse este documento.

---

## 03_SCREENS.md

Describe la arquitectura de las pantallas.

Incluye:

- Organización de Screens.
- Responsabilidades.
- Convenciones.
- Relación con Expo Router.

Las pantallas representan la implementación de la interfaz.

No contienen lógica de negocio.

---

# Decisiones importantes

Durante el desarrollo se acordaron las siguientes decisiones.

## Expo Router

La carpeta `app` únicamente contiene los archivos utilizados por Expo Router.

No contiene implementación de pantallas.

---

## Screens

Toda la implementación vive en `src/screens`.

Los archivos dentro de `app` únicamente importan y exportan dichas pantallas.

---

## Componentes

Antes de crear un componente nuevo debe comprobarse que no exista uno reutilizable.

No deben duplicarse componentes.

---

## Theme

Todo componente consume el Theme.

No deben utilizarse colores ni estilos hardcodeados.

---

## Organización

Cada módulo mantiene una estructura homogénea.

Ejemplo:

Component/
├── Component.tsx
├── Component.styles.ts
├── Component.types.ts
└── index.ts

---

# Convenciones generales

- Functional Components.
- TypeScript.
- Barrel Exports.
- Alias mediante `@/`.
- Un componente por carpeta.
- Estilos separados.
- Tipos separados.
- Reutilización antes que duplicación.

---

# Cómo utilizar este contexto

Cuando se continúe el desarrollo del proyecto:

1. Leer este documento.
2. Revisar los documentos específicos relacionados con el módulo que se modificará.
3. Mantener la arquitectura existente.
4. No proponer cambios estructurales innecesarios.
5. Generar únicamente el código necesario para continuar el desarrollo.

---

# Objetivo de esta carpeta

Esta carpeta representa la memoria técnica del proyecto.

Su finalidad es permitir retomar el desarrollo en cualquier conversación sin perder las decisiones previamente tomadas y manteniendo consistencia en el código generado.

# Qué recordar durante el desarrollo

- No reinventar componentes existentes.
- No cambiar la arquitectura sin autorización.
- No mover archivos de carpeta.
- No proponer librerías alternativas salvo que el usuario lo solicite.
- Continuar exactamente desde el punto donde quedó el proyecto.
- Priorizar reutilización sobre creación de nuevo código.
- Utilizar siempre los documentos de `agent_context` como fuente principal de información.