const titulo = document.getElementById("titulo");
const boton = document.getElementById("btnCambiar");

boton.addEventListener("click", function() {
    titulo.textContent = "!Bienvenido al DOM"
    titulo.style.color = "navy"
})