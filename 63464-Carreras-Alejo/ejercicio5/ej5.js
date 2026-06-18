const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso = document.getElementById("aviso");

btnAgregar.addEventListener("click", function() {
     
    const nombre = inputNombre.value.trim();

    
    if (nombre === "") {
        aviso.textContent = "Ingresá un nombre."; 
        return; 
    }

    aviso.textContent = ""; 

    const li = document.createElement("li"); 

    
    li.textContent = nombre; 

    
    const btnQuitar = document.createElement("button"); 
    btnQuitar.textContent = "Quitar"; 

    
    btnQuitar.addEventListener("click", function () {
        li.remove(); // Elimina el elemento de la lista 
    });

    li.appendChild(btnQuitar); 

    listaInvitados.appendChild(li); 

    inputNombre.focus(); 
});