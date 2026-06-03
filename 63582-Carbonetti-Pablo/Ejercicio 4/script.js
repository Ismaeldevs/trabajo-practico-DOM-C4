// Ejercicio 4 - Mostrar nombre en tiempo real.

const inputNombre = document.getElementById("inputNombre");
const preview = document.getElementById("preview");

inputNombre.addEventListener("input", function() {
    if (inputNombre.value === "") {
        preview.textContent = "Escribí tu nombre arriba."
    } else {
        preview.textContent = `Holá, ${inputNombre.value}!`;
    }
});