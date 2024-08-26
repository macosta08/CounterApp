# Counter App - React + TypeScript + Vite

Este proyecto es una aplicación de contador simple desarrollada con React, TypeScript y Vite. La aplicación permite incrementar y decrementar un contador, y está configurada con ESLint y Prettier para mantener un código limpio y consistente.

## Lint despliegue en Vercel

```bash
https://counter-app-phi-one.vercel.app/

```

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Un superconjunto de JavaScript que añade tipos estáticos.
- **Vite**: Un build tool que proporciona un entorno de desarrollo rápido y eficiente.
- **ESLint**: Herramienta de linting para identificar y reportar patrones en el código.
- **Prettier**: Formateador de código para mantener un estilo consistente.
- **Jest**: Framework de pruebas para JavaScript.
- **Testing Library**: Herramientas para probar componentes de React.

## Configuración del Proyecto

### Instalación

Aquí tienes el archivo `README.md` con la información proporcionada:

````markdown
# Counter App

## Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/counter-app.git
cd counter-app
```

## Instalar las Dependencias

```bash
bun install
```

## Scripts Disponibles

- **`bun dev`**: Inicia el servidor de desarrollo.
- **`bun build`**: Construye la aplicación para producción.
- **`bun lint`**: Ejecuta ESLint para encontrar y arreglar problemas en el código.
- **`bun prettier`**: Formatea el código usando Prettier.
- **`bun test`**: Ejecuta las pruebas con Jest.
- **`bun test:single`**: Ejecuta las pruebas de un solo archivo especificado.

## Despliegue

Para desplegar la aplicación, sigue estos pasos:

1. **Construye la aplicación**:

   ```bash
   bun build
   ```

2. Los archivos de salida se encontrarán en la carpeta `dist`. Puedes servir estos archivos usando cualquier servidor estático.

## Expansión de la Configuración de ESLint

Si estás desarrollando una aplicación de producción, recomendamos actualizar la configuración para habilitar reglas de linting con conocimiento de tipos:

1. Configura la propiedad `parserOptions` en el nivel superior de esta manera:

   ```javascript
   export default tseslint.config({
     languageOptions: {
       // otras opciones...
       parserOptions: {
         project: ['./tsconfig.node.json', './tsconfig.app.json'],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   });
   ```

2. Reemplaza `tseslint.configs.recommended` por `tseslint.configs.recommendedTypeChecked` o `tseslint.configs.strictTypeChecked`.

3. Opcionalmente, añade `...tseslint.configs.stylisticTypeChecked`.

4. Instala `eslint-plugin-react` y actualiza la configuración:

   ```javascript
   // eslint.config.js
   import react from 'eslint-plugin-react';

   export default tseslint.config({
     // Configura la versión de React
     settings: { react: { version: '18.3' } },
     plugins: {
       // Añade el plugin de React
       react,
     },
     rules: {
       // otras reglas...
       // Habilita sus reglas recomendadas
       ...react.configs.recommended.rules,
       ...react.configs['jsx-runtime'].rules,
     },
   });
   ```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que te gustaría hacer.

```

```
````
