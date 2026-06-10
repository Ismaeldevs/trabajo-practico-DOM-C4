
const inputNombre = document.getElementById("inputNombre");
const preview     = document.getElementById("preview");

inputNombre.addEventListener("input", function () {


  if (inputNombre.value === "") {
    preview.textContent = "Escribi tu nombre arriba.";
    preview.style.color = "#aaa";
    return;
  }

  preview.textContent = "👋 Hola, " + inputNombre.value + "! Bienvenido!";
  preview.style.color = "#e94560";

});