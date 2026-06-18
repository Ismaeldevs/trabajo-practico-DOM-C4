//ejercicio 1
const titulo = document.getElementById("titulo");
const btnCambio = document.getElementById("btncambio");

btnCambio.addEventListener("click",()=>{
    titulo.textContent= "Bienvenidos al DOM!"
    titulo.style.color="navy";
});

// ejercicio 2
const cuadrado = document.getElementById("cuadrado");
const btnRojo = document.getElementById("btnrojo");
const btnAmarillo = document.getElementById("btnamarillo");
const btnVerde = document.getElementById("btnverde");
const parrafo = document.getElementById("mensaje")

btnRojo.addEventListener("click",()=>{
    cuadrado.style.background = "red";
});
btnAmarillo.addEventListener("click",()=>{
    cuadrado.style.background = "yellow";
});
btnVerde.addEventListener("click",()=>{
    cuadrado.style.background = "green";
});

//ejercicio 3
const inputUser = document.getElementById("usuario");
const inputPass = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");

//usuario valido
const usuarioValido = "luis";
const contraseñaValida = "1234";

btnLogin.addEventListener("click",function(){
const usuario = inputUser.value.trim();
const contraseña = inputPass.value.trim();
 if (usuario === usuarioValido && contraseña === contraseñaValida) {
        mensaje.textContent = "Usuario válido";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Usuario inválido";
        mensaje.style.color = "red";
    }
    //borrar texto de input
inputUser.value="";
inputPass.value="";
});

//ejercicio 4

const inputNombre = document.getElementById("inputNombre");
const preview = document.getElementById("preview")

inputNombre.addEventListener("input",()=>{
    const nombre = inputNombre.value.trim();
    if(nombre ===""){
        preview.textContent= "escribi tu nombre arriba"
    }else{
        preview.textContent= "hola "+nombre
        };
});

//ejercicio 5

const NombreInvitado = document.getElementById("nombreInvitado");
const btnAgregar = document.getElementById("btnagregar");
const ListaInvitados = document.getElementById("listaInvitados");
const aviso = document.getElementById("aviso");

btnAgregar.addEventListener("click",()=>{
    nombre = NombreInvitado.value.trim();
    if(nombre===""){
        aviso.textContent= "desbes escribir un nombre";
        aviso.style.color= "red";
        return;
    }
    aviso.textContent="";
    const li = document.createElement("li");
    li.textContent= nombre;
    const btnQuitar =document.createElement("button");
    btnQuitar.textContent="Quitar";
    btnQuitar.addEventListener("click",()=>{
        ListaInvitados.removeChild(li);
        
    })
    li.appendChild(btnQuitar);
    ListaInvitados.appendChild(li);
    NombreInvitado.value="";
    NombreInvitado.focus();  
})

//ejercicio 6
const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click",()=>{
    tarjeta.classList.toggle("oculto");
    if (tarjeta.classList.contains("oculto")) {
        btnToggle.textContent = "Mostrar tarjeta";
    } else {
        btnToggle.textContent = "Ocultar tarjeta";
    };
})

//ejercicio 7
const inpNombre = document.getElementById("inpNombre");
const inpProfesion = document.getElementById("inpProfesion");
const inpColor = document.getElementById("inpColor");
const btnGenerar = document.getElementById("btnGenerar");
const resultados = document.getElementById("resultados");
const avisoP = document.getElementById("avisoP");

btnGenerar.addEventListener("click", function () {
    const nombre = inpNombre.value.trim();
    const profesion = inpProfesion.value.trim();
    const color = inpColor.value;

    if (nombre ==="" || profesion==="") {
        avisoP.textContent ="Debes completar nombre y profesión";
        avisoP.style.color ="red";
        return;
    }

    avisoP.textContent ="";

    const tarjeta = document.createElement("div");
    tarjeta.style.border ="4px solid "+ color;
    tarjeta.style.borderRadius = "8px";
    tarjeta.style.padding ="12px";
    tarjeta.style.marginTop ="10px";

    const h3 = document.createElement("h3");
    h3.textContent = nombre;

    const p = document.createElement("p");
    p.textContent = "Profesión: " + profesion;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar tarjeta";
    btnEliminar.style.marginTop = "8px";
    btnEliminar.style.backgroundColor = "red";
    btnEliminar.style.color = "white";

    btnEliminar.addEventListener("click", function () {
        resultados.removeChild(tarjeta);
    });

    
    tarjeta.appendChild(h3);
    tarjeta.appendChild(p);
    tarjeta.appendChild(btnEliminar);
    resultados.appendChild(tarjeta);
    inpNombre.value = "";
    inpProfesion.value = "";
    inpColor.value = "#000000"; // opcional: resetear color
    inpNombre.focus();
});
