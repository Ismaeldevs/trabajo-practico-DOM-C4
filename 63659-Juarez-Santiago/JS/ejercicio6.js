const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", () => {

   const cambiar= tarjeta.classList.toggle("oculto");

   if (cambiar) {
    btnToggle.textContent = "Mostrar";
   } else {
    btnToggle.textContent = "Ocultar";
   };

});