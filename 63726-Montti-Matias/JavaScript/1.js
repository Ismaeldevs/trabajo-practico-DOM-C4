const titulo = document.getElementById("titulo");
const botonCambiar = document.getElementById("btnCambiar");


botonCambiar.addEventListener("click", function(){
titulo.textContent = "¡Bienvenido al DOM!";
titulo.style.color = "navy";
})