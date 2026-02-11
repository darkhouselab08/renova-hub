# 🏗️ Estructura Futura - Fase 2

**Fecha de implementación:** Fase 2 (estimado 2026-03-08)  
**Estado:** Planificado, NO ejecutar hasta Fase 2

---

## 🎯 Objetivo

Separar frontend y backend en carpetas independientes para:

- Mejor organización del código
- Facilitar trabajo de múltiples agentes
- Escalar el proyecto de forma sostenible
- Preparar para Modo Agent Manager

---

## 📁 Estructura Propuesta

```
renova-hub/
│
├── .strategy/                    ← Estrategia global (ya existe)
│   ├── ROADMAP.md
│   ├── MAPA_MENTAL.md
│   ├── PROTOCOLO.md
│   └── README.md
│
├── frontend/                     ← NUEVO (Fase 2)
│   ├── src/
│   │   ├── app/                  ← Next.js App Router
│   │   ├── components/
│   │   ├── lib/
│   │   └── types/
│   ├── public/
│   ├── .agent/
│   │   ├── frontend_architecture.md
│   │   └── component_guidelines.md
│   ├── docs/
│   │   └── COMPONENTS.md
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.js
│
├── backend/                      ← NUEVO (Fase 2)
│   ├── app/
│   │   ├── main.py               ← FastAPI entry point
│   │   ├── api/
│   │   │   ├── routes/
│   │   │   └── dependencies.py
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   └── security.py
│   │   ├── services/
│   │   │   ├── genie3_service.py
│   │   │   └── imagen3_service.py
│   │   └── models/
│   ├── tests/
│   ├── .agent/
│   │   ├── backend_architecture.md
│   │   ├── api_documentation.md
│   │   └── database_schema.md
│   ├── docs/
│   │   └── API.md
│   ├── requirements.txt
│   └── pyproject.toml
│
├── shared/                       ← NUEVO (Fase 2)
│   ├── types/                    ← TypeScript types compartidos
│   │   ├── simulation.ts
│   │   └── api.ts
│   └── constants/
│       └── config.ts
│
├── .agent/                       ← Documentos técnicos generales
│   ├── workflows/
│   ├── jorge_profile.md
│   └── CONTEXT.md
│
├── docs/                         ← Documentación general
│   └── INDEX.md
│
├── ARCHITECTURE.md               ← Arquitectura general
├── OVERVIEW.md                   ← Overview del proyecto
└── README.md                     ← README principal
```

---

## 🔄 Plan de Migración (Fase 2)

### Paso 1: Crear Estructura

```bash
mkdir -p frontend backend shared
```

### Paso 2: Mover Frontend

```bash
# Mover contenido actual a frontend/
mv src frontend/
mv public frontend/
mv package.json frontend/
mv next.config.js frontend/
# ... otros archivos de Next.js
```

### Paso 3: Setup Backend

```bash
# Crear estructura Python/FastAPI
cd backend
python -m venv venv
source venv/bin/activate
pip install fastapi uvicorn
```

### Paso 4: Actualizar Referencias

- Actualizar imports en código
- Actualizar paths en configuración
- Actualizar scripts de deploy

---

## 🎯 Responsabilidades por Carpeta

### `frontend/`

**Responsable:** Agent Frontend (Fase 2)

- UI/UX components
- Next.js routing
- Client-side logic
- Tailwind styling

### `backend/`

**Responsable:** Agent Backend (Fase 2)

- API endpoints
- Genie 3 integration
- Database operations
- Business logic

### `shared/`

**Responsable:** Ambos agentes

- TypeScript types
- Constantes compartidas
- Utilidades comunes

### `.strategy/`

**Responsable:** Jorge (Product Owner)

- Visión del producto
- Roadmap
- Decisiones estratégicas

---

## 🚨 IMPORTANTE

**NO ejecutar esta migración hasta:**

1. Completar Fase 1.5 (Validación)
2. Decisión Go para Fase 2
3. Aprobación explícita de Jorge

**Razón:** Evitar complejidad innecesaria antes de validar el producto

---

## 📋 Checklist de Migración (Para Fase 2)

- [ ] Crear carpetas frontend/, backend/, shared/
- [ ] Mover archivos de Next.js a frontend/
- [ ] Setup Python/FastAPI en backend/
- [ ] Crear documentación específica (.agent/ en cada carpeta)
- [ ] Actualizar imports y paths
- [ ] Actualizar scripts de deploy
- [ ] Testing completo post-migración
- [ ] Actualizar ROADMAP.md con nueva estructura

---

**Fecha de creación:** 2026-02-10  
**Fecha estimada de ejecución:** 2026-03-08 (Fase 2)  
**Estado:** Planificado, pendiente de aprobación
