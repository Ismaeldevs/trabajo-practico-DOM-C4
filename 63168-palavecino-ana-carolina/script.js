const titulo = document.getElementById("titulo");
const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.addEventListener("click", function () {
    titulo.textContent = "¡Bienvenido al DOM!";
    titulo.style.color = "#ff69b4";
});


/* EJERCICIO 2 */

const cuadrado = document.getElementById("cuadrado");
const btnRojo = document.getElementById("btnRojo");
const btnAmarillo = document.getElementById("btnAmarillo");
const btnVerde = document.getElementById("btnVerde");

btnRojo.addEventListener("click", function () {
    cuadrado.style.backgroundColor = "red";
});

btnAmarillo.addEventListener("click", function () {
    cuadrado.style.backgroundColor = "yellow";
});

btnVerde.addEventListener("click", function () {
    cuadrado.style.backgroundColor = "green";
});


/* EJERCICIO 3 */

const inputUsuario = document.getElementById("usuario");
const inputContrasena = document.getElementById("contrasena");
const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");

inputUsuario.addEventListener("input", function () {
    mensaje.textContent = "";
});

inputContrasena.addEventListener("input", function () {
    mensaje.textContent = "";
});

btnLogin.addEventListener("click", function () {

    const usuario = inputUsuario.value.trim();
    const contrasena = inputContrasena.value.trim();

    if (usuario === "" || contrasena === "") {
        mensaje.textContent = "Completá todos los campos.";
        mensaje.style.color = "red";
    }
    else if (usuario === "carolina" && contrasena === "1234") {
        mensaje.textContent = "¡Bienvenid@, carolina!";
        mensaje.style.color = "#ff69b4";
        inputUsuario.value = "";
        inputContrasena.value = "";
    }
    else {
        mensaje.textContent = "Credenciales incorrectas.";
        mensaje.style.color = "red";
    }
});


/* EJERCICIO 4 */

const inputNombrePreview =
document.getElementById("inputNombrePreview");

const preview = document.getElementById("preview");

inputNombrePreview.addEventListener("input", function () {

    const nombre = inputNombrePreview.value.trim();

    if (nombre === "") {
        preview.textContent = "Escribí tu nombre arriba.";
        preview.style.color = "black";
    } else {
        preview.textContent = `Hola, ${nombre}!`;
        preview.style.color = "#ff69b4";
    }
});


/* EJERCICIO 5 */

const inputNombreInvitado =
document.getElementById("inputNombreInvitado");

const btnAgregar = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso = document.getElementById("aviso");

btnAgregar.addEventListener("click", function () {

    const nombre = inputNombreInvitado.value.trim();

    if (nombre === "") {
        aviso.textContent = "Ingresá un nombre.";
        return;
    }

    aviso.textContent = "";

    const li = document.createElement("li");
    li.textContent = nombre + " ";
    const btnEditar =
    document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.style.backgroundColor = "green";
    btnEditar.style.color = "white";

    btnEditar.addEventListener("click", function () {
        const nuevoNombre = prompt("Editá el nombre:", nombre);
        if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
            li.firstChild.textContent = nuevoNombre + " ";
        }
    });
    const btnQuitar = document.createElement("button");
    btnQuitar.textContent = "Quitar";
    btnQuitar.style.backgroundColor = "red";
    btnQuitar.style.color = "white";

    btnQuitar.addEventListener("click", function () {
        li.remove();
    });
    li.appendChild(btnEditar);
    li.appendChild(btnQuitar);
    listaInvitados.appendChild(li);

    inputNombreInvitado.value = "";
    inputNombreInvitado.focus();
});


/* EJERCICIO 6 */

const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function () {

    const oculta = tarjeta.classList.toggle("oculto");

    if (oculta) {
        btnToggle.textContent = "Mostrar";
    } else {
        btnToggle.textContent = "Ocultar";
    }
});


/* EJERCICIO 7 */
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

    if (nombre === "" || profesion === "") {
        avisoP.textContent = "Completá todos los campos.";
        return;
    }

    avisoP.textContent = "";

    const tarjetaNueva = document.createElement("div");

    tarjetaNueva.style.borderLeft = "6px solid " + color;
    tarjetaNueva.style.borderRadius = "8px";
    tarjetaNueva.style.padding = "12px";
    tarjetaNueva.style.marginTop = "10px";
    tarjetaNueva.style.backgroundColor = "#0addec";
    tarjetaNueva.style.width = "300px";
    tarjetaNueva.style.display = "inline-block";

    const h3 = document.createElement("h3");
    h3.textContent = nombre;

    const p = document.createElement("p");
    p.textContent = profesion;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar tarjeta";
    btnEliminar.style.backgroundColor = "red";
    btnEliminar.style.color = "white";
    btnEliminar.addEventListener("click", function () {
        tarjetaNueva.remove();
    });

    tarjetaNueva.appendChild(h3);
    tarjetaNueva.appendChild(p);
    tarjetaNueva.appendChild(btnEliminar);

    resultados.appendChild(tarjetaNueva);

    inpNombre.value = "";
    inpProfesion.value = "";
});















