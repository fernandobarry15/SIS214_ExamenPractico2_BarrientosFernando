export class Menu {
    static inicializar() {
        const boton = document.querySelector("#menu_button");
        const menu = document.querySelector("#nav_menu_list");

        if (!boton || !menu) return;

        boton.addEventListener("click", () => {
            const abierto = menu.classList.toggle("active");
            boton.setAttribute("aria-expanded", String(abierto));
            boton.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
            boton.textContent = abierto ? "✕" : "☰";
        });

        const enlaces = menu.querySelectorAll("a");

        enlaces.forEach(enlace => {
            enlace.addEventListener("click", () => {
                menu.classList.remove("active");
                boton.setAttribute("aria-expanded", "false");
                boton.setAttribute("aria-label", "Abrir menú");
                boton.textContent = "☰";
            });
        });
    }
}
