document.getElementById("boton").addEventListener("click", function() {
    const titulo = document.getElementById("titulo");

    titulo.textContent = "¡Bienvenido al DOM!";
    titulo.style.color = "navy";
});