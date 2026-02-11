# 🔒 Protocolo de Git - Verificación Completa

**Propósito:** Asegurar que TODOS los cambios estén guardados en GitHub antes de confirmar

**Última actualización:** 2026-02-10  
**Razón:** Falló verificación de commits - necesita protocolo más robusto

---

## ⚠️ Problema Identificado (2026-02-10)

**Qué pasó:**

- Comandos git reportaron "success" pero sin output real
- Archivos quedaron sin commit (.strategy/, componentes modificados)
- Usuario tuvo que hacer commits manualmente

**Causa raíz:**

- Timeouts muy cortos en comandos git
- No verificación visual del output
- Confianza en "success" sin ver contenido real

---

## ✅ Protocolo Mejorado (5 Pasos)

### Paso 1: Verificar Estado Actual

```bash
git status --porcelain
```

**Timeout:** 3000ms  
**Verificar:** Output debe mostrar archivos modificados/nuevos  
**Si vacío:** Working tree limpio ✅

### Paso 2: Ver Cambios Detallados

```bash
git status -sb
```

**Timeout:** 3000ms  
**Verificar:**

- Rama actual
- Commits ahead/behind de origin
- Archivos staged/unstaged

### Paso 3: Agregar Todos los Archivos

```bash
git add -A
```

**Timeout:** 2000ms  
**Después ejecutar:** `git status` para confirmar staging

### Paso 4: Ver Archivos Staged

```bash
git diff --cached --name-status
```

**Timeout:** 3000ms  
**Verificar:** Lista de archivos que se van a commitear  
**Importante:** Leer el output completo y confirmar

### Paso 5: Commit y Push

```bash
# Commit
git commit -m "mensaje descriptivo"

# Verificar commit se creó
git log --oneline -1

# Push
git push origin develop

# Verificar sincronización
git status -sb
```

**Timeout:** 5000ms para push  
**Verificar:**

- Commit hash creado
- Push exitoso
- Branch shows "up to date with origin/develop"

---

## 📋 Checklist de Verificación

Antes de confirmar que "TODO está guardado", verificar:

- [ ] `git status --porcelain` está vacío
- [ ] `git status -sb` muestra "up to date with origin/develop"
- [ ] `git log --oneline -1` muestra el último commit esperado
- [ ] No hay archivos en rojo en el IDE
- [ ] No hay archivos "Untracked" en el explorador

---

## 🚨 Señales de Alerta

**Si ves esto, NO confirmar que está guardado:**

- ❌ Output vacío en comandos git
- ❌ "success" sin contenido real
- ❌ Archivos en rojo en captura de pantalla
- ❌ Usuario dice "falta algo"

**Acción correcta:**

1. Pedir captura de pantalla del IDE
2. Ejecutar comandos con timeouts más largos
3. Leer output completo antes de confirmar

---

## 💡 Mejoras Implementadas

### Antes (Problemático):

```bash
git status
# Timeout: 1500ms
# Problema: Output vacío, no se ve contenido real
```

### Ahora (Robusto):

```bash
git status --porcelain
# Timeout: 3000ms
# Verificar: Leer output completo
# Si vacío: Confirmar visualmente con usuario
```

---

## 🔧 Comandos de Emergencia

Si el usuario reporta que falta algo:

### 1. Diagnóstico Completo

```bash
# Ver todo sin filtros
git status

# Ver archivos sin seguimiento
git ls-files --others --exclude-standard

# Ver diferencias no staged
git diff --name-only

# Ver diferencias staged
git diff --cached --name-only
```

### 2. Pedir Captura de Pantalla

"¿Puedes compartir una captura del IDE mostrando el explorador de archivos y la terminal de git?"

### 3. Verificar Remoto

```bash
# Fetch último estado
git fetch origin develop

# Comparar local vs remoto
git diff develop origin/develop --name-only
```

---

## 📊 Ejemplo de Uso Correcto

```bash
# Paso 1: Verificar estado
$ git status --porcelain
M  src/components/sections/ContactForm.tsx
M  src/components/sections/Process.tsx
?? .strategy/

# Paso 2: Ver detalles
$ git status -sb
## develop...origin/develop [ahead 0, behind 0]
M  src/components/sections/ContactForm.tsx
M  src/components/sections/Process.tsx
?? .strategy/

# Paso 3: Agregar
$ git add -A

# Paso 4: Verificar staged
$ git diff --cached --name-status
M       src/components/sections/ContactForm.tsx
M       src/components/sections/Process.tsx
A       .strategy/ROADMAP.md
A       .strategy/MAPA_MENTAL.md
# ... más archivos

# Paso 5: Commit y push
$ git commit -m "feat: complete session changes"
[develop abc123] feat: complete session changes
 9 files changed, 500 insertions(+)

$ git push origin develop
Counting objects: 15, done.
Writing objects: 100% (15/15), done.
To github.com:user/repo.git
   def456..abc123  develop -> develop

# Verificación final
$ git status -sb
## develop...origin/develop
# (vacío = limpio ✅)
```

---

## 🎯 Compromiso

**De ahora en adelante:**

1. **Siempre usar timeouts largos** (3000-5000ms)
2. **Leer output completo** antes de confirmar
3. **Pedir captura de pantalla** si hay duda
4. **Verificar 3 veces** antes de decir "todo guardado"
5. **Usar checklist completo** cada vez

---

## 📝 Notas para el Agente

**Cuando el usuario diga "guarda en GitHub":**

1. NO asumir que un "success" significa éxito real
2. Ejecutar TODOS los pasos del protocolo
3. Leer y verificar cada output
4. Si hay duda, pedir confirmación visual
5. Solo confirmar cuando checklist esté 100% completo

**Frases para usar:**

- ✅ "Verificando estado de git con protocolo completo..."
- ✅ "Veo X archivos pendientes, procediendo a guardar..."
- ✅ "Confirmado: working tree limpio y sincronizado con origin/develop"
- ❌ "Todo está guardado" (sin verificación completa)

---

**Última revisión:** 2026-02-10  
**Próxima revisión:** Después de cada sesión de commits  
**Responsable:** Gemini (Antigravity Agent)
