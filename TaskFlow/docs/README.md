# 📱 TaskFlow

> Proyecto de referencia para el desarrollo de aplicaciones móviles multiplataforma utilizando React Native, Expo y TypeScript.

## Descripción

TaskFlow es una aplicación desarrollada con fines educativos y profesionales cuyo objetivo es servir como ejemplo de una arquitectura moderna para el desarrollo de aplicaciones móviles.

El proyecto se construye utilizando tecnologías ampliamente utilizadas en la industria, priorizando la reutilización de código, la separación de responsabilidades y las buenas prácticas de desarrollo.

Además de la aplicación funcional, este repositorio se documenta paso a paso para convertirse en una guía completa sobre el desarrollo de aplicaciones con React Native y Expo.

---

## Objetivos del proyecto

- Aprender React Native desde una perspectiva profesional.
- Implementar una arquitectura escalable.
- Aplicar principios de Clean Code.
- Comprender la organización de proyectos reales.
- Construir componentes reutilizables.
- Implementar navegación mediante Expo Router.
- Persistir información local utilizando AsyncStorage.
- Documentar cada decisión de diseño durante el desarrollo.

---

## Tecnologías utilizadas

| Tecnología | Descripción |
|------------|-------------|
| React Native | Framework para desarrollo móvil multiplataforma |
| Expo | Plataforma para simplificar el desarrollo y despliegue |
| Expo Router | Sistema de navegación basado en archivos |
| TypeScript | Superset de JavaScript con tipado estático |
| AsyncStorage | Persistencia local de datos |

---

# ¿Por qué Expo?

Expo proporciona un entorno de desarrollo que elimina gran parte de la configuración inicial necesaria para desarrollar aplicaciones móviles.

Entre sus principales ventajas se encuentran:

- Configuración mínima.
- Compatibilidad con Android, iOS y Web.
- Actualizaciones OTA.
- Integración con Expo Go.
- Gran ecosistema de librerías oficiales.

Por estas razones, Expo resulta una excelente opción para proyectos educativos y profesionales.

---


# ¿Por qué Expo Router?

En aplicaciones pequeñas es común declarar manualmente todas las rutas. Sin embargo, conforme el proyecto crece, mantener esa configuración se vuelve más complejo.

Expo Router utiliza un sistema de navegación basado en archivos, donde cada pantalla corresponde directamente a un archivo dentro del directorio `app`.

Por ejemplo:

```text
app
├── index.tsx
├── profile.tsx
└── settings.tsx
```

genera automáticamente las rutas:

```text
/
 /profile
 /settings
```

Este enfoque simplifica la organización del proyecto y facilita el mantenimiento de la navegación.

---


# Estructura del proyecto

```text
TaskFlow
│
├── app/
│   ├── (auth)/
│   ├── (tabs)/
│   ├── _layout.tsx
│   └── index.tsx
│
├── assets/
│
├── components/
│
├── hooks/
│
├── services/
│
├── storage/
│
├── styles/
│
├── theme/
│
├── types/
│
└── utils/
```

Cada carpeta tendrá una responsabilidad específica. Esta organización facilita el mantenimiento del proyecto y evita la duplicación de código.

---







# Organización del desarrollo

El proyecto se construirá siguiendo un orden progresivo:

1. Design System.
2. Componentes reutilizables.
3. Navegación.
4. Persistencia.
5. Lógica de negocio.
6. Pantallas.
7. Optimización.
8. Despliegue.

Cada etapa será documentada y explicada en detalle.

---

# Documentación

La documentación técnica se encuentra en el directorio `docs`.

Cada capítulo desarrolla un tema específico del proyecto.

```text
docs/
├── 01-Introduccion.md
├── 02-Arquitectura.md
├── 03-Design-System.md
├── 04-Componentes.md
├── ...
```

---

# Licencia

Este proyecto tiene fines educativos y de aprendizaje y fue desarrollado para la clase de Programación Multiplataforma de la Universidad Cuauhtemoc.