const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function() {
    // 1. Alternar la clase "oculto" en la tarjeta
    // Guardamos el resultado en una variable (true si se agregó la clase, false si se quitó)
    const estaOculto = tarjeta.classList.toggle("oculto");
    
    // 2. Cambiar el texto del botón según el estado
    // Si la tarjeta ahora está oculta (estaOculto es true), el botón debe decir "Mostrar"
    if (estaOculto) {
        btnToggle.textContent = "Mostrar";
    } 
    // Si la tarjeta ahora está visible (estaOculto es false), el botón debe decir "Ocultar"
    else {
        btnToggle.textContent = "Ocultar";
    }
});