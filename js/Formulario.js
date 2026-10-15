export class Formulario {
    static inicializar() {
        const formulario = document.querySelector("#contact_form");
        const mensaje = document.querySelector("#form_message");

        if (!formulario || !mensaje) return;

        const campos = Array.from(
            formulario.querySelectorAll("input, select, textarea")
        );

        const validarCampo = campo => {
            const error = document.getElementById(`${campo.id}_error`);
            if (!error) return;
            let textoError = "";
            if (campo.validity.valueMissing) {
                textoError = "Este campo es obligatorio.";
            } else if (
                campo.type === "email" &&
                campo.validity.typeMismatch
            ) {
                textoError = "Introduce un correo válido.";
            } else if (campo.validity.tooShort) {
                textoError = `Escribe al menos ${campo.minLength} caracteres.`;
            } else if (campo.validity.patternMismatch) {
                textoError = "Introduce un teléfono válido.";
            }

            error.textContent = textoError;

            campo.setAttribute(
                "aria-invalid",
                String(textoError !== "")
            );
        };

        campos.forEach(campo => {
            campo.addEventListener("input", () => {
                validarCampo(campo);
                mensaje.textContent = "";
            });

            campo.addEventListener("change", () => {
                validarCampo(campo);
            });
        });

        formulario.addEventListener("submit", evento => {
            evento.preventDefault();
            campos.forEach(validarCampo);
            if (!formulario.checkValidity()) {
                mensaje.textContent = "Revisa los campos marcados antes de continuar.";
                mensaje.setAttribute("role", "alert");
                formulario.reportValidity();
                return;
            }
            mensaje.textContent = "Formulario validado correctamente. Esta demostración no envía correos.";
            mensaje.setAttribute("role", "status");
        });

        formulario.addEventListener("reset", () => {
            mensaje.textContent = "";
            campos.forEach(campo => {
                campo.removeAttribute("aria-invalid");
                const error = document.getElementById(`${campo.id}_error`);
                if (error) error.textContent = "";
            });
        });
    }
}