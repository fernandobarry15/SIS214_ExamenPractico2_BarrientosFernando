export class BuscadorHabilidades {
    static inicializar() {
        const buscador = document.querySelector("#search_input");
        const estado = document.querySelector("#skills_status");
        const lista = document.querySelector("#skills_list");

        if (!buscador || !estado || !lista) return;

        const tarjetasOriginales = Array.from(
            lista.querySelectorAll(".habilidad")
        );

        const habilidades = tarjetasOriginales.map((tarjeta, indice) => ({
            elemento: tarjeta,
            texto: tarjeta.textContent.toLocaleLowerCase("es"),
            indice: indice
        }));

        buscador.addEventListener("input", () => {
            const consulta = buscador.value.trim().toLocaleLowerCase("es");
            const resultados = habilidades.filter(habilidad =>
                    habilidad.texto.includes(consulta)).map(habilidad => habilidad.indice);

            tarjetasOriginales.forEach((tarjeta, indice) => {
                tarjeta.hidden = !resultados.includes(indice);
            });

            if (resultados.length === 0) {
                estado.textContent = "No se encontraron habilidades.";
            } else {
                estado.textContent = `Tarjetas encontradas: ${resultados.length}.`;
            }
        });
    }
}