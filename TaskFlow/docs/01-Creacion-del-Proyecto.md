# Capítulo 1
# Creación del Proyecto

## Introducción

Todo proyecto de software comienza mucho antes de escribir la primera línea de código. La elección de las herramientas, la estructura inicial del proyecto y las decisiones de arquitectura determinan en gran medida la facilidad con la que el sistema podrá mantenerse y evolucionar en el futuro.

En este capítulo se construirá la base del proyecto **TaskFlow**, una aplicación desarrollada con React Native y Expo cuyo objetivo es servir como ejemplo de una arquitectura moderna para el desarrollo de aplicaciones móviles multiplataforma.

Más allá de crear una aplicación funcional, este proyecto busca documentar cada una de las decisiones tomadas durante su construcción, explicando no solamente *qué* se hizo, sino también *por qué* se realizó de esa manera.

---

## Objetivos del capítulo

- Comprender qué es React Native.
- Comprender qué es Expo.
- Comprender las ventajas de utilizar TypeScript.
- Crear un proyecto utilizando Expo.
- Configurar Expo Router.
- Ejecutar la aplicación en Android, iOS y Web.
- Comprender la estructura inicial del proyecto.
- Resolver los primeros errores comunes de configuración.

---

## ¿Qué es React Native?

React Native es un framework desarrollado por Meta que permite construir aplicaciones móviles utilizando JavaScript o TypeScript y la biblioteca React.

A diferencia del desarrollo web tradicional, React Native no genera código HTML ni utiliza un navegador para representar la interfaz gráfica. En su lugar, cada componente declarado por el desarrollador se transforma en componentes nativos propios del sistema operativo.

Esto significa que un componente como:

```tsx
<View>
    <Text>Hola Mundo</Text>
</View>
```

se convierte internamente en un componente nativo de Android o iOS, dependiendo del dispositivo donde se esté ejecutando la aplicación.

Gracias a este enfoque es posible desarrollar aplicaciones con apariencia y comportamiento nativo utilizando una única base de código.

Entre sus principales ventajas destacan:

- Desarrollo para Android e iOS desde un único proyecto.
- Gran comunidad de desarrolladores.
- Amplio ecosistema de bibliotecas.
- Integración con React.
- Excelente rendimiento para la mayoría de aplicaciones empresariales.

---

## ¿Por qué utilizar Expo?

Aunque React Native puede utilizarse directamente mediante la React Native CLI, hacerlo requiere configurar manualmente una gran cantidad de herramientas relacionadas con Android, iOS, Metro Bundler, Gradle, CocoaPods y otros componentes del ecosistema.

Expo surge como una plataforma que simplifica todo este proceso.

Su objetivo principal consiste en permitir que el desarrollador pueda concentrarse en construir la aplicación sin preocuparse inicialmente por la configuración del entorno.

Expo proporciona, entre otras características:

- Configuración inicial automática.
- Compilación simplificada.
- Ejecución inmediata mediante Expo Go.
- Actualizaciones OTA.
- Gran cantidad de APIs oficiales.
- Compatibilidad con Android, iOS y Web.

Para proyectos educativos, prototipos y una gran cantidad de aplicaciones empresariales, Expo representa una excelente alternativa debido a la reducción significativa de tiempo de configuración.

---

## ¿Por qué TypeScript?

JavaScript es un lenguaje extremadamente flexible; sin embargo, esa flexibilidad también puede convertirse en una fuente importante de errores durante el desarrollo.

TypeScript incorpora un sistema de tipos que permite detectar muchos de estos problemas antes de ejecutar la aplicación.

Por ejemplo, si una función espera recibir un número y accidentalmente se le envía una cadena de texto, TypeScript notificará el error durante la compilación.

Además del tipado estático, TypeScript proporciona:

- Autocompletado inteligente.
- Refactorización segura.
- Mejor documentación del código.
- Mayor facilidad de mantenimiento.
- Detección temprana de errores.

Por estas razones, actualmente TypeScript se considera prácticamente un estándar para proyectos React y React Native de tamaño medio y grande.

---

## Requisitos previos

Antes de crear el proyecto es recomendable verificar que las siguientes herramientas se encuentren correctamente instaladas.

| Herramienta | Descripción |
|------------|-------------|
| Node.js | Entorno de ejecución para JavaScript. |
| npm | Administrador de paquetes. |
| Git | Sistema de control de versiones. |
| Visual Studio Code | Editor de código recomendado. |
| Expo Go | Aplicación para ejecutar el proyecto en dispositivos móviles. |

Para comprobar la instalación de Node.js y npm puede utilizarse:

