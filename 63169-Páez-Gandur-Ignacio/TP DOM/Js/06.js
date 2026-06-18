const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function () {

    const oculta = tarjeta.classList.toggle("oculto");

    if (oculta) {
        btnToggle.textContent = "Mostrar";
    } else {
        btnToggle.textContent = "Ocultar";
    }
});