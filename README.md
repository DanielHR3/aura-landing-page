# 🌿 Aura — Elegancia Minimalista

<div align="center">

![Aura Preview](https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200&h=400)

**Landing page de moda minimalista de lujo. Diseño editorial, animaciones fluidas y UX premium.**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

[🌐 Ver demo](#) · [🐛 Reportar bug](https://github.com/DanielHR3/aura-landing-page/issues) · [✨ Solicitar función](https://github.com/DanielHR3/aura-landing-page/issues)

</div>

---

## ✨ Características

- **Hero de pantalla completa** con imagen de fondo y animaciones de entrada con Framer Motion
- **ProductGrid** — 6 productos con overlay *Quick Add*, badges y botón ❤️ save
- **BentoGrid** — 4 categorías en layout editorial asimétrico con gradient overlay
- **Lookbook Editorial** — sección oscura con grid de 3 imágenes y quote de marca
- **Newsletter de dos columnas** — foto editorial + formulario premium sobre fondo zinc-950
- **CategoryPage** — filtros collapsibles, sort dinámico, 8+ productos por categoría
- **Navbar** scroll-aware: transparente → frosted glass con backdrop-blur
- **SEO listo**: Open Graph, meta description, idioma en español
- Fuentes: **Inter** + **Outfit** (Google Fonts)
- Scrollbar personalizada + smooth scroll

## 🛠️ Stack

| Tecnología | Uso |
|---|---|
| React 19 + Vite 8 | Framework y build tool |
| Tailwind CSS 4 | Estilos utility-first |
| Framer Motion 12 | Animaciones y transiciones |
| React Router 7 | Enrutamiento SPA |
| Lucide React | Iconografía |
| clsx + tailwind-merge | Gestión de clases |

## 🚀 Instalación y uso local

```bash
# 1. Clonar el repositorio
git clone https://github.com/DanielHR3/aura-landing-page.git
cd aura-landing-page

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
# → http://localhost:5173
```

### Otros comandos

```bash
npm run build    # Compilar para producción
npm run preview  # Previsualizar build de producción
npm run lint     # Ejecutar ESLint
```

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── common/
│   │   └── Button.jsx        # Componente de botón reutilizable
│   ├── home/
│   │   ├── Hero.jsx          # Sección hero full-viewport
│   │   ├── ProductGrid.jsx   # Grid de 6 productos con Quick Add
│   │   ├── BentoGrid.jsx     # Grid editorial de categorías
│   │   ├── Lookbook.jsx      # Sección editorial oscura
│   │   └── Newsletter.jsx    # Suscripción dos columnas
│   └── layout/
│       ├── Navbar.jsx        # Navegación scroll-aware
│       └── Footer.jsx        # Footer con links y redes sociales
├── pages/
│   ├── Home.jsx              # Página principal
│   └── CategoryPage.jsx      # Página de categoría con filtros
├── index.css                 # Estilos base + tokens
└── main.jsx
```

## 🎨 Diseño

El diseño sigue principios de **moda de lujo minimalista**:
- **Paleta**: zinc (neutros) + blanco + negro profundo
- **Tipografía**: Outfit (headings) + Inter (body)
- **Motion**: animaciones con ease `[0.16, 1, 0.3, 1]` para spring natural
- **Layout**: máx. 7xl con padding adaptable

## 📄 Licencia

MIT © [Daniel Hernández Rubio](https://danielhr3.github.io)