```bash
node -v
npm -v
```

---

## Creación del proyecto

Una vez preparado el entorno de desarrollo, se crea un nuevo proyecto utilizando la plantilla oficial de Expo con TypeScript.

```bash
npx create-expo-app@latest TaskFlow -t expo-template-blank-typescript
```

Este comando realiza automáticamente diversas tareas:

- Descarga la plantilla oficial.
- Configura Expo.
- Configura TypeScript.
- Instala las dependencias necesarias.
- Genera la estructura inicial del proyecto.

Al finalizar la instalación se obtiene un proyecto completamente funcional listo para ejecutarse.

Posteriormente se ingresa al directorio del proyecto.

```bash
cd TaskFlow
```

---

## Primera ejecución

Antes de realizar cualquier modificación es recomendable comprobar que el proyecto funciona correctamente.

Para ello se ejecuta:

```bash
npx expo start
```

Expo iniciará el servidor de desarrollo y mostrará una interfaz desde la cual será posible ejecutar la aplicación en:

- Android.
- iOS.
- Web.

Verificar el correcto funcionamiento en este momento permite identificar posibles problemas del entorno antes de comenzar el desarrollo de la aplicación.

---

## Instalación de dependencias adicionales

Una vez validado el funcionamiento del proyecto se instalaron algunas dependencias que serán utilizadas durante el desarrollo.

### Expo Router

```bash
npx expo install expo-router
```

Esta biblioteca permitirá implementar un sistema de navegación basado en archivos, simplificando considerablemente la organización del proyecto.

---

### Compatibilidad con Web

```bash
npx expo install react-dom react-native-web @expo/metro-runtime
```

Estas dependencias habilitan la ejecución de la aplicación desde un navegador utilizando la misma base de código.

---

### Iconografía

```bash
npx expo install @expo/vector-icons
```

Esta biblioteca proporciona cientos de iconos optimizados para React Native y será utilizada en la navegación y en distintos componentes de la interfaz.

---

## Configuración de Expo Router

Por defecto, Expo inicia la aplicación utilizando el archivo `App.tsx`.

Sin embargo, Expo Router utiliza un punto de entrada diferente.

Por ello fue necesario modificar el archivo `package.json`.

Antes:

```json
"main": "expo/AppEntry"
```

Después:

```json
"main": "expo-router/entry"
```

Asimismo, fue necesario registrar el plugin correspondiente dentro del archivo `app.json`.

```json
{
  "expo": {
    "plugins": [
      "expo-router"
    ]
  }
}
```

Una vez realizados estos cambios, Expo utilizará automáticamente la carpeta `app` como punto de entrada de la aplicación.

---

## Primera estructura del proyecto

Con Expo Router configurado, se creó la estructura inicial del proyecto.

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
├── components/
├── hooks/
├── services/
├── storage/
├── styles/
├── theme/
├── types/
└── utils/
```

Cada una de estas carpetas tendrá una responsabilidad específica que será desarrollada en los capítulos siguientes.

---

## Problemas encontrados durante la configuración

Durante la creación del proyecto surgieron algunos inconvenientes habituales que conviene documentar para futuras instalaciones.

### Error: Unable to resolve "../../App"

Este error apareció después de eliminar el archivo `App.tsx` sin haber configurado correctamente Expo Router.

La solución consistió en modificar el punto de entrada del proyecto dentro del archivo `package.json` y limpiar la caché del servidor de desarrollo.

```bash
npx expo start --clear
```

---

### Error: Cannot find module '@expo/vector-icons'

Este error se produjo al utilizar iconos antes de instalar la biblioteca correspondiente.

La solución fue instalar la dependencia oficial mediante:

```bash
npx expo install @expo/vector-icons
```

---

### Error: React DOM no encontrado

Al intentar ejecutar la versión Web aparecía un mensaje indicando que `react-dom` no estaba instalado.

La solución consistió en instalar las dependencias necesarias para la ejecución web.

```bash
npx expo install react-dom react-native-web @expo/metro-runtime
```

---

## Resumen del capítulo

En este primer capítulo se construyó la base del proyecto TaskFlow.

Se creó el proyecto utilizando Expo y TypeScript, se configuró Expo Router como sistema de navegación principal, se instalaron las dependencias necesarias para Android, iOS y Web y se documentaron los primeros problemas encontrados durante la configuración.

En el siguiente capítulo se estudiará la arquitectura general del proyecto, analizando la responsabilidad de cada carpeta y las decisiones de diseño que permitirán construir una aplicación escalable y fácil de mantener.