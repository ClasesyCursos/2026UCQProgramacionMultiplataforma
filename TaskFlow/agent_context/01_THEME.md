# Nombre del Módulo

## Metadata

| Campo | Valor |
|--------|-------|
| Módulo | |
| Estado | Estable / En desarrollo / Pendiente |
| Versión | 1.0.0 |
| Última actualización | YYYY-MM-DD |
| Responsable | |
| Capítulo | |
| Dependencias | |
| Utilizado por | |

---

# Objetivo

Describe el propósito general del módulo dentro de la arquitectura del proyecto.

Debe responder la pregunta:

> ¿Para qué existe este módulo?

---

# Responsabilidad

Define claramente qué problemas resuelve este módulo y cuáles son sus límites.

Debe responder:

- ¿Qué hace?
- ¿Qué no hace?

---

# Arquitectura

Describe la organización interna del módulo y cómo interactúan sus elementos.

Puede incluir diagramas, tablas o descripciones de alto nivel.

---

# Organización

Describe la estructura de archivos y carpetas.

Ejemplo:

```text
theme/
├── colors.ts
├── spacing.ts
├── typography.ts
├── radius.ts
├── shadows.ts
├── sizes.ts
├── theme.ts
└── index.ts
```

Además, explica brevemente la responsabilidad de cada archivo.

---

# API Pública

Documenta únicamente aquello que otros módulos pueden utilizar.

No debe documentarse la implementación interna.

Debe responder:

- ¿Qué puede importar otro módulo?
- ¿Qué objetos públicos existen?
- ¿Qué contratos ofrece?

---

# Convenciones

Define las reglas obligatorias para trabajar con este módulo.

Ejemplo:

- Nunca utilizar colores HEX directamente.
- Nunca modificar spacing desde una pantalla.
- Todo componente debe consumir el Theme.

---

# Restricciones

Documenta aquello que está prohibido.

Ejemplo:

- No agregar nuevos colores fuera de colors.ts.
- No crear variantes tipográficas locales.
- No definir sombras manualmente.

---

# Flujo de Dependencias

Explica de dónde obtiene información este módulo y quién depende de él.

Ejemplo:

```text
Screens
        │
        ▼
Components
        │
        ▼
Theme
```

---

# Estado Actual

Resume el estado del módulo.

Ejemplo:

- ✔ Implementado
- ✔ Probado
- ✔ Documentado
- ⏳ Pendiente de refactorización

---

# Notas

Información adicional que pueda ser útil para futuros desarrolladores.

Este apartado es opcional.

---

# Historial de Cambios

## v1.0.0

- Creación del documento.
