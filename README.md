# Dolarify Landing

Sitio web público de [Dolarify](https://apps.apple.com/ve/app/dolarify/id6763238329) — la calculadora y presupuestos multi-moneda para Venezuela.

**Dominio:** [dolarify.app](https://dolarify.app)
**App:** [iOS](https://apps.apple.com/ve/app/dolarify/id6763238329) · [Android](https://play.google.com/store/apps/details?id=ve.lyonincode.dolarify)

---

## Stack

- **Angular 21.1** con SSR, standalone components, signals y control flow nativo (`@if`/`@for`).
- **Tailwind CSS 4.1** con `@theme` y variables CSS que reflejan el design system mobile.
- **TypeScript estricto** (strict, noImplicitOverride, noPropertyAccessFromIndexSignature).
- **Vitest** para tests.
- **Vercel** para deploy.

## Características

- Diseño **glassmorphism** (liquid glass) con dark mode default y toggle a light.
- **Bento grid** de features con miniaturas reales de la app.
- **Carrusel scroll-snap** con screenshots de iOS y grid para Android.
- **Mini-calculadora decorativa** animada en el hero.
- **SEO completo**: Open Graph, Twitter cards, sitemap, robots, deep links a App Store/Play Store.
- **Accesibilidad**: skip link, ARIA, `prefers-reduced-motion`, focus visible, contraste WCAG AA.
- **Performance**: SSR + prerender, WebP en todas las imágenes, lazy loading, fonts con `display=swap`.

---

## Estructura

```
src/
├── app/
│   ├── core/
│   │   ├── services/          # ThemeService, DeviceService, DownloadService, SeoService
│   │   └── data/              # features, faq, rates, showcase, legal (datos estáticos)
│   ├── shared/
│   │   ├── components/        # navbar, footer, glass-card, store-badges, theme-toggle, mesh-bg, section-heading
│   │   └── directives/        # reveal-on-scroll
│   ├── pages/
│   │   ├── home/              # Home con 8 secciones
│   │   ├── download/          # Redirect inteligente a App Store / Play Store
│   │   ├── privacy/           # Política de privacidad
│   │   └── terms/             # Términos de servicio
│   ├── app.ts                 # Shell: skip link + navbar + router-outlet + footer
│   ├── app.config.ts          # Providers: router, hydration, SEO initializer
│   ├── app.routes.ts          # Lazy routes
│   └── app.routes.server.ts   # RenderMode.Prerender
├── public/
│   ├── brand/                 # Logo + app icon
│   ├── screenshots/           # iOS + Android WebP
│   ├── store/                 # App Store + Google Play badges
│   ├── og-image.png           # Open Graph (1200x630)
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── styles.css                 # Design tokens (@theme) + base + glass + mesh
└── index.html                 # SEO defaults, font preconnect, canonical
```

## Comandos

```bash
# Dev server (http://localhost:4200)
npm start

# Build de producción
npm run build

# Tests (Vitest)
npm test

# SSR local
npm run serve:ssr:dolarify-landing
```

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Home con 8 secciones (hero, rates, features, how, showcase iOS, android, FAQ, CTA) |
| `/download` | Detección de dispositivo y redirect a App Store / Play Store |
| `/privacy` | Política de privacidad |
| `/terms` | Términos de servicio |

## Design System

El proyecto **consume el mismo design system** que la app mobile (`~/Lyon incode/dolarify/dolarify-mobile-app/design-system/MASTER.md`).

Tokens en `src/styles.css`:
- **Dark mode (default)**: fondo `#080b16`, glass `rgba(255,255,255,0.04)`, gold `#f59e0b`, purple `#8b5cf6`.
- **Light mode** (`.light` class): fondo `#f5f5fa`, glass `rgba(255,255,255,0.72)`, gold `#d97706`, purple `#7c3aed`.
- **Brand colors por moneda**: VES `#FCDD09`, USD `#6366F1`, EUR `#3B82F6`, USDT `#26A17B`.
- **Tipografía**: Space Grotesk (headings/numbers) + DM Sans (body).
- **Mesh gradient** animado (purple top + gold bottom) en hero y CTA final.

## Accesibilidad

- Skip link al contenido principal.
- Landmarks semánticos (`<header>`, `<main>`, `<footer>`, `<nav>`).
- Focus visible: outline gold 2px con offset.
- Contraste WCAG AA verificado en ambos modos.
- `prefers-reduced-motion` desactiva mesh flow, animaciones del carrusel y transiciones globales.
- `aria-label` y `aria-hidden` en iconos y elementos decorativos.
- FAQ con `<details>`/`<summary>` accesible por teclado.
- Carousel con `role="tablist"` para dots indicadores.

## Performance

- **Initial bundle**: ~87 kB transfer (gzipped).
- **Lazy routes**: home 8.5 kB, privacy 1.7 kB, terms 1.7 kB, download 1.1 kB.
- **Imágenes**: WebP @ 82% calidad, ancho 600px (iOS) y 400px (Android).
- **Fonts**: Google Fonts con `display=swap` y `preconnect`.
- **SSR + Prerender**: 4 rutas estáticas pre-generadas en build.
- **Sin Tailwind runtime**: solo CSS final con utilities tree-shaken.

## Deploy a Vercel

El proyecto está listo para Vercel con SSR. Configuración recomendada:

1. **Conectar repo** en [vercel.com/new](https://vercel.com/new).
2. **Build command**: `npm run build`
3. **Output directory**: `dist/dolarify-landing` (Vercel detecta el SSR automáticamente con Angular 21).
4. **Dominio**: agregar `dolarify.app` en Vercel → Domains → apuntar DNS al proyecto.

Si Vercel no detecta el preset de Angular automáticamente, crear `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/dolarify-landing",
  "framework": null
}
```

## SEO

- **Open Graph**: tags `og:title`, `og:description`, `og:image`, `og:url`, `og:locale` aplicados por ruta.
- **Twitter cards**: `summary_large_image` con image 1200x630.
- **Sitemap**: `public/sitemap.xml` con 4 rutas.
- **Robots**: `public/robots.txt` permite todo + apunta al sitemap.
- **Canonical**: `https://dolarify.app/` en `index.html`.
- **Deep links**: `apple-itunes-app` y `google-play-app` para smart banner en iOS/Android.
- **Prerender**: cada ruta se prerenderiza en build → HTML estático servido en primer load.

## Licencia

© 2026 Dolarify. Todos los derechos reservados.
