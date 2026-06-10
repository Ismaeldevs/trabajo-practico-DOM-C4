const inputNombre = document.getElementById ("inputNombre");
const preview = document.getElementById ("preview");

inputNombre.addEventListener("input", () => {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        preview.textContent = "Escribí tu nombre arriba.";
    } else {
        preview.textContent = `Hola, ${nombre}!`;
    }
});