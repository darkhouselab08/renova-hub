# 🤖 Agent Workflows - Renova-Hub

Esta carpeta contiene workflows automatizados para facilitar el desarrollo del proyecto.

## 📚 Workflows Disponibles

### 1. `/component-creation` - Crear Componentes

Guía paso a paso para crear componentes siguiendo las convenciones del proyecto.

**Cuándo usar**: Al crear cualquier componente nuevo (layout, section, ui)

**Comando**: No hay comando específico, sigue el workflow manualmente

---

### 2. `/testing` - Testing y Verificación

Proceso completo de testing antes de hacer merge.

**Cuándo usar**: Antes de crear un Pull Request

**Comandos clave**:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

---

### 3. `/deploy` - Despliegue a Producción

Proceso de deploy usando Vercel.

**Cuándo usar**: Al hacer deploy a staging o producción

**Plataforma**: Vercel (automático desde GitHub)

---

## 🚀 Cómo Usar los Workflows

### Opción 1: Leer el archivo

```bash
cat .agent/workflows/[nombre-workflow].md
```

### Opción 2: Abrir en editor

```bash
code .agent/workflows/[nombre-workflow].md
```

### Opción 3: Usar con Gemini

Simplemente menciona el workflow:

- "Sigue el workflow de component-creation"
- "Ejecuta el workflow de testing"
- "Ayúdame con el workflow de deploy"

---

## 📝 Estructura de un Workflow

Cada workflow sigue este formato:

````markdown
---
description: [Descripción corta]
---

# Workflow: [Nombre]

## Fase 1: [Nombre de Fase]

### Paso 1: [Descripción]

[Instrucciones detalladas]

// turbo (opcional)

```bash
[comando que se puede auto-ejecutar]
```
````

````

**Nota sobre `// turbo`**:
- Indica que el comando es seguro para auto-ejecutar
- Gemini puede ejecutarlo automáticamente sin pedir permiso
- Solo se usa para comandos de lectura o verificación

---

## 🔄 Agregar Nuevos Workflows

### Template para nuevo workflow:

```markdown
---
description: [Descripción breve del workflow]
---

# Workflow: [Nombre del Workflow]

[Descripción detallada]

## Fase 1: [Nombre]
### Paso 1: [Acción]
[Instrucciones]

### Paso 2: [Acción]
[Instrucciones]

---

**Notas**:
- [Notas importantes]
````

### Guardar en:

```
.agent/workflows/[nombre-descriptivo].md
```

---

## 🎯 Mejores Prácticas

1. **Mantén workflows actualizados**: Si cambias un proceso, actualiza el workflow
2. **Sé específico**: Instrucciones claras y detalladas
3. **Incluye ejemplos**: Código de ejemplo cuando sea relevante
4. **Usa checklists**: Para pasos que requieren verificación
5. **Documenta comandos**: Explica qué hace cada comando

---

## 🔮 Workflows Futuros

Ideas para workflows adicionales:

- [ ] `database-migration.md` - Proceso de migraciones de DB
- [ ] `feature-branch.md` - Crear y gestionar feature branches
- [ ] `hotfix.md` - Proceso de hotfixes urgentes
- [ ] `code-review.md` - Guía para hacer code reviews
- [ ] `performance-audit.md` - Auditoría de performance
- [ ] `seo-checklist.md` - Verificación de SEO

---

**Mantenido por**: Jorge Franco  
**Última actualización**: 2026-02-05
