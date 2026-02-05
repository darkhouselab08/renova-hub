# 🧩 Guía de Componentes - Renova-Hub

> Documentación completa del sistema de componentes

---

## 📋 Índice

1. [Filosofía de Componentes](#-filosofía-de-componentes)
2. [Layout Components](#-layout-components)
3. [Section Components](#-section-components)
4. [UI Components](#-ui-components)
5. [Guía de Creación](#-guía-de-creación)

---

## 🎯 Filosofía de Componentes

### Principios Fundamentales

1. **Single Responsibility**: Cada componente hace una cosa bien
2. **Composición sobre Configuración**: Componentes pequeños que se combinan
3. **Props Tipadas**: TypeScript para todo
4. **Server First**: Server Components por defecto
5. **Accesibilidad**: ARIA labels y navegación por teclado

### Cuándo Crear un Componente

✅ **Crear componente cuando**:

- Se repite 2+ veces
- Tiene lógica compleja
- Necesita testing aislado
- Mejora la legibilidad

❌ **No crear componente cuando**:

- Es usado una sola vez
- Es trivial (< 5 líneas)
- Complica innecesariamente

---

## 🏗️ Layout Components

### Header.tsx

**Propósito**: Navegación principal del sitio

**Ubicación**: `src/components/layout/Header.tsx`

**Ejemplo de uso**:

```typescript
// app/layout.tsx
import Header from '@/components/layout/Header';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
```

**Props**:

```typescript
interface HeaderProps {
  variant?: "transparent" | "solid";
  sticky?: boolean;
}
```

**Características**:

- Sticky positioning
- Scroll behavior (cambia al hacer scroll)
- Mobile responsive con hamburger menu
- Logo + Navigation links

---

### Footer.tsx

**Propósito**: Pie de página con información y links

**Ubicación**: `src/components/layout/Footer.tsx`

**Estructura**:

```
Footer
├── Logo + Descripción
├── Links (Servicios, Empresa, Legal)
├── Redes Sociales
└── Copyright
```

**Props**:

```typescript
interface FooterProps {
  showNewsletter?: boolean;
}
```

---

### Navbar.tsx

**Propósito**: Menú de navegación (usado dentro de Header)

**Props**:

```typescript
interface NavbarProps {
  items: NavItem[];
  orientation?: "horizontal" | "vertical";
}

interface NavItem {
  label: string;
  href: string;
  icon?: ReactNode;
}
```

---

## 📄 Section Components

### Hero.tsx

**Propósito**: Sección principal con CTA

**Ubicación**: `src/components/sections/Hero.tsx`

**Ejemplo de uso**:

```typescript
<Hero
  title="Restauramos tus muebles con pasión"
  subtitle="Transformamos lo viejo en extraordinario"
  ctaText="Ver galería"
  ctaHref="/gallery"
  backgroundImage="/images/hero-bg.jpg"
/>
```

**Props**:

```typescript
interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  variant?: "default" | "minimal" | "split";
}
```

**Variantes**:

- `default`: Imagen de fondo con overlay
- `minimal`: Sin imagen, fondo sólido
- `split`: Texto a la izquierda, imagen a la derecha

---

### Gallery.tsx

**Propósito**: Galería de imágenes con grid responsive

**Props**:

```typescript
interface GalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  showFilters?: boolean;
}

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
  title?: string;
}
```

**Características**:

- Lazy loading con Next/Image
- Lightbox modal al hacer click
- Filtros por categoría
- Grid responsive (1-2-3-4 columnas)

---

### BeforeAfter.tsx

**Propósito**: Comparador de imágenes antes/después

**Props**:

```typescript
interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
  description?: string;
}
```

**Características**:

- Slider interactivo
- Responsive
- Labels "Antes" / "Después"

---

### Testimonials.tsx

**Propósito**: Reseñas de clientes

**Props**:

```typescript
interface TestimonialsProps {
  testimonials: Testimonial[];
  variant?: "carousel" | "grid";
}

interface Testimonial {
  id: string;
  name: string;
  role?: string;
  avatar?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
}
```

---

## 🎨 UI Components

### Button.tsx

**Propósito**: Botón reutilizable con variantes

**Ubicación**: `src/components/ui/Button.tsx`

**Ejemplo de uso**:

```typescript
<Button variant="primary" size="lg">
  Ver más
</Button>

<Button variant="outline" size="sm" icon={<ArrowRight />}>
  Siguiente
</Button>
```

**Props**:

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  fullWidth?: boolean;
}
```

**Variantes**:

```typescript
// Primary: Acción principal
bg-blue-600 text-white hover:bg-blue-700

// Secondary: Acción secundaria
bg-gray-200 text-gray-900 hover:bg-gray-300

// Outline: Acción terciaria
border-2 border-blue-600 text-blue-600 hover:bg-blue-50

// Ghost: Acción sutil
text-gray-700 hover:bg-gray-100

// Danger: Acción destructiva
bg-red-600 text-white hover:bg-red-700
```

---

### Card.tsx

**Propósito**: Contenedor de contenido con estilos consistentes

**Props**:

```typescript
interface CardProps {
  children: ReactNode;
  variant?: "default" | "bordered" | "elevated";
  padding?: "sm" | "md" | "lg";
  hoverable?: boolean;
}
```

**Ejemplo**:

```typescript
<Card variant="elevated" hoverable>
  <Card.Header>
    <h3>Título</h3>
  </Card.Header>
  <Card.Body>
    <p>Contenido...</p>
  </Card.Body>
  <Card.Footer>
    <Button>Acción</Button>
  </Card.Footer>
</Card>
```

---

### Input.tsx

**Propósito**: Campo de formulario

**Props**:

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: ReactNode;
  fullWidth?: boolean;
}
```

**Ejemplo**:

```typescript
<Input
  label="Nombre completo"
  placeholder="Juan Pérez"
  error={errors.name}
  helperText="Ingresa tu nombre y apellido"
  required
/>
```

---

### Modal.tsx

**Propósito**: Diálogo modal

**Props**:

```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
}
```

**Ejemplo**:

```typescript
'use client';

const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirmar acción"
  size="md"
>
  <p>¿Estás seguro?</p>
  <Button onClick={() => setIsOpen(false)}>Cancelar</Button>
</Modal>
```

---

## 🛠️ Guía de Creación

### Template de Componente

```typescript
// src/components/[category]/ComponentName.tsx

import { ReactNode } from 'react';

// 1. Definir Props Interface
interface ComponentNameProps {
  children?: ReactNode;
  variant?: 'default' | 'alternative';
  className?: string;
}

// 2. Componente Principal
export default function ComponentName({
  children,
  variant = 'default',
  className = '',
}: ComponentNameProps) {
  return (
    <div className={`base-styles ${className}`}>
      {children}
    </div>
  );
}

// 3. Sub-componentes (opcional)
ComponentName.Header = function Header({ children }: { children: ReactNode }) {
  return <div className="header-styles">{children}</div>;
};

ComponentName.Body = function Body({ children }: { children: ReactNode }) {
  return <div className="body-styles">{children}</div>;
};
```

### Checklist de Creación

- [ ] Crear archivo en carpeta correcta
- [ ] Definir TypeScript interface para props
- [ ] Implementar componente
- [ ] Agregar variantes si es necesario
- [ ] Documentar en este archivo
- [ ] Crear ejemplo de uso
- [ ] Agregar a barrel export (`index.ts`)
- [ ] Testing (futuro)

### Barrel Exports

```typescript
// src/components/ui/index.ts
export { default as Button } from "./Button";
export { default as Card } from "./Card";
export { default as Input } from "./Input";
export { default as Modal } from "./Modal";

// Uso
import { Button, Card, Input } from "@/components/ui";
```

---

## 📚 Recursos

- [React Component Patterns](https://react.dev/learn)
- [Tailwind Components](https://tailwindui.com/)
- [Radix UI](https://www.radix-ui.com/) - Para componentes complejos
- [Shadcn/ui](https://ui.shadcn.com/) - Inspiración

---

**Última actualización**: 2026-02-05
