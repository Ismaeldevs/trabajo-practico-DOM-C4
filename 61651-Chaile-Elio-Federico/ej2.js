const cuadrado = document.getElementById("cuadrado");
const btnRojo = document.getElementById("btnRojo");
const btnAmarillo = document.getElementById("btnAmarillo");
const btnVerde = document.getElementById("btnVerde");

// Evento para el botón Rojo
btnRojo.addEventListener("click", function() {
    cuadrado.style.backgroundColor = "red"; // 
});

// Evento para el botón Amarillo
btnAmarillo.addEventListener("click", function() {
    cuadrado.style.backgroundColor = "yellow"; // 
});

// Evento para el botón Verde
btnVerde.addEventListener("click", function() {
    cuadrado.style.backgroundColor = "green"; // 
});