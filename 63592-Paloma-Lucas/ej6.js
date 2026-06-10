const tarjeta   = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function () {

  tarjeta.classList.toggle("oculto");

  if (tarjeta.classList.contains("oculto")) {
    btnToggle.textContent = "Mostrar";
  } else {
    btnToggle.textContent = "Ocultar";
  }

});