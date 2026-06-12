const nombreInvitado = document.getElementById("nombreInvitado");
const btnAgregar = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");

btnAgregar.addEventListener("click", function () {

    const nombre = nombreInvitado.value.trim();

    if (nombre === "") {
        alert("Ingresá un nombre");
        return;
    }

    const nuevoInvitado = document.createElement("li");

    nuevoInvitado.textContent = nombre;

    listaInvitados.appendChild(nuevoInvitado);

    nombreInvitado.value = "";

});