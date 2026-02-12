# 🎨 Generación Visual Premium - Renova-Hub

Este documento contiene los prompts optimizados para generar las imágenes de "Antes y Después" que coincidan con la estética actual del proyecto.

---

## 💎 Instrucciones para Crear el "Gem" en Gemini Pro

Copia y pega esto en las "Instrucciones del Sistema" al crear un nuevo Gem llamado **"Renova Visual Designer"**:

```text
Eres un experto en diseño de interiores y restauración de muebles de lujo, especializado en generar prompts para Imagen 3. Tu objetivo es crear imágenes de "Antes y Después" para el proyecto Renova-Hub.

Sigue siempre estas directrices estéticas:
1. PALETA: Lujo oscuro, maderas nobles, acabados en oro/latón, y colores profundos (Navy, Charcoal, Forest Green).
2. ESTILO: Fotografía profesional de producto, iluminación dramática pero limpia, estilo "Architectural Digest".
3. TEMAS: Debes conocer los 3 temas del proyecto:
   - 'Heritage Innovation': Mix de lo antiguo con toques modernos.
   - 'Classic Luxury': Opulencia tradicional, colores claros y dorados.
   - 'Dark Luxury': Elegancia extrema con tonos negros, carbón y metales oscuros.

Al generar prompts, asegúrate de que el "Antes" se vea desgastado pero con potencial, y el "Después" se vea como una pieza de colección en una mansión de los Hamptons.
```

---

## 🚀 Prompts Optimizados (Imagen 3 / Gemini Pro)

### 1. Tema: Heritage Innovation (El del Hero)

_Ideal para la silla principal o el mueble del Hero._

```text
Professional split-screen comparison of a furniture restoration.
Left side (Before): A worn-out, scratched mid-century modern wooden chair, dull finish, vintage fabric.
Right side (After): The same chair restored with the 'Heritage Innovation' theme. Deep charcoal wood finish, premium textured emerald velvet upholstery, polished brass details.
Background: High-end professional studio lighting, dark moody atmosphere.
Style: 8k resolution, photorealistic, commercial photography, depth of field.
```

### 2. Tema: Classic Luxury

_Para la galería de transformaciones elegantes._

```text
Professional before/after furniture restoration photo.
Left side: A dated, yellowed French provincial nightstand with broken handles.
Right side (After): Restored with 'Classic Luxury' theme. Antique white satin finish, hand-painted gold leaf accents, crystal knobs.
Setting: Elegant bright master bedroom in the Hamptons.
Style: Cinematic lighting, soft shadows, 8k, ultra-detailed textures.
```

### 3. Tema: Dark Luxury

_Para piezas de alto impacto y elegancia._

```text
Split view comparison of a large vintage executive desk.
Left side: Water-damaged oak desk, peeling varnish, old stains.
Right side (After): 'Dark Luxury' transformation. Matte black ebony stain, restored leather top insert with gold embossing, dark chrome hardware.
Background: Private luxury library office, warm desk lamp lighting.
Style: Sophisticated, premium quality, sharp focus, Imagen 3 style.
```

---

## 🎬 Nueva Sección: Video Cinemático (Veo 3.1)

_Copia este prompt si vas a usar la opción de video en Gemini:_

```text
Cinematic 5-second product showcase for Renova-Hub.
A highly detailed 360-degree slow rotation of a restored lounge chair (Heritage Innovation theme).
The chair features deep charcoal wood and shimmering emerald velvet upholstery.
Dramatic studio lighting highlighting the texture of the fabric and the polished brass legs.
High contrast, dark luxury background, 4k, 24fps, smooth camera movement.
```

---

## 🛠️ Cómo subir los archivos al proyecto (Workflow para Jorge)

Una vez que descargues tus videos o imágenes de Gemini, sigue estos pasos para que yo pueda usarlos:

### 1. Ubicación de los archivos

Mueve los archivos desde tu carpeta de `Descargas` a estas carpetas del proyecto:

- **Videos**: `/public/videos/hero/`
- **Imágenes Hero**: `/public/images/hero/`
- **Imágenes Galería**: `/public/images/gallery/`

### 2. Formatos recomendados

- **Video**: `.mp4`
- **Imágenes**: `.png` (para sliders) o `.jpg` (para fondos)

### 3. Notificación

Cuando el archivo esté en la carpeta, dime:

> _"Ya subí el archivo `mi-silla-lujo.mp4` a la carpeta de videos, actualiza el componente por favor."_

Y yo me encargaré de modificar el código de `Hero.tsx` o `Gallery.tsx` para que se vea en vivo.

---

## 🛠️ Cómo usar estos Prompts

1. **Gemini Pro**: Pégale el prompt y pídele _"Mejora este prompt para Imagen 3 respetando la estética de Renova-Hub"_.
2. **Imagen 3**: Genera la imagen y cárgala en `public/images/hero/` o `gallery/`.

---

## 📋 Lista de Imágenes a Reemplazar

- [ ] `chair-before.png` / `chair-after.png` (Hero - Heritage Innovation)
- [ ] `dresser-before.png` / `dresser-after.png` (Gallery - Classic Luxury)
- [ ] `desk-before.png` / `desk-after.png` (Gallery - Dark Luxury)

---

**Última actualización:** 2026-02-11 (Post Fase 1.5)  
**Modelos:** Optimizado para Gemini 2.0 / Imagen 3
