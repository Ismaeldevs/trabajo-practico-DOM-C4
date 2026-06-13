const cuadrado = document.getElementById("cuadrado");
const btnRojo = document.getElementById("btnRojo");
const btnAmarillo = document.getElementById("btnAmarillo");
const btnVerde = document.getElementById("btnVerde");

const cambiarColor  = (color) => {
    cuadrado.style.backgroundColor = color;
}

btnRojo.addEventListener ("click", () => cambiarColor ("red"));
btnAmarillo.addEventListener("click", () => cambiarColor ("yellow"));
btnVerde.addEventListener("click", () => cambiarColor ("green"));