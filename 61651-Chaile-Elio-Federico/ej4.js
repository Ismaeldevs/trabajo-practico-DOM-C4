const inputNombre = document.getElementById("inputNombre");
const preview = document.getElementById("preview"); 

// Escuchá el evento "input" del campo de texto
inputNombre.addEventListener("input", function() { 
    // Usamos trim() para ignorar si solo pone espacios
    const nombre = inputNombre.value.trim(); 

    // Si el campo está vacío
    if (nombre === "") {
        preview.textContent = "Escribi tu nombre arriba."; 
    } 
    // Si no 
    else {
        preview.textContent = "Holá, " + nombre + "!"; 
    }
});