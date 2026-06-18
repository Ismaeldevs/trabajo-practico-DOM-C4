alert("JS conectado");

const inputNombre = document.getElementById("inputNombre");
const preview = document.getElementById("preview");

console.log(inputNombre);
console.log(preview);

inputNombre.addEventListener("input", function () {

    console.log("Estoy escribiendo");

    const nombre = inputNombre.value;

    if (nombre === "") {

        preview.textContent = "Escribí tu nombre arriba.";

    } else {

        preview.textContent = "Hola, " + nombre + "!";

    }

});