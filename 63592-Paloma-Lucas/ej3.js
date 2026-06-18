// Seleccionar por id
const inputUsuario    = document.getElementById("usuario");
const inputContrasena = document.getElementById("contrasena");
const btnLogin        = document.getElementById("btnLogin");
const mensaje         = document.getElementById("mensaje");


inputUsuario.addEventListener("input", function () {
  mensaje.textContent = "";
});

inputContrasena.addEventListener("input", function () {
  mensaje.textContent = "";
});


btnLogin.addEventListener("click", function () {

  const usuario    = inputUsuario.value.trim();
  const contrasena = inputContrasena.value.trim();

  if (usuario === "" || contrasena === "") {
    mensaje.textContent = "⚠️ Completa todos los campos.";
    mensaje.style.color = "#f1c40f";
    return;
  }

  if (usuario === "admin" && contrasena === "1234") {
    mensaje.textContent = "✅ Bienvenido, admin!";
    mensaje.style.color = "#2ecc71";

    inputUsuario.value = "";
    inputContrasena.value = "";

  } else {
    mensaje.textContent = "❌ Credenciales incorrectas.";
    mensaje.style.color = "#e74c3c";
  }

});