const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const aviso = document.getElementById("aviso");
const listaInvitados = document.getElementById("listaInvitados");

btnAgregar.addEventListener("click", function() {
    if (inputNombre.value.trim() === "") {
        aviso.textContent = "Ingresa un nombre.";
        return;
    } 
    
    const li = document.createElement("li");
    li.textContent = inputNombre.value + " ";
    listaInvitados.appendChild(li);

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Quitar";

    btnEliminar.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(btnEliminar);

    aviso.textContent = "";
    inputNombre.value = "";
    inputNombre.focus();
});