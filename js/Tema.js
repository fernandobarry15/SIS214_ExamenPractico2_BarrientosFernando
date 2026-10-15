export class Tema {
    static inicializar() {
        const boton = document.querySelector("#theme_button");
        if (!boton) return;
        let oscuro = false;
        try {
            const temaGuardado = localStorage.getItem("preferenciaTema");
            if (temaGuardado !== null) {
                oscuro = JSON.parse(temaGuardado);
            }
        } catch (error) {
            console.error("Error al recuperar el tema:", error);
        }

        Tema.aplicar(boton, oscuro);

        boton.addEventListener("click", () => {
            oscuro = !document.body.classList.contains("dark_mode");
            Tema.aplicar(boton, oscuro);
            try {
                localStorage.setItem(
                    "preferenciaTema",
                    JSON.stringify(oscuro)
                );
            } catch (error) {
                console.error("Error al guardar el tema:", error);
            }
        });
    }

    static aplicar(boton, oscuro) {
        document.body.classList.toggle("dark_mode", oscuro);
        boton.textContent = oscuro
            ? "☀️ Modo claro"
            : "🌙 Modo oscuro";

        boton.setAttribute("aria-pressed", String(oscuro));

        boton.setAttribute(
            "aria-label",
            oscuro ? "Activar modo claro" : "Activar modo oscuro"
        );
    }
}