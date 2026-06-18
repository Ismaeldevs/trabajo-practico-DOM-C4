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
    else if (usuario === "admin" && contrasena === "1234") {
        mensaje.textContent = "¡Bienvenido, admin!";
        mensaje.style.color = "green";
    }
    else {
        mensaje.textContent = "Credenciales incorrectas.";
        mensaje.style.color = "red";
    }
});