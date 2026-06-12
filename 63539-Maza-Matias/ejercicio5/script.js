const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso = document.getElementById("aviso");

btnAgregar.addEventListener("click",function() {
    const nombre = inputNombre.value.trim();

    //Si el nombre está vacío: mostrar aviso y salir
    if (nombre === ""){
        aviso.textContent = "Ingrese un nombre.";
        return;
    }

    //Ocultar aviso si habia uno.
    aviso.textContent = "";

    //1. Crear el li
    const li = document.createElement("li");

    //2. poner nombre como texto del li
    li.textContent = nombre;

    //3. Crear un boton "quitar"
    const btnQuitar = document.createElement("button");
    btnQuitar.textContent = "Quitar";

    //4. Al hacer clic en "Quitar", eliminar el <li>
    btnQuitar.addEventListener("click", function () {
        li.remove();
    })

    //5. Insertar el botón dentro del li
    li.appendChild(btnQuitar);

    //6. Insertar el <li> dentro de la lista
    listaInvitados.appendChild(li);

    //7. Limpiar y enfocar el campo
    inputNombre.value = "";
    inputNombre.focus();

});


