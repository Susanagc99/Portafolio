# Portfolio (Next.js)

## English

This is a personal portfolio built with Next.js (App Router). It contains a Home, Projects and Contact pages. The contact form validates input on the client and stores submissions in MongoDB via an API route.

Technologies

- Next.js (App Router)
- React 19
- TypeScript
- Tailwind CSS
- HeroUI
- Mongoose + MongoDB
- react-hook-form + yup

Quick start

1. Install dependencies:

```powershell
npm install
```

2. Create a `.env.local` file with at least:

```
MONGODB_URI=your_mongodb_connection_string
```

3. Run the dev server:

```powershell
npm run dev
```

4. Open http://localhost:3000

Notes

- If you use external images, `next.config.ts` contains `images.remotePatterns` configured for the project's image hosts.
- The contact API route is at `src/app/api/contact/route.ts` and uses the Mongoose model in `src/database/models/contact.ts`.

---

## Español

Este es un portafolio personal construido con Next.js (App Router). Incluye páginas Home, Projects y Contact. El formulario de contacto valida en cliente y guarda los envíos en MongoDB mediante una ruta API.

Tecnologías

- Next.js (App Router)
- React 19
- TypeScript
- Tailwind CSS
- HeroUI
- Mongoose + MongoDB
- react-hook-form + yup

Cómo ejecutar

1. Instalar dependencias:

```powershell
npm install
```

2. Crear un archivo `.env.local` con al menos:

```
MONGODB_URI=tu_string_de_conexión_a_mongodb
```

3. Iniciar en desarrollo:

```powershell
npm run dev
```

4. Abrir http://localhost:3000

Notas

- `next.config.ts` ya tiene configurados `remotePatterns` para hosts de imágenes externos usados en el proyecto.
- La ruta de la API del formulario está en `src/app/api/contact/route.ts` y el modelo Mongoose en `src/database/models/contact.ts`.

---


