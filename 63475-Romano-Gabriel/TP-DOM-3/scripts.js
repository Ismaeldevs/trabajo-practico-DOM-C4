const inputUsuario = document.getElementById("usuario");
const inputPassword = document.getElementById("contraseña");
const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");

inputUsuario.addEventListener("input", function() {
    mensaje.textContent = "";
});

inputPassword.addEventListener("input", function() {
    mensaje.textContent = "";
});

btnLogin.addEventListener("click", function() {
    const usuario = inputUsuario.value.trim();
    const contraseña = inputPassword.value.trim();

    if (usuario === "Gabriel" && contraseña === "12345678") {
        mensaje.textContent = "¡Bienvenido, admin!";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Usuario o contraseña incorrectos.";
        mensaje.style.color = "red";
    }
});