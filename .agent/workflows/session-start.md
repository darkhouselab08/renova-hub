---
description: Protocolo de inicio de jornada o sesión de trabajo ("ingeniero, iniciamos")
---

# 🚀 Protocolo de Inicio de Sesión

Este workflow debe ejecutarse cada vez que el usuario inicie una conversación con la frase **"ingeniero, iniciamos"**.

## Pasos Obligatorios para el Agente

1.  **Sintonía de Contexto**:
    - Leer el archivo `ARCHITECTURE.md` para refrescar los principios técnicos.
    - Leer `task.md` para conocer el estado actual de las tareas pendientes.
    - Leer `.agent/CONTEXT.md` (si existe) para captar nueva información externa.

2.  **Validación de Branch**:
    - Ejecutar `git branch --show-current`.
    - **REGLA DE ORO**: Si la rama es `main`, cambiar inmediatamente a `develop` o preguntar si se debe crear una nueva `feature/branch`.
    - NUNCA empezar a trabajar directamente en `main`.

3.  **Confirmación de Inicio**:
    - Responder al usuario: _"Ingeniero, protocolo de inicio completado. Estamos en la rama [nombre-rama] y el siguiente paso es [tarea-pendiente]. ¿Procedo?"_

4.  **Actualización de Task View**:
    - Activar el `task_boundary` con la tarea correspondiente para que el usuario pueda seguir el progreso visualmente.
