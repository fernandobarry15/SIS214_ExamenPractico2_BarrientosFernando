import { Tema } from "./Tema.js";
import { Menu } from "./Menu.js";
import { BuscadorHabilidades } from "./BuscadorHabilidades.js";
import { Formulario } from "./Formulario.js";
import { GitHub } from "./GitHub.js";
import { PiePagina } from "./PiePagina.js";

function inicializarAplicacion() {
    Tema.inicializar();
    Menu.inicializar();
    BuscadorHabilidades.inicializar();
    Formulario.inicializar();
    PiePagina.inicializar();

    if (window.AOS) {
        window.AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
            offset: 80,
            disable: "mobile"
        });
    }

    GitHub.inicializar();
}

document.addEventListener(
    "DOMContentLoaded",
    inicializarAplicacion,
    { once: true }
);