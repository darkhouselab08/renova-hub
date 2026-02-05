---
description: Proceso de testing y verificación antes de merge
---

# Workflow: Testing y Verificación

Este workflow asegura que el código esté listo para producción.

## Fase 1: Testing Local

### Paso 1: Verificar que el servidor de desarrollo funciona

// turbo

```bash
npm run dev
```

✅ El servidor debe iniciar sin errores en http://localhost:3000

### Paso 2: Verificar build de producción

```bash
npm run build
```

✅ El build debe completarse sin errores ni warnings críticos

### Paso 3: Ejecutar linter

// turbo

```bash
npm run lint
```

✅ No debe haber errores de ESLint

### Paso 4: Verificar TypeScript

// turbo

```bash
npx tsc --noEmit
```

✅ No debe haber errores de tipos

## Fase 2: Testing Manual

### Checklist de Funcionalidad

- [ ] **Navegación**: Todos los links funcionan
- [ ] **Responsive**: Se ve bien en mobile, tablet y desktop
- [ ] **Imágenes**: Todas las imágenes cargan correctamente
- [ ] **Formularios**: Validación funciona (si aplica)
- [ ] **Interacciones**: Botones y elementos interactivos responden
- [ ] **Performance**: Página carga rápido (< 3 segundos)

### Testing en Diferentes Navegadores

- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (si estás en Mac)

### Testing Responsive

Verifica en estos breakpoints:

- [ ] Mobile (375px - iPhone SE)
- [ ] Tablet (768px - iPad)
- [ ] Desktop (1280px - Laptop)
- [ ] Large Desktop (1920px)

## Fase 3: Verificación de Código

### Checklist de Calidad

- [ ] **Código limpio**: Sin console.logs ni código comentado
- [ ] **Nombres descriptivos**: Variables y funciones con nombres claros
- [ ] **Componentes pequeños**: Ningún componente > 200 líneas
- [ ] **Props tipadas**: Todas las props tienen TypeScript types
- [ ] **Imports organizados**: Externos primero, internos después
- [ ] **Comentarios útiles**: Solo donde sea necesario

### Verificar Convenciones

- [ ] Componentes en PascalCase
- [ ] Funciones en camelCase
- [ ] Archivos con extensión `.tsx` para JSX
- [ ] Tailwind classes ordenadas correctamente

## Fase 4: Verificación Git

### Paso 1: Verificar cambios

// turbo

```bash
git status
```

✅ Revisa que solo estén los archivos que quieres commitear

### Paso 2: Ver diff de cambios

```bash
git diff
```

✅ Revisa línea por línea los cambios

### Paso 3: Agregar archivos

```bash
git add .
```

### Paso 4: Commit con mensaje descriptivo

```bash
git commit -m "feat: [descripción clara del cambio]"
```

**Convenciones de commits**:

- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de bug
- `docs:` - Cambios en documentación
- `style:` - Cambios de estilo (CSS)
- `refactor:` - Refactorización de código
- `test:` - Agregar o modificar tests
- `chore:` - Tareas de mantenimiento

### Paso 5: Push a rama

```bash
git push origin [nombre-de-tu-rama]
```

## Fase 5: Pull Request

### Checklist de PR

- [ ] **Título descriptivo**: Explica qué hace el PR
- [ ] **Descripción completa**:
  - Qué cambios se hicieron
  - Por qué se hicieron
  - Cómo probar
- [ ] **Screenshots**: Si hay cambios visuales
- [ ] **Testing realizado**: Lista de tests ejecutados
- [ ] **Breaking changes**: Documentar si los hay

### Template de PR

```markdown
## Descripción

[Descripción clara de los cambios]

## Tipo de cambio

- [ ] Nueva funcionalidad
- [ ] Corrección de bug
- [ ] Refactorización
- [ ] Documentación

## ¿Cómo probar?

1. Paso 1
2. Paso 2
3. Paso 3

## Screenshots

[Si aplica]

## Checklist

- [ ] Build exitoso
- [ ] Linter sin errores
- [ ] TypeScript sin errores
- [ ] Testing manual completado
- [ ] Responsive verificado
- [ ] Documentación actualizada
```

## Fase 6: Después del Merge

### Paso 1: Actualizar rama local

```bash
git checkout develop
git pull origin develop
```

### Paso 2: Eliminar rama feature

```bash
git branch -d feature/nombre-de-rama
git push origin --delete feature/nombre-de-rama
```

### Paso 3: Verificar en staging/producción

- [ ] Cambios desplegados correctamente
- [ ] Funcionalidad verificada en ambiente de producción
- [ ] No hay errores en consola

---

## Comandos Rápidos

```bash
# Testing completo
npm run lint && npx tsc --noEmit && npm run build

# Ver estado de git
git status && git diff

# Commit y push rápido
git add . && git commit -m "mensaje" && git push
```

---

**Notas**:

- Nunca hacer push directo a `main`
- Siempre crear Pull Request para revisión
- Mantener commits pequeños y atómicos
- Hacer testing antes de cada commit
