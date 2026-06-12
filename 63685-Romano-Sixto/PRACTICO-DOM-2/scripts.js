const cuadrado = document.getElementById("cuadrado");
const btnRojo = document.getElementById("btnRojo");
const btnAmarillo = document.getElementById("btnAmarillo");
const btnVerde = document.getElementById("btnVerde");

btnRojo.addEventListener("click", () => {
    cuadrado.style.backgroundColor = "red";
});

btnAmarillo.addEventListener("click", () => {
    cuadrado.style.backgroundColor = "yellow";
});

btnVerde.addEventListener("click", () => {
    cuadrado.style.backgroundColor = "green";
});

