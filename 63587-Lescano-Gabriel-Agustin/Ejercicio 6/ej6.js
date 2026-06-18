const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function() {
  const estaOculto = tarjeta.classList.toggle("oculto");
  
  if (estaOculto) {
    btnToggle.textContent = "Mostrar";
  } else {
    btnToggle.textContent = "Ocultar";
  }
});