const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function() {
    //1. Alternar la clase "oculto" en la tarjeta
    //2. Cambiar el texto del botón según el estado

    tarjeta.classList.toggle("oculto")

    if(tarjeta.classList.contains("oculto") === false){
        btnToggle.textContent = "Ocultar";
    }else {
        
        btnToggle.textContent = "Mostrar";
    }
})

