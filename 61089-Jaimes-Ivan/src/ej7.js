const mensajeForm = document.getElementById("mensajeForm");
const nombreUsuario = document.getElementById("nombreUsuario");
const profesion = document.getElementById("profesion");
const color = document.getElementById("color");
const crearPerfilBtn = document.getElementById("crearPerfilBtn");
const cardContenedor = document.getElementById("cardContenedor");

nombreUsuario.addEventListener("input", () => {
  mensajeForm.textContent = "";
});
profesion.addEventListener("input", () => {
  mensajeForm.textContent = "";
});

const crearCard = () => {
  const valorNombreUsuario = nombreUsuario.value.trim();
  const valorProfesion = profesion.value.trim();
  const valorColor = color.value;

  if (!valorNombreUsuario || !valorProfesion) {
    mensajeForm.textContent = "Completa todos los campos";
    return;
  }

  const card = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const eliminarCard = document.createElement("button");

  h3.textContent = valorNombreUsuario;
  p.textContent = valorProfesion;
  eliminarCard.textContent = "Eliminar card";

  card.appendChild(h3);
  card.appendChild(p);
  card.appendChild(eliminarCard);
  card.style.borderColor = color.value;
  card.style.borderWidth = "3px";
  card.style.borderStyle = "solid";
  card.style.backgroundColor = "lightgray";
  card.style.padding = "20px";
  card.style.margin = "10px";
  card.style.borderRadius = "10px";
  card.style.width = "250px";
  card.style.textAlign = "center";
  cardContenedor.prepend(card);
  
  nombreUsuario.value = ""
  profesion.value = ""
  color.value = ""

  eliminarCard.addEventListener("click", () => {
    card.remove();
  });
};

crearPerfilBtn.addEventListener("click", crearCard);
