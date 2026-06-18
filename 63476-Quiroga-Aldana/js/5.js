const inputNombre5 = document.getElementById("inputNombre5");
const btnAgregar = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso = document.getElementById("aviso");

console.log("inputNombre5:", inputNombre5);
console.log("btnAgregar:", btnAgregar);
console.log("listaInvitados:", listaInvitados);
console.log("aviso:", aviso);

if (btnAgregar) {
    btnAgregar.addEventListener("click", function () {
        const nombre = inputNombre5.value.trim();

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

    inputNombre5.value = "";
    inputNombre5.focus();
    });
}
