# 🏗️ Arquitectura Técnica - Renova-Hub

> **Versión**: 1.0.0  
> **Última actualización**: 2026-02-05  
> **Autor**: Jorge Franco

---

## 📋 Índice

1. [Visión General](#-visión-general)
2. [Stack Tecnológico](#-stack-tecnológico)
3. [Arquitectura de Carpetas](#-arquitectura-de-carpetas)
4. [Patrones de Diseño](#-patrones-de-diseño)
5. [Sistema de Componentes](#-sistema-de-componentes)
6. [Flujo de Datos](#-flujo-de-datos)
7. [Convenciones de Código](#-convenciones-de-código)
8. [Estrategia de Branches](#-estrategia-de-branches)

---

## 🎯 Visión General

**Renova-Hub** es una plataforma web profesional para restauración de muebles con capacidades de e-commerce. El proyecto está diseñado para ser:

- **Escalable**: Arquitectura modular que crece con el negocio
- **Mantenible**: Código limpio y bien documentado
- **Performante**: Optimizado para SEO y velocidad
- **Profesional**: Diseño premium y experiencia de usuario excepcional

### Objetivos del Proyecto

1. **Fase 1 - La Fachada**: Landing page impactante con galería de transformaciones
2. **Fase 2 - El Cerebro**: Dashboard administrativo y sistema de cotizaciones
3. **Fase 3 - El Motor**: E-commerce completo con pagos integrados

---

## 🛠️ Stack Tecnológico

### Core Framework

```typescript
- Next.js 16.1.6 (App Router)
- React 19.2.3
- TypeScript 5.x
```

**¿Por qué Next.js?**

- ✅ SSR (Server-Side Rendering) para mejor SEO
- ✅ App Router para routing moderno
- ✅ Image Optimization automática
- ✅ API Routes integradas
- ✅ Excelente DX (Developer Experience)

### Styling

```typescript
- Tailwind CSS 4.x
- PostCSS
```

**¿Por qué Tailwind?**

- ✅ Utility-first para desarrollo rápido
- ✅ Diseño consistente con design tokens
- ✅ Tree-shaking automático (CSS mínimo)
- ✅ Responsive design simplificado

### Futuras Integraciones

- **Animaciones**: Framer Motion
- **Base de datos**: Supabase (PostgreSQL)
- **Autenticación**: NextAuth.js
- **Pagos**: Stripe
- **Storage**: Supabase Storage / Cloudinary
- **Email**: Resend / SendGrid

---

## 📁 Arquitectura de Carpetas

```
renova-hub/
├── .agent/                    # Workflows y automatización
│   └── workflows/            # Procesos documentados
│       ├── deploy.md
│       ├── testing.md
│       └── component-creation.md
│
├── docs/                      # Documentación técnica
│   ├── COMPONENTS.md         # Guía de componentes
│   ├── STYLING.md            # Sistema de diseño
│   ├── API.md                # Documentación de APIs
│   └── DEPLOYMENT.md         # Guía de despliegue
│
├── public/                    # Assets estáticos
│   ├── images/               # Imágenes optimizadas
│   │   ├── hero/
│   │   ├── gallery/
│   │   └── products/
│   └── fonts/                # Fuentes personalizadas
│
├── src/
│   ├── app/                  # App Router (Next.js)
│   │   ├── (marketing)/     # Grupo de rutas públicas
│   │   │   ├── page.tsx     # Landing page
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/     # Grupo de rutas admin
│   │   ├── api/             # API Routes
│   │   ├── globals.css
│   │   └── layout.tsx       # Root layout
│   │
│   ├── components/
│   │   ├── layout/          # Componentes de estructura
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   │
│   │   ├── sections/        # Secciones de página
│   │   │   ├── Hero.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── BeforeAfter.tsx
│   │   │   └── Testimonials.tsx
│   │   │
│   │   └── ui/              # Componentes reutilizables
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       └── Modal.tsx
│   │
│   ├── lib/                 # Utilidades y helpers
│   │   ├── utils.ts         # Funciones helper
│   │   ├── constants.ts     # Constantes globales
│   │   └── types.ts         # TypeScript types
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── useMediaQuery.ts
│   │   └── useScrollPosition.ts
│   │
│   └── styles/              # Estilos globales
│       └── animations.css
│
├── ARCHITECTURE.md           # Este archivo
├── README.md                # Documentación de usuario
└── package.json
```

### Principios de Organización

1. **Separación por función**: `layout/`, `sections/`, `ui/`
2. **Colocation**: Archivos relacionados juntos
3. **Route Groups**: Organización lógica de rutas con `(nombre)`
4. **Barrel Exports**: `index.ts` para exportaciones limpias

---

## 🎨 Patrones de Diseño

### 1. Component Composition Pattern

```typescript
// ✅ Bueno: Componentes pequeños y componibles
<Hero>
  <Hero.Title>Restauramos tus muebles</Hero.Title>
  <Hero.Subtitle>Con pasión y profesionalismo</Hero.Subtitle>
  <Hero.CTA>Ver galería</Hero.CTA>
</Hero>

// ❌ Malo: Componente monolítico
<Hero
  title="..."
  subtitle="..."
  ctaText="..."
  ctaLink="..."
/>
```

### 2. Server Components First

```typescript
// Por defecto, todos los componentes son Server Components
// Solo usa 'use client' cuando necesites:
// - Event handlers (onClick, onChange)
// - React hooks (useState, useEffect)
// - Browser APIs (window, localStorage)

// ✅ Server Component (por defecto)
export default function Gallery() {
  const images = await fetchImages(); // Fetch en servidor
  return <GalleryGrid images={images} />;
}

// ✅ Client Component (cuando sea necesario)
'use client';
export default function InteractiveGallery() {
  const [selected, setSelected] = useState(null);
  return <div onClick={() => setSelected(id)}>...</div>;
}
```

### 3. Atomic Design Methodology

```
Atoms      → ui/Button, ui/Input
Molecules  → ui/SearchBar (Input + Button)
Organisms  → sections/Hero (múltiples molecules)
Templates  → layout/MainLayout
Pages      → app/page.tsx
```

---

## 🧩 Sistema de Componentes

### Categorías de Componentes

#### 1. Layout Components (`components/layout/`)

**Propósito**: Estructura global de la aplicación

- `Header.tsx` - Navegación principal
- `Footer.tsx` - Pie de página con links
- `Navbar.tsx` - Menú de navegación
- `Sidebar.tsx` - Panel lateral (dashboard)

**Características**:

- Server Components por defecto
- Sticky/Fixed positioning
- Responsive design

#### 2. Section Components (`components/sections/`)

**Propósito**: Bloques de contenido de página completa

- `Hero.tsx` - Sección principal con CTA
- `Gallery.tsx` - Galería de transformaciones
- `BeforeAfter.tsx` - Comparador de imágenes
- `Testimonials.tsx` - Reseñas de clientes
- `Contact.tsx` - Formulario de contacto

**Características**:

- Full-width sections
- Spacing consistente (py-16, py-24)
- Background variants

#### 3. UI Components (`components/ui/`)

**Propósito**: Componentes reutilizables y genéricos

- `Button.tsx` - Botones con variantes
- `Card.tsx` - Tarjetas de contenido
- `Input.tsx` - Campos de formulario
- `Modal.tsx` - Diálogos y modales
- `Badge.tsx` - Etiquetas y tags

**Características**:

- Props tipadas con TypeScript
- Variantes con Tailwind
- Accesibilidad (a11y)

---

## 🔄 Flujo de Datos

### Fase 1: Estático (Actual)

```
Componentes → Props → Render
```

### Fase 2: Con Backend

```
API Route → Supabase → Server Component → Client Component
```

### Fase 3: Con Estado Global

```
Zustand Store ← API ← Supabase
     ↓
Client Components
```

---

## 📝 Convenciones de Código

### Nomenclatura

```typescript
// Componentes: PascalCase
export default function HeroSection() {}

// Funciones: camelCase
export function formatPrice(amount: number) {}

// Constantes: UPPER_SNAKE_CASE
export const MAX_UPLOAD_SIZE = 5 * 1024 * 1024;

// Tipos/Interfaces: PascalCase con prefijo
export interface IProduct {}
export type TProductStatus = "active" | "inactive";
```

### Estructura de Archivos

```typescript
// 1. Imports externos
import { useState } from 'react';
import Image from 'next/image';

// 2. Imports internos
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

// 3. Types/Interfaces
interface HeroProps {
  title: string;
  subtitle?: string;
}

// 4. Componente principal
export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="...">
      {/* JSX */}
    </section>
  );
}

// 5. Componentes auxiliares (si son pequeños)
function HeroBackground() {
  return <div className="..." />;
}
```

### Tailwind CSS

```typescript
// ✅ Orden recomendado de clases
className="
  // Layout
  flex items-center justify-between
  // Spacing
  px-4 py-2 gap-4
  // Sizing
  w-full h-auto
  // Typography
  text-lg font-bold
  // Colors
  bg-blue-600 text-white
  // Effects
  rounded-lg shadow-md
  // States
  hover:bg-blue-700
  // Responsive
  md:px-8 lg:text-xl
"

// ✅ Usar @apply para patrones repetidos
// globals.css
@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700;
  }
}
```

---

## 🌿 Estrategia de Branches

### Branch Principal: `main`

- **Propósito**: Código en producción
- **Protección**: Solo merges aprobados
- **Deploy**: Automático a producción

### Branch de Desarrollo: `develop`

- **Propósito**: Integración de features
- **Flujo**: Feature branches → develop → main
- **Testing**: Ambiente de staging

### Feature Branches

```bash
# Nomenclatura
feature/hero-section
feature/gallery-component
fix/navbar-mobile
refactor/button-variants

# Flujo de trabajo
git checkout develop
git checkout -b feature/hero-section
# ... trabajo ...
git push origin feature/hero-section
# Pull Request → develop
```

### Hotfix Branches

```bash
# Para bugs críticos en producción
hotfix/critical-bug-name
# Merge directo a main y develop
```

---

## 🚀 Próximos Pasos

### Inmediatos

1. ✅ Crear estructura de documentación
2. ✅ Definir workflows de automatización
3. [ ] Implementar Hero Section
4. [ ] Crear sistema de diseño en `docs/STYLING.md`

### Corto Plazo

1. [ ] Configurar ESLint y Prettier
2. [ ] Implementar testing con Vitest
3. [ ] Configurar CI/CD con GitHub Actions
4. [ ] Documentar API routes

### Largo Plazo

1. [ ] Integrar Supabase
2. [ ] Implementar autenticación
3. [ ] Configurar Stripe
4. [ ] Deploy a Vercel

---

## 📚 Referencias

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Server Components](https://react.dev/reference/rsc/server-components)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Mantenido por**: Jorge Franco  
**Repositorio**: [darkhouselab08/renova-hub](https://github.com/darkhouselab08/renova-hub)
