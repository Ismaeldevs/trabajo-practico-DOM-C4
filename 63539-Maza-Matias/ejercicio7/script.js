const inpNombre = document.getElementById("inpNombre");
const inpProfesion = document.getElementById("inpProfesion");
const inpColor = document.getElementById("inpColor");
const btnGenerar = document.getElementById("btnGenerar");
const resultado = document.getElementById("resultado");
const avisoP = document.getElementById("avisoP");

btnGenerar.addEventListener("click", function () {
    const nombre = inpNombre.value.trim();
    const profesion = inpProfesion.value.trim();
    const color = inpColor.value;

  // Validar que nombre y profesión no estén vacíos
    if (nombre === "" || profesion === "") {
    avisoP.textContent = "Falta ingresar información";
    return;
    }

  avisoP.textContent = ""; // limpiar aviso

  // Crear la tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.style.borderLeft = `4px solid ${color}`;
    tarjeta.style.borderRadius = "8px";
    tarjeta.style.padding = "12px";
    tarjeta.style.marginTop = "10px";


  // Crear el <h3> con el nombre
    const titulo = document.createElement("h3");
    titulo.textContent = nombre;

  // Crear el <p> con la profesión
    const parrafo = document.createElement("p");
    parrafo.textContent = profesion;

  // Crear el botón "Eliminar tarjeta"
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar tarjeta";
    btnEliminar.style.backgroundColor = "#ef4444";
    btnEliminar.style.color = "white";
    btnEliminar.style.border = "none";
    btnEliminar.style.padding = "6px 10px";
    btnEliminar.style.borderRadius = "4px";
    btnEliminar.style.cursor = "pointer";

    btnEliminar.addEventListener("click", function () {
    tarjeta.remove();
    });

  // Armar la jerarquía y agregar al DOM
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(parrafo);
    tarjeta.appendChild(btnEliminar);
    resultado.appendChild(tarjeta);
});



