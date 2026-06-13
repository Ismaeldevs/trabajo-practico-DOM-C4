const nombre = document.getElementById("nombre");
const preview = document.getElementById("preview");

nombre.addEventListener("input", function() {

    const texto = nombre.value.trim();

    if (texto === "") {
        preview.textContent = "Escribí tu nombre arriba.";
    } else {
        preview.textContent = `Hola, ${texto}!`;
    }

});