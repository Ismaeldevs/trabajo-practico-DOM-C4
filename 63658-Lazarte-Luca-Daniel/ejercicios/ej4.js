const inputNombre = document.getElementById("inputNombre");
const preview = document.getElementById("preview");

inputNombre.addEventListener("input", function() {
    const nombre = inputNombre.value.trim();
    
    if (nombre === "") {
        preview.textContent = "Escribí tu nombre arriba.";
    } else {
        // Mantenemos la tilde en "Holá" tal como lo pide el PDF original
        preview.textContent = `Holá, ${nombre}!`; 
    }
});