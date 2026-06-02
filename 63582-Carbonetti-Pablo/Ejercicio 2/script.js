// Ejercicio 2 - Semáforo de colores.

const cuadrado = document.getElementById("cuadrado");
const btnRojo = document.getElementById("btnRojo");
const btnAmarillo = document.getElementById("btnAmarillo");
const btnVerde = document.getElementById("btnVerde");

btnRojo.addEventListener ("click", function() {
    cuadrado.style.background = "red";
});

btnAmarillo.addEventListener ("click", function() {
    cuadrado.style.background = "yellow";
});

btnVerde.addEventListener ("click", function() {
    cuadrado.style.background = "green";
});