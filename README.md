# Servar Fútbol Club — Web Oficial

Página web informativa del club: plantilla de jugadores, calendario de
partidos, último resultado y equipación oficial.

## 📁 Estructura del proyecto

```
servar-futbol-club/
├── index.html          → Estructura de la página (no se edita normalmente)
├── css/style.css        → Diseño y colores (no se edita normalmente)
├── js/
│   ├── datos.js          ⭐ EL ÚNICO ARCHIVO QUE EDITAS CADA TEMPORADA
│   └── main.js            → Lógica de la página (no se edita normalmente)
└── img/
    ├── logo/escudo.png     → Escudo del club
    ├── jugadores/           → Fotos de los jugadores
    └── equipacion/          → Fotos de las equipaciones
```

## ✏️ Cómo actualizar el contenido

**Todo se edita desde un único archivo: `js/datos.js`.**
Ábrelo con cualquier editor de texto (incluso el editor de GitHub en la
web, sin instalar nada) — tiene comentarios explicando cada campo.

Los 3 casos más comunes:

1. **Actualizar un resultado** → busca el partido en `calendario` y
   cambia `resultado: null` por `resultado: "2 - 1"`.
2. **Añadir un jugador** → copia un bloque `{ ... }` dentro de
   `jugadores` y cambia los datos.
3. **Añadir la foto de un jugador** → guárdala en `img/jugadores/`
   (ej: `10-juan-perez.jpg`) y escribe esa ruta en el campo `foto`.

No hace falta tocar ningún otro archivo para estas actualizaciones.

## 💻 Cómo ver los cambios en tu computador antes de subirlos

No puedes abrir `index.html` haciendo doble clic directamente (el
navegador bloquea algunas funciones por seguridad). Necesitas un
servidor local muy simple:

**Con Python (viene instalado en Mac):**
1. Abre Terminal dentro de la carpeta del proyecto.
2. Ejecuta: `python3 -m http.server 8000`
3. Abre en tu navegador: `http://localhost:8000`

**Alternativa sin terminal:** instala la extensión gratuita
**"Live Server"** en Visual Studio Code, y haz clic derecho sobre
`index.html` → "Open with Live Server".

## 🚀 Cómo publicar (GitHub + Netlify)

1. Crea un repositorio nuevo en GitHub (igual que hiciste con el
   proyecto de CYP) y sube todos estos archivos.
2. Entra a [netlify.com](https://netlify.com), conecta ese repositorio.
3. Deja la configuración de build vacía (no hace falta build command,
   es HTML/CSS/JS puro) y el "publish directory" como `/` (la raíz).
4. Cada vez que subas un cambio a GitHub (editar `datos.js`, añadir
   fotos), Netlify republica la página sola en segundos.

## ✅ Qué incluye esta versión

- Diseño responsive (móvil, tablet, escritorio)
- Carrusel de jugadores con tarjeta "flip" (clic para ver ficha completa)
- Calendario que se auto-posiciona en el próximo partido según la fecha
- Resultado destacado calculado automáticamente (sin duplicar datos)
- Menú móvil con animación e ícono hamburguesa/cierre
- Accesible por teclado (navegación con Tab + Enter) y con foco visible
- Contraste de color verificado (estándar WCAG AA)

## 📌 Pendiente para ti

- Reemplazar las fotos de ejemplo en `img/jugadores/` (equipación ya está lista ✅)
- Rellenar `js/datos.js` con la plantilla real (el calendario ya está cargado)
- Añadir tus redes sociales reales en los enlaces del footer
  (`index.html`, busca `footer__social`)
