//primer ejercicio de DOM

const titulo = document.getElementById("titulo");
const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.addEventListener("click", () => {
  titulo.style.color = "navy";
  titulo.style.fontWeight = "bold";
  titulo.textContent = "Bienvenido al DOM!";
});

//segundo ejercicio de DOM

const divColor = document.getElementById('divColor');
const btnRojo = document.getElementById('btnRojo');
const btnAmarillo = document.getElementById('btnAmarillo');
const btnVerde = document.getElementById('btnVerde');

btnRojo.addEventListener('click', () => {
    divColor.style.backgroundColor = 'red';
})

btnAmarillo.addEventListener('click', () => {
    divColor.style.backgroundColor = 'yellow';
})

btnVerde.addEventListener('click', () => {
    divColor.style.backgroundColor = 'green';
})

//tercer ejercicio de DOM

const estado = document.getElementById("estado");
const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
const ingresarBtn = document.getElementById('btnIngresar');

usuario.addEventListener("input", () => {
    estado.textContent = "";
});

contraseña.addEventListener("input", () => {
    estado.textContent = "";
});

ingresarBtn.addEventListener("click", () => {
    const valorUsuario = usuario.value
    const valorContraseña = contraseña.value
    
    if(!valorUsuario.trim() || !valorContraseña.trim()){
        estado.textContent = "Completa los campos"
        estado.style.color = "red"
        return
    }

    if(valorContraseña.toLowerCase() === "admin" && valorUsuario.toLowerCase() === "admin"  ){
        estado.textContent = "Bienvenido Admin"
        estado.style.color = "green"
        usuario.value = ""
        contraseña.value = ""
    }else{
        estado.textContent = "Credenciales incorrectas"
        estado.style.color = "red"
        return
    }
});

//cuarto ejercicio de DOM

const nombre = document.getElementById("nombre")
const parrafoNombre = document.getElementById("parrafoNombre")

nombre.addEventListener("input", ()=>{
    parrafoNombre.textContent = `Hola! ${nombre.value.trim()}` 
})

nombre.addEventListener("input", ()=>{
    if (!nombre.value.trim()){
       parrafoNombre.textContent = "Escribi tu nombre arriba" 
    }
})

//quinto ejercicio de DOM

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

//sexto ejercicio de DOM

const cardDinamica = document.getElementById("cardDinamica")
const ocultarCardBtn = document.getElementById("ocultarCardBtn")

ocultarCardBtn.addEventListener("click", () => {
    cardDinamica.classList.toggle("oculto")
    if (cardDinamica.classList.contains("oculto")){
        ocultarCardBtn.textContent = "Mostrar"
    }else{
        ocultarCardBtn.textContent = "Ocultar"
    }
    
})

//septimo ejercicio de DOM

const mensajeForm = document.getElementById("mensajeForm");
const nombreUsuario = document.getElementById("nombreUsuario");
const profesion = document.getElementById("profesion");
const color = document.getElementById("color");
const crearPerfilBtn = document.getElementById("crearPerfilBtn");
const cardContenedor = document.getElementById("cardContenedor");

nombreUsuario.addEventListener("input", () => {
  mensajeForm.textContent = "";
});
profesion.addEventListener("input", () => {
  mensajeForm.textContent = "";
});

const crearCard = () => {
  const valorNombreUsuario = nombreUsuario.value.trim();
  const valorProfesion = profesion.value.trim();
  const valorColor = color.value;

  if (!valorNombreUsuario || !valorProfesion) {
    mensajeForm.textContent = "Completa todos los campos";
    return;
  }

  const card = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const eliminarCard = document.createElement("button");

  h3.textContent = valorNombreUsuario;
  p.textContent = valorProfesion;
  eliminarCard.textContent = "Eliminar card";

  card.appendChild(h3);
  card.appendChild(p);
  card.appendChild(eliminarCard);
  card.style.borderColor = color.value;
  card.style.borderWidth = "3px";
  card.style.padding = "20px";
  card.style.margin = "10px";
  card.style.borderRadius = "10px";
  card.style.width = "250px";
  card.style.textAlign = "center";
  cardContenedor.prepend(card);
  
  nombreUsuario.value = ""
  profesion.value = ""
  color.value = ""

  eliminarCard.addEventListener("click", () => {
    card.remove();
  });
};

crearPerfilBtn.addEventListener("click", crearCard);