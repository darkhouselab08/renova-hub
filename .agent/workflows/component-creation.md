---
description: Crear un nuevo componente siguiendo las convenciones del proyecto
---

# Workflow: Crear Nuevo Componente

Este workflow te guía para crear componentes consistentes en Renova-Hub.

## Paso 1: Determinar la categoría del componente

Decide dónde va tu componente:

- **`components/layout/`** - Estructura global (Header, Footer, Navbar)
- **`components/sections/`** - Secciones de página completa (Hero, Gallery)
- **`components/ui/`** - Componentes reutilizables (Button, Card, Input)

## Paso 2: Crear el archivo del componente

```bash
# Ejemplo para un componente UI
touch src/components/ui/NombreComponente.tsx
```

## Paso 3: Usar el template base

Copia este template en tu nuevo archivo:

````typescript
// src/components/[category]/ComponentName.tsx

import { ReactNode } from 'react';

/**
 * [Descripción breve del componente]
 *
 * @example
 * ```tsx
 * <ComponentName variant="default">
 *   Contenido
 * </ComponentName>
 * ```
 */

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
    <div
      className={`
        base-styles
        ${variant === 'default' ? 'default-styles' : 'alternative-styles'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// 3. Sub-componentes (opcional)
ComponentName.Header = function Header({
  children
}: {
  children: ReactNode
}) {
  return <div className="header-styles">{children}</div>;
};
````

## Paso 4: Implementar el componente

Sigue estas convenciones:

### TypeScript

- ✅ Todas las props deben estar tipadas
- ✅ Usa `interface` para props
- ✅ Exporta tipos si son reutilizables

### Styling

- ✅ Usa Tailwind CSS
- ✅ Sigue el sistema de diseño en `docs/STYLING.md`
- ✅ Mantén clases ordenadas (layout → spacing → colors → effects)

### Accesibilidad

- ✅ Agrega ARIA labels cuando sea necesario
- ✅ Soporta navegación por teclado
- ✅ Contraste adecuado (WCAG AA)

## Paso 5: Agregar al barrel export

```bash
# Edita el archivo index.ts de la categoría
code src/components/[category]/index.ts
```

Agrega la exportación:

```typescript
// src/components/ui/index.ts
export { default as Button } from "./Button";
export { default as Card } from "./Card";
export { default as NuevoComponente } from "./NuevoComponente"; // ← Agregar
```

## Paso 6: Documentar en COMPONENTS.md

Agrega documentación en `docs/COMPONENTS.md`:

```markdown
### NombreComponente.tsx

**Propósito**: [Descripción]

**Ubicación**: `src/components/[category]/NombreComponente.tsx`

**Props**:
\`\`\`typescript
interface NombreComponenteProps {
variant?: 'default' | 'alternative';
// ... otras props
}
\`\`\`

**Ejemplo de uso**:
\`\`\`typescript
<NombreComponente variant="default">
Contenido
</NombreComponente>
\`\`\`
```

## Paso 7: Crear ejemplo de uso

Crea un ejemplo en la página correspondiente:

```typescript
// app/page.tsx o donde corresponda
import { NuevoComponente } from '@/components/ui';

export default function Page() {
  return (
    <NuevoComponente variant="default">
      Ejemplo de uso
    </NuevoComponente>
  );
}
```

## Paso 8: Verificar en desarrollo

// turbo

```bash
npm run dev
```

Abre http://localhost:3000 y verifica que el componente se vea correctamente.

## Checklist Final

- [ ] Archivo creado en la carpeta correcta
- [ ] Props tipadas con TypeScript
- [ ] Estilos usando Tailwind CSS
- [ ] Variantes implementadas (si aplica)
- [ ] Accesibilidad considerada
- [ ] Agregado a barrel export
- [ ] Documentado en COMPONENTS.md
- [ ] Ejemplo de uso creado
- [ ] Verificado en navegador

---

**Notas**:

- Para componentes Client, agrega `'use client'` al inicio
- Para componentes con estado, usa hooks de React
- Mantén componentes pequeños y enfocados
