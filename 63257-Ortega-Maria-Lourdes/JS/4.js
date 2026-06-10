const inputNombre = document.getElementById("nombre");
const mensaje = document.getElementById("parrafoTiempoReal");

inputNombre.addEventListener("input", function(){
    if (inputNombre.value === "") {
        mensaje.textContent = "Escribí tu nombre arriba";
    } else {
        mensaje.textContent = `Hola ${inputNombre.value}`;
    }
});