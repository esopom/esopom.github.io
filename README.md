# Portfolio

Portfolio profesional: Salesforce Developer & Admin (Apex, LWC, Java) con enfoque en ciberseguridad.
Sitio estático (HTML + CSS + JS, sin build), publicado con GitHub Pages.

## Editar el contenido

Todo el contenido está en **`js/data.js`**: perfil, habilidades, proyectos, experiencia, formación y certificaciones.
Busca los comentarios `TODO` y reemplaza los ejemplos. Para añadir tu CV, copia el PDF a `assets/cv.pdf` y pon `cv: "assets/cv.pdf"`.

## Ver en local

Abre `index.html` en el navegador, o levanta un servidor:

```bash
python -m http.server 8000
# http://localhost:8000
```

## Publicar en GitHub Pages

1. Crea un repo llamado `esopom.github.io` en GitHub.
2. Sube el código:
   ```bash
   git branch -M main
   git remote add origin https://github.com/esopom/esopom.github.io.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`.
4. En 1–2 minutos estará en `https://esopom.github.io/`.

## Estructura

```
index.html        estructura de la página
css/styles.css    estilos (tema claro/oscuro)
js/data.js        ← tu contenido
js/main.js        renderizado e interacciones
assets/           favicon, CV, imágenes
.nojekyll         sirve los archivos tal cual (sin Jekyll)
```
