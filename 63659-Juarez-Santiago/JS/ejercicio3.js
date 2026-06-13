const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const boton = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {

    const user = usuario.value;
    const pass = password.value;

usuario.value = "";
 password.value = "";
    if (user === "" || pass === "") {
        mensaje.textContent = "Completá todos los campos.";
        mensaje.style.color = "red";
    }
    else if (user === "admin" && pass === "1234") {
        mensaje.textContent = "¡Bienvenido, admin!";
        mensaje.style.color = "green";
    }
    else {
        mensaje.textContent = "Credenciales incorrectas.";
        mensaje.style.color = "red";
  
        }
});

usuario.addEventListener("input", function() {
    mensaje.textContent = "";
      
    
});

password.addEventListener("input", function() {
    mensaje.textContent = "";
   
});