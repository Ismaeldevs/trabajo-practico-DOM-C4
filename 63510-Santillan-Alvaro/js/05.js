const inputNombre = document.getElementById("inputNombre")
const bntAgregar = document.getElementById("btnAgregar")
const listaInvitados = document.getElementById("listaInvitados")
const aviso = document.getElementById("aviso")

bntAgregar.addEventListener("click", () =>{
    const nombre = inputNombre.value.trim();

    if(nombre===""){
        aviso.textContent ="Por favor, ingrese un nombre.";
       inputNombre.focus;
        return;
    }
    aviso.textContent="";
const li = document.createElement("li")

li.textContent = nombre +" ";

const btnQuitar = document.createElement("button");
btnQuitar.textContent ="Quitar";

btnQuitar.addEventListener("click", () =>{
    li.remove();
})

li.appendChild(btnQuitar);
listaInvitados.appendChild(li);
inputNombre.value="";
inputNombre.focus();
})