
const nombreInvitado = document.getElementById("inputNombre")
const aviso = document.getElementById("aviso")
const agregar = document.getElementById("btnAgregar")
const lista = document.getElementById("listaInvitados")

nombreInvitado.addEventListener("input", ()=>{
    aviso.textContent = ""
})

const agregarLista = ()=>{
    const nombreIngresado = nombreInvitado.value.trim()
    if(!nombreIngresado){
        aviso.textContent = "El nombre del invitado no puede estar vacio"
        return
    }

    let li = document.createElement("li")
    let span = document.createElement("span")
    span.textContent = nombreIngresado

    let btnEliminar = document.createElement("button")
    btnEliminar.textContent = "eliminar"

    li.appendChild(span)
    li.appendChild(btnEliminar)
    lista.prepend(li)

    nombreInvitado.value = ""

    btnEliminar.addEventListener("click", ()=>{
        li.remove()
    })
}

agregar.addEventListener("click", agregarLista)
