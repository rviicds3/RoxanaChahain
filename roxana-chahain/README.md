# Roxana Chahaín · Academia Profesional de Belleza

Sitio web estático (HTML + CSS + JavaScript, sin dependencias ni build).

## Cómo abrirlo

- Doble clic en `index.html` (funciona directo desde el disco).
- Para publicarlo, subir la carpeta completa a cualquier hosting estático (Netlify, Vercel, GitHub Pages, Hostinger). Todas las rutas son relativas.

## Estructura

```
index.html
assets/css/styles.css
assets/js/data.js      ← toda la información de los cursos
assets/js/app.js       ← buscador, filtros, modal, visor, menú
images/cursos/         ← las 31 imágenes originales de los cursos
images/marca/          ← logo, política de reservas, cuentas de pago
```

Para editar un precio, un horario o agregar un curso, solo se toca `assets/js/data.js`.

## Origen de la información

Toda la información fue transcrita de las imágenes provistas. No se agregó ningún dato inventado.

### 15 cursos (31 imágenes)

| Curso | Imagen principal | Imágenes adicionales |
|---|---|---|
| Curso de Estilista Profesional | `estilista-profesional.jpeg` | horarios |
| Curso de Peluquería | `peluqueria.jpeg` | horarios |
| Curso de Corte Femenino | `corte-femenino.jpeg` | horarios |
| Curso de Peinados | `peinados.jpeg` | horarios |
| Curso de Tratamientos Capilares | `tratamientos-capilares.jpeg` | horarios |
| Curso de Colorimetría | `colorimetria.jpeg` | horarios |
| Curso de Máster en Color | `master-en-color.jpeg` | horarios |
| Rubio soñado y Morena Iluminada | `rubio-morena-iluminada.jpeg` | contenido |
| Curso de Manicura y Pedicura | `manicura-pedicura.jpeg` | horarios |
| Curso de Soft Gel | `soft-gel.jpeg` | horarios |
| Curso de Kapping y Esculpidas | `kapping-esculpidas.jpeg` | horarios |
| Experta en Pestañas y Cejas | `experta-pestanas-cejas.jpeg` | contenido + horarios |
| Extensiones de Pestañas | `extensiones-pestanas.jpeg` | contenido |
| Lifting de Pestañas | `lifting-pestanas.jpeg` | contenido |
| Diseño de Cejas con Henna | `cejas-henna.jpeg` | contenido |

Las imágenes de "horarios" y "contenido" se asociaron a cada curso por la marca de agua vertical y por la fotografía repetida en ambas piezas, para que ningún dato quede cruzado entre cursos.

### Otras imágenes

- `images/marca/politica-de-reservas.png` → sección Política de reservas.
- `images/marca/cuentas-de-pago.jpeg` → sección Formas de pago.
- `images/marca/logo-color.png`, `logo-blanco.png`, `isotipo*.png` → extraídos de `LOGO 3.pdf`.

## Datos que faltan

- **Facebook**: no se proporcionó ninguna cuenta ni enlace, por lo que no se incluyó en la página.
- **Horarios de "Rubio soñado y Morena Iluminada"**: no había imagen de horarios para ese curso. En la sección Horarios figura como "a confirmar" con un botón de WhatsApp.
- **Instagram**: el enlace provisto es el de una publicación, no el del perfil. Si se quiere que abra el perfil, reemplazar `ACADEMIA.instagram` en `assets/js/data.js`.
- **Ubicación**: se usaron las coordenadas provistas (25°19'53.4"S 57°30'15.0"W → -25.331500, -57.504167) para armar el enlace a Google Maps. No hay dirección de calle.

## Correcciones de tipeo

En el contenido de "Diseño de Cejas con Henna" la imagen dice "Depilación cin hilo"; se escribió "Depilación con hilo". En "Experta en Pestañas y Cejas" la imagen dice "Depilacion hindu"; se escribió "Depilación hindú". Ningún dato de precio, horario o duración fue modificado.
