const cuadrado = document.getElementById("cuadrado");
const botonRojo = document.getElementById("btnRojo");
const botonAmarillo = document.getElementById("btnAmarillo");
const botonVerde = document.getElementById("btnVerde");


const cambiarColor = (color) => {
  cuadrado.style.backgroundColor = color;
}

botonRojo.addEventListener("click",() => cambiarColor("red"));
botonAmarillo.addEventListener("click",() => cambiarColor("yellow"));
botonVerde.addEventListener("click",() => cambiarColor("green"));