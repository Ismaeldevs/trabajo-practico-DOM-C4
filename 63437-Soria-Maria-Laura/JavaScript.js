/*//ejercicio 1

const titulo = document.getElementById("titulo");
const bntCambiar = document.getElementById("btnCambiar");

bntCambiar.addEventListener ("click", function () {
    titulo.textContent = "¡Bienvenido al DOM!";
    titulo.style.color = "navy";
});*/

/*//ejercicio 2

const btnRojo = document.getElementById ("btnRojo");
const btnAmarillo = document.getElementById ("btnAmarillo");
const btnVerde = document.getElementById ("btnVerde");
const cuadrado = document.getElementById ("cuadrado");

btnAmarillo.addEventListener ("click", function () {
    cuadrado.style.backgroundColor = "yellow";
});

btnRojo.addEventListener ("click", function () {
    cuadrado.style.backgroundColor = "red";
});

btnVerde.addEventListener ("click", function () {
    cuadrado.style.backgroundColor = "green";
});*/

/*//ejercicio 3

const inputUsuario = document.getElementById ("usuario");
const inputContraseña = document.getElementById ("contraseña");
const btnLogin = document.getElementById ("btnLogin");
const mensaje = document.getElementById ("mensaje");

inputUsuario.addEventListener ("input", function () {
    mensaje.textContent = "";
});

inputContraseña.addEventListener ("input", function () { 
    mensaje.textContent = "";
});

btnLogin.addEventListener ("click", function () { 
    const usuario = inputUsuario.value.trim();
    const contraseña = inputContraseña.value.trim();

    if (usuario === "" || contraseña === "") {
        mensaje.textContent = "Completa todos los campos";
        mensaje.style.color = "red";
    }
    else if (usuario === "admin" && contraseña === "1234") {
        mensaje.textContent = "¡Bienvenido, admin!";
        mensaje.style.color = "green";
    }
    else {
        mensaje.textContent = "Credenciales incorrectas";
        mensaje.style.color = "red";
    }
});*/

/*// ejercicio 4

const inputNombre = document.getElementById ("inputNombre");
const preview = document.getElementById ("preview");

inputNombre.addEventListener ("input", function () {
    if (inputNombre.value.trim() === "") {
        preview.textContent = "Escribí tu nombre arriba";
    }
    else {
        preview.textContent = "Hola " + inputNombre.value + "!";
    }   
} );*/

/*//ejercicio 5

const inputNombre = document.getElementById ("inputNombre");
const btnAgregar = document.getElementById ("btnAgregar");
const aviso = document.getElementById ("aviso");
const listaInvitados = document.getElementById ("listaInvitados");

btnAgregar.addEventListener ("click", function () {
    const nombre = inputNombre.value.trim();
    if ( nombre === "" ) {
        aviso.textContent = "Debe completar el campo";
        return;
    }

    aviso.textContent = "";
    
    const li = document.createElement ("li");
    
    li.textContent = nombre;

    const btnQuitar = document.createElement ("button");
    
    btnQuitar.textContent = "Quitar";
    btnQuitar.style.marginLeft = "10px";

    btnQuitar.addEventListener ("click", function () {
        li.remove();
    });

    li.appendChild (btnQuitar);

    listaInvitados.appendChild (li);

    inputNombre.value = "";
    inputNombre.focus();
});
*/

/*//ejercicio 6

const tarjeta = document.getElementById ("tarjeta");
const btnToggle = document.getElementById ("btnToggle");

btnToggle.addEventListener ("click", function () {
    tarjeta.classList.toggle("oculto");
    btnToggle.textContent = "Mostrar";
});*/

//ejercicio 7

const inpNombre = document.getElementById ("inpNombre");
const inpProfesion = document.getElementById ("inpProfesion");
const inpColor = document.getElementById ("inpColor");
const btnGenerar = document.getElementById ("btnGenerar");
const avisoP = document.getElementById ("avisoP");
const resultados = document.getElementById ("resultados");

btnGenerar.addEventListener ("click", function() { 
    const nombre = inpNombre.value.trim(); 
    const profesion = inpProfesion.value.trim(); 
    const color = inpColor.value;

    if ( inpNombre === ""  || inpProfesion === "") {
        avisoP.textContent = "Complete los campos";
    }
    
    avisoP.textContent = "";

    const tarjeta = document.createElement ("div");
    tarjeta.style.border = "4px solid" + color;
    tarjeta.style.borderRadius = " 8px";
    tarjeta.style.padding = "12px";
    tarjeta.style.marginTop = "10px";

    const h3 = document.createElement ("h3");
    h3.textContent = nombre;

    const p = document.createElement ("p");
    p.textContent = profesion;

    const btnEliminar = document.createElement ("button");
    btnEliminar.textContent = "Eliminar tarjeta";

    btnEliminar.addEventListener ("click", function () {
        tarjeta.remove();
    })

    tarjeta.appendChild(h3);
    tarjeta.appendChild(p);
    tarjeta.appendChild(btnEliminar);

    resultados.appendChild(tarjeta);

    inpNombre.value = "";
    inpProfesion.value = "";
    inpNombre.focus();

});