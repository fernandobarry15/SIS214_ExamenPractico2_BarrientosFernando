export class GitHub {
    static async inicializar() {
        const usuario = "fernandobarry15";
        const estado = document.querySelector("#github_status");
        const contenedor = document.querySelector("#github_repositories");

        if (!estado || !contenedor) return;
        estado.textContent = "Cargando repositorios...";
        estado.dataset.state = "loading";
        contenedor.replaceChildren();

        try {
            const respuesta = await fetch(`https://api.github.com/users/${usuario}/repos?sort=updated&per_page=6`);
            if (!respuesta.ok) {
                let mensajeError;
                switch (respuesta.status) {
                    case 400:
                        mensajeError = "La solicitud enviada no es válida (400).";
                        break;
                    case 404:
                        mensajeError = "No se encontró el usuario solicitado (404).";
                        break;
                    case 500:
                        mensajeError = "El servidor de GitHub presenta un error (500).";
                        break;
                    default:
                        mensajeError = `Error HTTP ${respuesta.status}.`;
                }
                throw new Error(mensajeError);
            }
            const repositorios = await respuesta.json();
            if (!Array.isArray(repositorios)) {
                throw new Error("Respuesta de GitHub no válida.");
            }
            if (repositorios.length === 0) {
                estado.textContent = "No hay repositorios públicos disponibles.";
                estado.dataset.state = "success";
                return;
            }

            const tarjetas = repositorios.map(repositorio => {
                const tarjeta = document.createElement("article");
                tarjeta.className = "repository_card";

                const titulo = document.createElement("h3");
                const enlace = document.createElement("a");

                enlace.href = repositorio.html_url;
                enlace.target = "_blank";
                enlace.rel = "noopener noreferrer";
                enlace.textContent = repositorio.name;

                titulo.appendChild(enlace);

                const descripcion = document.createElement("p");
                descripcion.textContent = repositorio.description || "Repositorio sin descripción.";

                const lenguaje = document.createElement("p");
                lenguaje.textContent = `Lenguaje: ${repositorio.language || "No especificado"}`;

                const estrellas = document.createElement("p");
                estrellas.textContent = `Estrellas: ${repositorio.stargazers_count}`;

                tarjeta.append(titulo, descripcion, lenguaje, estrellas);
                return tarjeta;
            });

            contenedor.replaceChildren(...tarjetas);

            estado.textContent = `Se cargaron ${tarjetas.length} repositorios.`;
            estado.dataset.state = "success";

        } catch (error) {
            estado.textContent = `No se pudieron cargar los repositorios: ${error.message}`;
            estado.dataset.state = "error";
            console.error("Error al consultar GitHub:", error);
        }
    }
}