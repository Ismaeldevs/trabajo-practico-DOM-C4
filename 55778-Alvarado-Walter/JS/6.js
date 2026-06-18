const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function() {
  const oculto = tarjeta.classList.toggle("oculto");

  if(oculto){
    btnToggle.textContent = "mostrar";
  }
  else
  {
    btnToggle.textContent = "ocultar";
  }
});