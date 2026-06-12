const texto = document.getElementById("texto");
const btnAlternar = document.getElementById("btnAlternar");

btnAlternar.addEventListener("click", function () {

    if (texto.style.display === "none") {

        texto.style.display = "block";

    } else {

        texto.style.display = "none";

    }

});