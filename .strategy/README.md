# 📁 .strategy/ - Documentos Estratégicos

**Propósito:** Documentación de alto nivel sobre visión, roadmap y objetivos del proyecto

---

## 📋 Contenido

### Archivos Principales

1. **ROADMAP.md** ⭐ **ARCHIVO MAESTRO**
   - Visión completa del proyecto
   - Todas las fases (1, 1.5, 2, 3)
   - Herramientas a integrar
   - Fechas y checkpoints
   - **Leer:** Cuando olvides el objetivo o qué sigue

2. **MAPA_MENTAL.md** 🧠 **VISUALIZACIÓN**
   - Diagramas Mermaid de todas las fases
   - Mapas de herramientas y decisiones
   - **Leer:** Cuando necesites ver el panorama completo

3. **PROTOCOLO.md** 📍 **GUÍA RÁPIDA**
   - Protocolo de 3 pasos para no perderte
   - Frases mágicas para el agente
   - Recordatorios semanales
   - **Leer:** Cuando no sepas dónde buscar

4. **next_step_recommendation.md** 🎯 **PRÓXIMOS PASOS**
   - Recomendación de Fase 1.5 (Validación)
   - Plan de acción detallado
   - Criterios Go/No-Go
   - **Leer:** Para saber qué hacer ahora

---

## 🎯 Cuándo Consultar Esta Carpeta

### Al inicio de cada semana:

👉 Lee `ROADMAP.md` → "ESTADO ACTUAL"

### Cuando te sientas perdido:

👉 Lee `PROTOCOLO.md` → Protocolo de 3 pasos

### Cuando necesites visualización:

👉 Lee `MAPA_MENTAL.md`

### Cuando necesites decidir qué hacer:

👉 Lee `next_step_recommendation.md`

---

## 🗂️ Separación de Responsabilidades

### `.strategy/` (Esta carpeta)

- Visión y objetivos a largo plazo
- Roadmap de fases
- Decisiones estratégicas
- Planes de validación

### `.agent/`

- Workflows técnicos
- Perfil del usuario
- Contexto del proyecto
- Prompts y herramientas

### `docs/`

- Documentación técnica
- Componentes
- Guías de desarrollo

### Raíz del proyecto

- `ARCHITECTURE.md` - Arquitectura técnica
- `OVERVIEW.md` - Overview general

---

## 🚀 Estructura Futura (Fase 2)

Cuando iniciemos Fase 2 (Backend + API), la estructura será:

```
renova-hub/
├── .strategy/           ← Estrategia global (esta carpeta)
├── frontend/            ← Frontend Next.js
├── backend/             ← Backend Python/FastAPI
└── shared/              ← Código compartido
```

Cada subcarpeta tendrá su propia documentación técnica, pero `.strategy/` permanecerá como fuente única de verdad para objetivos y roadmap.

---

## 📝 Protocolo de Actualización

### Actualizar `ROADMAP.md`:

- Al completar una fase
- Al cambiar de fase
- Al agregar nueva herramienta
- Cada semana (revisar fechas)

### Actualizar `MAPA_MENTAL.md`:

- Cuando cambien flujos importantes
- Al agregar nuevas integraciones

### Actualizar `PROTOCOLO.md`:

- Cuando cambien procesos de trabajo
- Al agregar nuevas frases mágicas

---

**Última actualización:** 2026-02-10  
**Responsable:** Jorge Franco  
**Asistente:** Gemini (Antigravity)
