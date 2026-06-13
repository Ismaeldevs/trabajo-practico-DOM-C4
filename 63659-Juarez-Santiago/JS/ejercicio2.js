const cuadrado = document.getElementById("cuadrado");

document.getElementById("rojo").addEventListener("click", () => {
    cuadrado.style.backgroundColor = "red";
});

document.getElementById("amarillo").addEventListener("click", () => {
    cuadrado.style.backgroundColor = "yellow";
});

document.getElementById("verde").addEventListener("click", () => {
    cuadrado.style.backgroundColor = "green";
});