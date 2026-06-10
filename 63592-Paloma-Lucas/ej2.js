
const cuadrado    = document.getElementById("cuadrado");
const btnRojo     = document.getElementById("btnRojo");
const btnAmarillo = document.getElementById("btnAmarillo");
const btnVerde    = document.getElementById("btnVerde");


btnRojo.addEventListener("click", function () {
  cuadrado.style.backgroundColor = "#e74c3c";

  cuadrado.textContent = "🔴";
  cuadrado.style.boxShadow = "0 0 60px rgba(231, 76, 60, 0.9)";
});


btnAmarillo.addEventListener("click", function () {

  cuadrado.style.backgroundColor = "#f1c40f";

  cuadrado.textContent = "🟡";

  cuadrado.style.boxShadow = "0 0 60px rgba(241, 196, 15, 0.9)";
});


btnVerde.addEventListener("click", function () {

  cuadrado.style.backgroundColor = "#2ecc71";

  cuadrado.textContent = "🟢";

  cuadrado.style.boxShadow = "0 0 60px rgba(46, 204, 113, 0.9)";
});