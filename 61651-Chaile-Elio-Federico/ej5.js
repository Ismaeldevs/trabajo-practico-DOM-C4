const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso = document.getElementById("aviso");

btnAgregar.addEventListener("click", function() {
    // Obtenemos el valor y le sacamos los espacios 
    const nombre = inputNombre.value.trim();

    // Si el nombre está vacío: mostrar aviso y salir 
    if (nombre === "") {
        aviso.textContent = "Ingresá un nombre."; 
        return; // Esto corta la ejecución de la función para que no siga creando la lista vacía 
    }

    // Ocultar el aviso si había uno (porque ahora sí escribió bien) 
    aviso.textContent = ""; 

    // 1. Crear el <li> 
    const li = document.createElement("li"); 

    // 2. Poner el nombre como texto del <li> 
    li.textContent = nombre; 

    // 3. Crear el botón "Quitar" 
    const btnQuitar = document.createElement("button"); 
    btnQuitar.textContent = "Quitar"; 

    // 4. Al hacer clic en "Quitar", eliminar el <li> 
    btnQuitar.addEventListener("click", function () {
        li.remove(); // Elimina el elemento de la lista 
    });

    // 5. Insertar el botón dentro del <li> (queda al lado del nombre)
    li.appendChild(btnQuitar); 

    // 6. Insertar el <li> ya armado dentro de la lista (<ul>) 
    listaInvitados.appendChild(li); 

    // 7. Limpiar y enfocar el campo para escribir el próximo invitado más rápido 
    inputNombre.focus(); 
});