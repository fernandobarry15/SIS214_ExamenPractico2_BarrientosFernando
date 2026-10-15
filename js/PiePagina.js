export class PiePagina {
    static inicializar() {
        const anio = document.querySelector("#current_year");
        if (anio) anio.textContent = new Date().getFullYear();
        const imprimir = document.querySelector("#print_cv_button");
        if (imprimir) imprimir.addEventListener("click", () => window.print());
        const barra = document.querySelector("#reading_progress");
        if (barra) {
            const actualizar = () => {
                const doc = document.documentElement;
                const recorrido = doc.scrollHeight - doc.clientHeight;
                const porcentaje = recorrido > 0 ? doc.scrollTop / recorrido * 100 : 0;
                barra.style.width = `${porcentaje}%`;
            };
            window.addEventListener("scroll", actualizar, { passive: true });
            window.addEventListener("resize", actualizar); actualizar();
        }
        const arriba = document.querySelector("#back_to_top");
        if (arriba) {
            arriba.hidden = true;
            window.addEventListener("scroll", () => { arriba.hidden = window.scrollY < 300; }, { passive: true });
            arriba.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
        }
    }
}
