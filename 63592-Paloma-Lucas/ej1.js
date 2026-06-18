const titulo    = document.getElementById("titulo");
const btnCambiar = document.getElementById("btnCambiar");

const titulos = [
  { texto: "¡Bienvenido al DOM!",      color: "#e94560" },
  { texto: "JavaScript es genial!",    color: "#2ecc71" },
  { texto: "Seguimos aprendiendo!",    color: "#f1c40f" },
  { texto: "El DOM es poderoso!",      color: "#3498db" },
  { texto: "Ya casi termina el TP!",   color: "#9b59b6" }
];


let indice = 0;

btnCambiar.addEventListener("click", function () {

  titulo.textContent = titulos[indice].texto;

  titulo.style.color = titulos[indice].color;

  indice = indice + 1;

  if (indice === titulos.length) {
    indice = 0;
  }

});