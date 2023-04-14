# 🔖 CotizadorBasico Seguros Automoviles

Es un pequeño cotizador de seguros de autos con 3 Marcas europeos, asiáticos y americanos con rango de años de 20 para atrás con dos planes básico o completo. Se utilizo para los estilos tailwind css.

## 📃 Tecnologías Utilizadas

| Tecnología    | Versión |
| :------------ | :------ |
| `react`       | 18.2.0  |
| `tailwindcss` | 3.2.7   |

## 📋 Documentación

-Para más información de: [React.js](https://es.reactjs.org/)

-Para más información de: [Tailwind Css](https://tailwindcss.com/)

## 📖 Características

- **Cotizador Básico** Es solo cotizar y realizar operaciones simples en el proceso.

📇 Se puede ver algunas imagenes de ejemplo
![CotizadorSegurosAutos-Login](/public/img/Home.png)
![CotizadorSegurosAutos-Login](/public/img/LllenandoDatos.png)
![CotizadorSegurosAutos-Login](/public/img/Loader.png)
![CotizadorSegurosAutos-Login](/public/img/MostrarResultado.png)

## 🚀 Comenzando

La configuración es más por parte de Tailwind Css pero ya están implementadas pero por las dudas aquí están:

1. **Instalar Tailwind CSS**
   - Instale tailwindcssy sus dependencias de pares, luego genere sus archivos y . tailwind.config.jspostcss.config.js

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. **Configura tus rutas de plantilla**
   - Agregue las rutas a todos sus archivos de plantilla en su tailwind.config.js archivo.

```JavaScript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. **_Agregue las directivas Tailwind a su CSS_**

   - Agregue las @tailwinddirectivas para cada una de las capas de Tailwind a su archivo. ./src/index.css

```Css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. **Comience su proceso de construcción**

   - Ejecute su proceso de compilación con npm run dev.

```Bash
npm run dev
```

5. **Comienza a usar Tailwind en tu proyecto**

   - Comience a usar las clases de utilidad de Tailwind para diseñar su contenido.

```JavaScript
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Holi!
    </h1>
  )
}
```

## 👩‍💻 Instalación

Instalacións CotizadorBasicoSegurosAutomoviles con npm:

```bash
  cd CotizadorBasicoSegurosAutomoviles
  npm install
```

Luego ejecutar el siguiente comando:

```bash
  npm run dev
```

## 👽 Autor

[![portfolio](https://img.shields.io/badge/Mi_portafolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://josemontiel.netlify.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/josemontielmv/)

> @Josmova ( Jose Montiel )
