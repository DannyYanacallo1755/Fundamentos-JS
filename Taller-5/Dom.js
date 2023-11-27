document.addEventListener("DOMContentLoaded", function () {
    // Selección de elementos
    let porId = document.getElementById("miElemento");

    // Manipulación de contenido
    let contenido = porId.innerHTML;
    porId.innerHTML = "¡Hola desde JavaScript!";

    // Manipulación de atributos
    let valorAtributo = porId.getAttribute("class");
    porId.setAttribute("class", "nuevaClase");

    // Manipulación de estilos
    porId.style.backgroundColor = "#e74c3c";

    // Manipulación de clases
    porId.classList.add("otraClase");

    // Creación de elementos
    let nuevoElemento = document.createElement("p");
    nuevoElemento.innerHTML = "Este es un nuevo párrafo creado dinámicamente.";
    document.body.appendChild(nuevoElemento);

    // Promesa
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true; // o false para simular un fallo
            if (exito) {
                resolve("La operación fue exitosa :)");
            } else {
                reject("La operación falló :(");
            }
        }, 2000);
    });

    // Utilizar la promesa
    promesa
        .then((resultado) => {
            console.log(resultado);
        })
        .catch((error) => {
            console.error(error);
        });

    // Async/Await
    async function miFuncionAsincrona() {
        try {
            const resultado = await new Promise((resolve) => setTimeout(() => resolve("Operación asíncrona completada"), 2000));
            console.log(resultado);
        } catch (error) {
            console.error("¡La operación asíncrona falló!", error);
        }
    }

    // Llamar a la función asíncrona
    miFuncionAsincrona();
});
