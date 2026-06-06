// Usamos el nuevo ID definido en el HTML para evitar colisiones
const inputNombreInvitado = document.getElementById("inputNombreInvitado");
const btnAgregar = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso = document.getElementById("aviso");

btnAgregar.addEventListener("click", function () {
    const nombre = inputNombreInvitado.value.trim();

    if (nombre === "") {
        aviso.textContent = "Ingresá un nombre.";
        return;
    }

    aviso.textContent = "";

    const li = document.createElement("li");
    li.textContent = nombre + " ";

    const btnQuitar = document.createElement("button");
    btnQuitar.textContent = "Quitar";

    btnQuitar.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(btnQuitar);
    listaInvitados.appendChild(li);

    inputNombreInvitado.value = "";
    inputNombreInvitado.focus();
});