# CoipoNorte — Lista de Precios 2026

Sitio web estático con React + Vite desplegado en GitHub Pages.
Lista de precios referencial para servicios informáticos en la Región de Tarapacá.

🔗 **Live:** https://coiponorte.github.io/coiponorte-precios

---

## 🚀 Comandos

```bash
npm run dev       # Servidor local http://localhost:5173
npm run build     # Compilar para producción → /dist
npm run deploy    # Build + subir a GitHub Pages
```

---

## 📁 Estructura

```
coiponorte-precios/
├── public/
│   └── assets/
│       ├── coiponorteSinFondo.ico   ← Favicon + logo navbar
│       ├── 1.png                    ← Imagen proyecto Vivimar
│       ├── 2.png                    ← Imagen proyecto Animales de Chile
│       └── 3.png                    ← Imagen proyecto Tech Dashboard
├── src/
│   ├── data/
│   │   └── pricing.js               ← ⭐ TODA la data del sitio
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── PricingSection.jsx / .css
│   │   ├── ProjectsSection.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                    ← Variables globales y utilidades
├── index.html
├── vite.config.js
└── package.json
```

---

## ✏️ Guía de modificaciones

### 💰 Cambiar precios o servicios

**Archivo:** `src/data/pricing.js`

Todo el contenido del sitio vive aquí. Cada sección es un objeto dentro del array `sections`:

```js
{
  id: 'computadores',        // ancla URL → #computadores
  nav: 'Computadores',       // texto que aparece en el navbar
  emoji: '💻',
  title: 'Computadores y Notebooks',
  description: 'Texto descriptivo bajo el título',
  color: 'purple',           // blue | green | purple | orange | teal | indigo | red
  items: [
    { service: 'Diagnóstico Técnico', price: '$10.000' },
    // agregar o editar filas aquí
  ],
}
```

> Para secciones especiales revisar los tipos:
> - `items` → tabla estándar (mayoría de secciones)
> - `subsections` → tabla con subtítulos (Desarrollo Web)
> - `plans` → tarjetas de plan (Soporte Empresas)
> - `surcharges` + `rates` → recargos y tarifas base (última sección)

---

### ⭐ Cambiar proyectos destacados

**Archivo:** `src/data/pricing.js` — array `featuredProjects` (al final del archivo)

```js
{
  id: 1,
  title: 'Nombre del proyecto',
  description: 'Descripción corta del proyecto.',
  tech: ['React', 'Node.js'],         // badges de tecnología
  category: 'Web',                    // texto del badge superior
  emoji: '🌍',                        // icono del badge
  image: '/assets/1.png',             // imagen en public/assets/
  link: 'https://url-del-proyecto',   // botón "Ver proyecto"
},
```

**Imágenes de proyectos:**
- Guardar en `public/assets/`
- Referenciar como `/assets/nombre.png` (sin escribir `public/`)
- Proporción recomendada: **16:9**

---

### 🖼️ Cambiar el logo / favicon

| Qué cambiar | Archivo | Qué buscar |
|---|---|---|
| Favicon pestaña | `index.html` | `<link rel="icon" ...>` |
| Logo en navbar | `src/components/Navbar.jsx` | etiqueta `<img className="navbar__logo-img">` |
| Imagen física | `public/assets/coiponorteSinFondo.ico` | reemplazar el archivo |

> Tras cambiar el favicon hacer `Ctrl + Shift + R` en el navegador para limpiar caché.

---

### 📱 Cambiar el número de WhatsApp

**Número actual:** `+56 9 8919 8933`

Buscar y reemplazar `56989198933` en:

| Archivo | Cantidad |
|---|---|
| `src/components/Navbar.jsx` | 1 vez |
| `src/components/Hero.jsx` | 1 vez |
| `src/components/Footer.jsx` | 1 vez |

> Atajo VS Code: `Ctrl + Shift + H` → buscar `56989198933` → reemplazar todo.

---

### 🎨 Cambiar colores

**Archivo:** `src/index.css` — sección `:root`

```css
:root {
  --accent:       #5865F2;   /* Morado Discord (botones, precios, links) */
  --accent-hover: #4752C4;   /* Hover del morado */
  --accent-light: #EEF0FD;   /* Fondo suave morado (badges, activo navbar) */

  --bg-primary:   #FFFFFF;   /* Fondo blanco */
  --bg-secondary: #F2F3F5;   /* Fondo gris claro (secciones alternas) */
  --bg-tertiary:  #E3E5E8;   /* Fondo gris medio (encabezados tabla) */

  --text-primary:   #2E3338; /* Texto principal */
  --text-secondary: #4F5660; /* Texto secundario */
  --text-muted:     #747F8D; /* Texto apagado */

  --success: #3BA55C;        /* Verde */
  --warning: #FAA81A;        /* Amarillo */
  --danger:  #ED4245;        /* Rojo */
}
```

---

### 📝 Cambiar textos del Hero

**Archivo:** `src/components/Hero.jsx`

| Qué | Dónde buscarlo |
|---|---|
| Badge región | `📍 Región de Tarapacá · Iquique, Chile 🇨🇱` |
| Título principal | `Lista de Precios` / `Referencial 2026` |
| Descripción | párrafo bajo el título |
| Estadísticas | componente `<StatCard>` al final del archivo |

---

### 🔗 Cambiar links del Footer

**Archivo:** `src/components/Footer.jsx`

| Link | Qué buscar |
|---|---|
| WhatsApp | `wa.me/56989198933` |
| GitHub | `github.com/CoipoNorte` |
| Nombre | `Christian Marcelo Cáceres Marín` |
| Cargo | `Ingeniero Civil en Computación e Informática` |

---

### 🗂️ Agregar una sección nueva de precios

1. Abrir `src/data/pricing.js`
2. Agregar un objeto nuevo al array `sections` siguiendo la estructura de `items`
3. La sección aparece automáticamente en el sitio y en el navbar

---

### 🌐 Cambiar la URL base (si cambias el repo)

**Archivo:** `vite.config.js`

```js
base: '/coiponorte-precios/',  // cambiar por el nombre del nuevo repo
```

**Archivo:** `package.json`

```json
"homepage": "https://coiponorte.github.io/coiponorte-precios"
```

---

## 👤 Autor

**Christian Marcelo Cáceres Marín**
Ingeniero Civil en Computación e Informática

| Marca | Área |
|---|---|
| CoipoNorte | Desarrollo de Software |
| DenguNorte | Soporte e Informática |

📍 Iquique, Región de Tarapacá — Chile 🇨🇱
