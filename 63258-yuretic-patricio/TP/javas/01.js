const titulo = document.getElementById("titulo");
const btnCambiar = document.getElementById("btnCambio");

btnCambiar.addEventListener ("click", () =>{

        titulo.textContent ="¡ Bienvenido al Dom!";
        titulo.style.color ="blue";
})