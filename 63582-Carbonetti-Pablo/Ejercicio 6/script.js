// Ejercicio 6 - Alternar contenido con un botón.

const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function() {
    tarjeta.classList.toggle("oculto");
    
    if (tarjeta.classList.contains("oculto")) {
        btnToggle.textContent = "Mostar";
    } else {
        btnToggle.textContent = "Ocultar";
    }
});