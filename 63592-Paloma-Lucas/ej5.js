// Seleccionar por id
const inputNombre    = document.getElementById("inputNombre");
const btnAgregar     = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso          = document.getElementById("aviso");

// Al hacer clic en Agregar
btnAgregar.addEventListener("click", function () {

  // Leer el valor del input
  const nombre = inputNombre.value.trim();

  // Validar que no este vacio
  if (nombre === "") {
    aviso.textContent = "⚠️ Ingresa un nombre.";
    return;
  }

  // Limpiar el aviso
  aviso.textContent = "";

  // Crear el elemento li con el nombre
  const li = document.createElement("li");

  // Crear un span solo para el texto del nombre
  const spanNombre = document.createElement("span");
  spanNombre.textContent = nombre;

  // Crear el boton Quitar
  const btnQuitar = document.createElement("button");
  btnQuitar.textContent = "Quitar";
  btnQuitar.classList.add("btnQuitar");

  // Al hacer clic en Quitar eliminar el li
  btnQuitar.addEventListener("click", function () {
    li.remove();
  });

  // Insertar span y boton dentro del li
  li.appendChild(spanNombre);
  li.appendChild(btnQuitar);

  // Insertar el li dentro de la lista
  listaInvitados.appendChild(li);

  // Limpiar y enfocar el campo
  inputNombre.value = "";
  inputNombre.focus();

});