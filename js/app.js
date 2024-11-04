
/**
 * Funcion para cambiar los formularios en el "container-main"
 * @param {String} htmlPath ruta del archivo html a montar en "container-main"
 */
function setScreen(htmlPath) {
    const containerMain = document.getElementById("container-main");
    fetch(htmlPath)
        .then(result => {
            if (!result.ok) {
                throw new Error("El sitio no se encuentra");
            }
            return result.text();
        })
        .then(screen => {
            containerMain.innerHTML = screen;
        })
        .catch(error => {
            containerMain.innerHTML = "<h1>Error al cargar el formulario</h1>";
            console.error(error);
        });
}