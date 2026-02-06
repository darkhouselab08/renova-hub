# Guía de Workflows y Contexto del Agente

Este directorio contiene workflows automatizados y contexto para que Gemini (tu Tech Lead Agent) trabaje de forma más eficiente.

---

## 📁 Archivos en este Directorio

### `CONTEXT.md` ⭐ **NUEVO**

**Para ti, Jorge**: Aquí pegas información de otros chats, investigaciones, videos de YouTube, artículos, etc.

**Casos de uso**:

- 📝 Conversaciones de otros chats con Gemini que quieras que recuerde
- 🎥 Notas de videos de YouTube con novedades (CSS, React, Next.js, etc.)
- 🔬 Investigaciones con NotebookLM
- 💡 Ideas que encuentres en artículos o documentación
- 🛠️ Herramientas nuevas que quieras explorar

**Cómo funciona**:

1. Abres `CONTEXT.md`
2. Pegas la información en la sección correspondiente
3. La próxima vez que hables con Gemini, le dices "lee CONTEXT.md"
4. Gemini aplicará esa información al proyecto

---

### `workflows/`

Contiene workflows automatizados para tareas comunes:

- **`component-creation.md`**: Crear nuevos componentes
- **`testing.md`**: Testing y verificación
- **`deploy.md`**: Deployment a producción

**Uso**: Dile a Gemini "usa el workflow de [nombre]" o usa `/component-creation`

---

## 🚀 Ejemplos de Uso

### Ejemplo 1: Video de YouTube

```markdown
Encontraste un video sobre CSS Container Queries:

1. Abre CONTEXT.md
2. En la sección "Videos de YouTube - Novedades"
3. Pega:
   - Título del video
   - Link
   - Notas clave que quieras aplicar
4. Dile a Gemini: "Lee CONTEXT.md y aplica CSS Container Queries al Hero"
```

### Ejemplo 2: Investigación con NotebookLM

```markdown
Hiciste una investigación sobre mejores prácticas de e-commerce:

1. Abre CONTEXT.md
2. En "Investigaciones Pendientes > NotebookLM"
3. Pega el resumen generado por NotebookLM
4. Dile a Gemini: "Lee CONTEXT.md y actualiza ARCHITECTURE.md con las mejores prácticas de e-commerce"
```

### Ejemplo 3: Chat de Otro Día

```markdown
Tuviste una conversación con Gemini sobre animaciones:

1. Abre CONTEXT.md
2. En "Ideas de Otros Chats"
3. Pega la conversación relevante
4. Dile a Gemini: "Lee CONTEXT.md y aplica las animaciones que discutimos antes"
```

---

## 💡 Tips

- **No borres nada** de CONTEXT.md, solo agrega
- **Organiza por fechas** para mantener historial
- **Sé específico** en lo que quieres aplicar
- **Usa secciones** para mantener orden

---

## 🤖 Para Gemini

Cuando Jorge te pida leer CONTEXT.md:

1. Lee TODO el archivo completo
2. Identifica qué es nuevo desde la última vez
3. Pregunta qué quiere aplicar específicamente
4. Sugiere implementaciones concretas
5. Actualiza documentación si es necesario

---

**Última actualización**: 2026-02-05
