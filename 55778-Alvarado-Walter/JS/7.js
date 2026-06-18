const inpNombre = document.getElementById("inpNombre");
const inpProfesion = document.getElementById("inpProfesion");
const inpColor = document.getElementById("inpColor");
const btnGenerar = document.getElementById("btnGenerar");
const resultados = document.getElementById("resultados");
const avisoP = document.getElementById("avisoP");

btnGenerar.addEventListener("click", function() {
  const nombre = inpNombre.value.trim();
  const profesion = inpProfesion.value.trim();
  const color = inpColor.value;

  if (nombre === "" || profesio === ""){
    avisoP.textContent =" completa lso campos";
    return;
  }

  avisoP.textContent = "";

  const tarjeta = document.createElement("div");
  tarjeta.style.borderLeft("h3");
  h3.textContent = nombre;

  const p = document.createElement("p");
  p.textContent = profesion;

  const btnEliminar = document.createElement("button");
  btnEliminar.addEventListener("click", function(){
    tarjeta.remove();
  });

  tarjeta.appendChild(h3);
  tarjeta.appendChild(p);
  tarjeta.appendChild(btnEliminar);

  resultados.appendChild(tarjeta);
});