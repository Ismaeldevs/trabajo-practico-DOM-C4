const inputUsuario = document.getElementById("usuario");
const inputContrasena = document.getElementById("contrasena");
const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");

// Limpiar el mensaje cuando el usuario empieza a escribir
inputUsuario.addEventListener("input", function() {
    mensaje.textContent = ""; // Borramos el texto del mensaje
});

inputContrasena.addEventListener("input", function() {
    mensaje.textContent = ""; // Borramos el texto del mensaje
});

btnLogin.addEventListener("click", function () {
    // El .trim() saca los espacios en blanco al principio y al final
    const usuario = inputUsuario.value.trim();
    const contrasena = inputContrasena.value.trim();

    // Validar campos vacíos
    if (usuario === "" || contrasena === "") {
        mensaje.textContent = "Completá todos los campos.";
        mensaje.style.color = "red";
    } 
    // Validar usuario y contraseña correctos
    else if (usuario === "admin" && contrasena === "1234") {
        mensaje.textContent = "¡Bienvenido, admin!";
        mensaje.style.color = "green";
    } 
    // Cualquier otro caso (Credenciales incorrectas)
    else {
        mensaje.textContent = "Credenciales incorrectas.";
        mensaje.style.color = "red";
    }
});