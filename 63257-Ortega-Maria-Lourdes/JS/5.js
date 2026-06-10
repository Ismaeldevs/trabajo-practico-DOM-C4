const inputInvitados = document.getElementById("invitados");
const botonAgregar = document.getElementById("agregar");
const lista = document.getElementById("listaInviatdos");
const aviso = document.getElementById("aviso");


const Limpiar =() => {
    inputInvitados.value ="";
    inputInvitados.focus();
    aviso.textContent = "";
}


const agregarInvitado = () => {
    const nombre = inputInvitados.value.trim();
    
    if(!nombre){
        aviso.textContent = "No agregaste invitados. Por favor agrega uno";
    } else {
        const li = document.createElement("li");
        li.textContent = nombre;

        const botonQuitar = document.createElement("button");
        botonQuitar.textContent = "Quitar";

        botonQuitar.addEventListener("click", () =>{
            li.remove();
        })

        li.appendChild(botonQuitar);
        lista.appendChild(li);

        Limpiar();
    }
}

botonAgregar.addEventListener("click", agregarInvitado);