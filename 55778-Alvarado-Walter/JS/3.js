const inputUsuario = document.getElementById("usuario");
const inputContraseña = document.getElementById("contraseña");
const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");

inputUsuario.addEventListener("input", function() {
  mensaje.textContent = "";
});

inputContraseña.addEventListener("input", function() {
  mensaje.textContent = "" ;
});

btnLogin.addEventListener("click", function() {
  const usuario = inputUsuario.value.trim();
  const contraseña = inputContrasena.value.trim();

  if (usuario === "" || constraseña === ""){
    mensaje.textContent ="completa todos los campos";
    mensaje.style.color =  "red";
    return;
  }
  
  if(usuario === "admin" && contraseña ===  "12345"){
    mensaje.textContent =  "Bienvenido Admin";
    mensaje.style.color = "green";
  }
  else
  {
    mensaje.textContent = "usuario o contraseña incorrectas";
    mensaje.style.color = "red";
  }
});