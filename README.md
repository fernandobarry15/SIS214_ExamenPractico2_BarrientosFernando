# Hoja de Vida Interactiva — Fernando Barrientos

## 1. Descripción del proyecto

Este proyecto consiste en una hoja de vida y portafolio profesional interactivo desarrollado como aplicación web. Su objetivo es presentar información académica y profesional mediante una interfaz accesible, moderna y adaptable a distintos dispositivos.

La página incluye información personal, perfil profesional, formación académica, experiencia laboral, habilidades técnicas, certificaciones, idiomas, objetivos profesionales, repositorios de GitHub y un formulario de contacto.

## 2. Objetivos

- Presentar información académica y profesional de forma organizada.
- Implementar una interfaz adaptable mediante CSS3, Flexbox y CSS Grid.
- Incorporar funcionalidades interactivas con JavaScript ES6+.
- Aplicar buenas prácticas de HTML5 semántico y accesibilidad web.
- Consultar información de repositorios mediante una API REST pública.
- Gestionar el código fuente con Git y GitHub y publicar el sitio mediante GitHub Pages.

## 3. Tecnologías utilizadas

- **HTML5:** estructura semántica y contenido de la página.
- **CSS3:** estilos, variables CSS, diseño adaptable, Flexbox y CSS Grid.
- **JavaScript ES6+:** eventos, manipulación del DOM, módulos y funciones asíncronas.
- **Fetch API:** consulta de repositorios públicos de GitHub.
- **LocalStorage:** persistencia de la preferencia del tema.
- **Bootstrap 5.3.3:** biblioteca CSS y JavaScript cargada mediante CDN.
- **Font Awesome 6.7.2:** iconografía.
- **AOS 2.3.1:** animaciones al desplazarse por la página.
- **Git y GitHub:** control de versiones y alojamiento del código.
- **GitHub Pages:** plataforma prevista para la publicación del sitio.

## 4. Estructura del proyecto

```text
hoja-vida/
├── index.html
├── README.md
├── assets/
│   └── images/
│       └── yo.jpeg
├── css/
│   ├── styles.css
│   ├── variables.css
│   ├── base.css
│   ├── encabezado.css
│   ├── navegacion.css
│   ├── perfil-extra.css
│   ├── secciones.css
│   ├── tarjetas.css
│   ├── buscador-github.css
│   ├── tablas.css
│   ├── formulario.css
│   ├── pie-accesibilidad.css
│   ├── responsive.css
│   └── movimiento-reducido.css
└── js/
    ├── main.js
    ├── Tema.js
    ├── Menu.js
    ├── BuscadorHabilidades.js
    ├── Formulario.js
    ├── GitHub.js
    └── PiePagina.js
```

El archivo `index.html` contiene la estructura principal. El archivo `css/styles.css` importa las hojas de estilo, mientras que `js/main.js` importa e inicializa los módulos JavaScript.

## 5. Funcionalidades implementadas

### 5.1. Modo claro y modo oscuro

El módulo `Tema.js` permite alternar entre los temas claro y oscuro. La preferencia se guarda en `localStorage` utilizando serialización JSON para recuperarla cuando se vuelve a abrir la página.

### 5.2. Menú de navegación responsivo

El módulo `Menu.js` controla la apertura y el cierre del menú de navegación. También actualiza el atributo `aria-expanded` del botón para comunicar su estado a las tecnologías de asistencia.

### 5.3. Buscador de habilidades

El módulo `BuscadorHabilidades.js` filtra las habilidades según el texto introducido por el usuario. Utiliza los métodos `.filter()` y `.map()` para procesar los resultados sin modificar la colección original de tarjetas.

### 5.4. Formulario de contacto

El módulo `Formulario.js` valida los campos durante la entrada de datos y gestiona el evento `submit` con `preventDefault()`, evitando la recarga de la página.

El formulario muestra mensajes de validación y confirmación. Actualmente, es una demostración de validación del lado del cliente y no envía correos electrónicos ni almacena mensajes en un servidor.

### 5.5. Integración con la API de GitHub

El módulo `GitHub.js` utiliza Fetch API y `async/await` para consultar repositorios públicos del usuario configurado en el código.

La petición contempla los estados de carga, éxito y error, además del tratamiento de respuestas HTTP no satisfactorias.

### 5.6. Funciones adicionales

El módulo `PiePagina.js` incorpora funciones complementarias como imprimir o guardar la hoja de vida en PDF desde el navegador, mostrar el progreso de lectura y facilitar el regreso al inicio de la página.

También se inicializan animaciones de desplazamiento mediante AOS.

## 6. Diseño adaptable y accesibilidad

El proyecto utiliza Flexbox para organizar elementos en una dimensión y CSS Grid para distribuir tarjetas y colecciones de contenido.

Los estilos se organizan mediante variables CSS centralizadas, un reset universal y hojas de estilo modulares.

Se contemplan tres rangos de visualización:

- **Móvil:** menos de 768 píxeles.
- **Tablet:** desde 768 hasta 1024 píxeles.
- **Escritorio:** más de 1024 píxeles.

Entre las prácticas de accesibilidad se incluyen etiquetas semánticas HTML5, textos alternativos para imágenes, etiquetas asociadas a campos, atributos ARIA y estados de mensajes anunciados mediante regiones accesibles.

## 7. Instrucciones de ejecución local

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Instalar o habilitar una extensión de servidor local, como **Live Server**.
4. Abrir `index.html` mediante Live Server.
5. Verificar que la conexión a Internet esté disponible para cargar las bibliotecas externas y consultar la API de GitHub.

Se recomienda utilizar un servidor local en lugar de abrir el HTML directamente mediante `file://`, ya que la aplicación utiliza módulos JavaScript ES.

## 8. Publicación

**Repositorio de GitHub:**  
[Pegar aquí la URL pública del repositorio]

**Sitio publicado en GitHub Pages:**  
[Pegar aquí la URL de producción cuando esté habilitada y verificada]

## 9. Autor

**Fernando Barrientos**  
Estudiante de Ingeniería de Sistemas  
Universidad Católica Boliviana “San Pablo”  
La Paz, Bolivia

## 10. Licencia

Proyecto académico desarrollado con fines educativos para la asignatura Tecnologías Web I (SIS-214).