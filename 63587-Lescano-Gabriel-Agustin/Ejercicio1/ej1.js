const titulo = document.getElementById("titulo");
const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.addEventListener("click", function() {
  // 1. Cambiá el textContent del titulo
  titulo.textContent = "¡Bienvenido al DOM!";
  
  // 2. Cambiá el color del titulo a "navy"
  titulo.style.color = "navy";
});