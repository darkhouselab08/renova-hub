# 🛠️ Renova-Hub

> Plataforma web profesional para restauración de muebles y e-commerce

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8)](https://tailwindcss.com/)

---

## 🚀 Quick Start

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build
npm run build

# Producción
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📚 Documentación

### 📖 Documentación Principal

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Arquitectura técnica completa del proyecto
  - Stack tecnológico y decisiones
  - Estructura de carpetas
  - Patrones de diseño
  - Convenciones de código
  - Estrategia de branches

### 📂 Documentación Detallada (`docs/`)

- **[COMPONENTS.md](./docs/COMPONENTS.md)** - Sistema de componentes
  - Layout, Section y UI components
  - Props y ejemplos de uso
  - Guía de creación de componentes
- **[STYLING.md](./docs/STYLING.md)** - Sistema de diseño
  - Paleta de colores
  - Tipografía
  - Espaciado y responsive design
  - Animaciones
- **[API.md](./docs/API.md)** - Documentación de APIs
  - Endpoints actuales y futuros
  - Convenciones de API
  - Error handling

### 🤖 Workflows de Automatización (`.agent/workflows/`)

- **[component-creation.md](./.agent/workflows/component-creation.md)** - Crear componentes
- **[testing.md](./.agent/workflows/testing.md)** - Testing y verificación
- **[deploy.md](./.agent/workflows/deploy.md)** - Despliegue a producción

---

## 🛠️ Stack Tecnológico

### Core

- **Framework**: Next.js 16.1.6 (App Router)
- **Lenguaje**: TypeScript 5.x
- **Estilos**: Tailwind CSS 4.x
- **Runtime**: React 19.2.3

### Futuras Integraciones

- **Animaciones**: Framer Motion
- **Base de datos**: Supabase (PostgreSQL)
- **Autenticación**: NextAuth.js
- **Pagos**: Stripe
- **Storage**: Supabase Storage / Cloudinary
- **Email**: Resend / SendGrid

---

## 📁 Estructura del Proyecto

```
renova-hub/
├── .agent/                    # Workflows y automatización
│   └── workflows/            # Procesos documentados
├── docs/                      # Documentación técnica
│   ├── COMPONENTS.md
│   ├── STYLING.md
│   └── API.md
├── public/                    # Assets estáticos
│   └── images/
├── src/
│   ├── app/                  # App Router (Next.js)
│   │   ├── (marketing)/     # Rutas públicas
│   │   ├── (dashboard)/     # Rutas admin (futuro)
│   │   └── api/             # API Routes (futuro)
│   ├── components/
│   │   ├── layout/          # Header, Footer, Navbar
│   │   ├── sections/        # Hero, Gallery, etc.
│   │   └── ui/              # Button, Card, Input, etc.
│   ├── lib/                 # Utilidades y helpers
│   ├── hooks/               # Custom React hooks
│   └── styles/              # Estilos globales
├── ARCHITECTURE.md           # Arquitectura técnica
└── README.md                # Este archivo
```

---

## 🎯 Roadmap

### ✅ Fase 0: Fundación

- [x] Configuración inicial de Next.js
- [x] Setup de Tailwind CSS
- [x] Estructura de carpetas
- [x] Documentación completa
- [x] Workflows de desarrollo

### 🚧 Fase 1: La Fachada (En desarrollo)

- [ ] Hero Section con CTA
- [ ] Componente Antes/Después
- [ ] Galería de transformaciones
- [ ] Testimonios
- [ ] Footer con links
- [ ] Responsive design completo

### 📋 Fase 2: El Cerebro

- [ ] Dashboard administrativo
- [ ] Cotizador automático
- [ ] Sistema de leads
- [ ] Integración con Supabase
- [ ] Autenticación

### 🛒 Fase 3: El Motor

- [ ] E-commerce completo
- [ ] Carrito de compras
- [ ] Integración con Stripe
- [ ] Gestión de inventario
- [ ] Sistema de órdenes

---

## 🧩 Componentes Principales

### Layout Components

- `Header` - Navegación principal
- `Footer` - Pie de página
- `Navbar` - Menú de navegación

### Section Components

- `Hero` - Sección principal con CTA
- `Gallery` - Galería de transformaciones
- `BeforeAfter` - Comparador de imágenes
- `Testimonials` - Reseñas de clientes

### UI Components

- `Button` - Botones con variantes
- `Card` - Tarjetas de contenido
- `Input` - Campos de formulario
- `Modal` - Diálogos

Ver [COMPONENTS.md](./docs/COMPONENTS.md) para documentación completa.

---

## 🎨 Sistema de Diseño

### Colores Principales

- **Primary**: Azul (#3b82f6) - Confianza y profesionalismo
- **Secondary**: Madera (#8b6f47) - Conexión con restauración
- **Neutrals**: Escala de grises

### Tipografía

- **Sans**: Inter (principal)
- **Display**: Playfair Display (títulos especiales)

### Espaciado

Sistema basado en múltiplos de 4px (Tailwind)

Ver [STYLING.md](./docs/STYLING.md) para guía completa.

---

## 🌿 Git Workflow

### Branches

- `main` - Producción (protegida)
- `develop` - Desarrollo activo
- `feature/*` - Nuevas funcionalidades
- `fix/*` - Correcciones de bugs
- `hotfix/*` - Fixes urgentes en producción

### Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: agregar Hero section
fix: corregir responsive en navbar
docs: actualizar ARCHITECTURE.md
style: mejorar espaciado en cards
refactor: reorganizar componentes UI
```

---

## 🚀 Despliegue

### Plataforma

- **Hosting**: Vercel (recomendado para Next.js)
- **Deploy**: Automático desde `main` branch
- **Preview**: Cada PR genera preview deployment

### Ambientes

- **Producción**: `main` → https://renova-hub.vercel.app
- **Staging**: `develop` → Preview deployments
- **Local**: `npm run dev` → http://localhost:3000

Ver [deploy.md](./.agent/workflows/deploy.md) para proceso completo.

---

## 🧪 Testing

```bash
# Linter
npm run lint

# Type checking
npx tsc --noEmit

# Build test
npm run build
```

Ver [testing.md](./.agent/workflows/testing.md) para checklist completo.

---

## 📝 Convenciones de Código

### Nomenclatura

- **Componentes**: `PascalCase` (ej: `HeroSection`)
- **Funciones**: `camelCase` (ej: `formatPrice`)
- **Constantes**: `UPPER_SNAKE_CASE` (ej: `MAX_ITEMS`)
- **Archivos**: `PascalCase.tsx` para componentes

### Estructura de Componentes

```typescript
// 1. Imports externos
import { useState } from 'react';

// 2. Imports internos
import { Button } from '@/components/ui';

// 3. Types/Interfaces
interface Props { ... }

// 4. Componente
export default function Component() { ... }
```

Ver [ARCHITECTURE.md](./ARCHITECTURE.md) para convenciones completas.

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una feature branch (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'feat: add amazing feature'`)
4. Push a la branch (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto es privado y de uso personal/educativo.

---

## 👨‍💻 Autor

**Jorge Franco**

- GitHub: [@darkhouselab08](https://github.com/darkhouselab08)
- Proyecto: Curso Ultimate React

---

## 📚 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

<div align="center">

**Hecho con ❤️ y ☕ por Jorge Franco**

[Documentación](./ARCHITECTURE.md) • [Componentes](./docs/COMPONENTS.md) • [Workflows](./.agent/workflows/)

</div>
