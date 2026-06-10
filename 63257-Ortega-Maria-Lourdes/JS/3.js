const inputUsuario = document.getElementById("usuario");
const inputContrasenia = document.getElementById("contrasenia");
const botonIngresar = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");

const Limpiar = () => {
        mensaje.textContent ="";
}

const validarDatos = () => {
    const usuarioRegistrado = "admin";
    const contraseniaRegistrada = "1234";

    if (inputUsuario.value === usuarioRegistrado && inputContrasenia.value === contraseniaRegistrada ) {
        mensaje.textContent = "¡Bienvenido Admin!";
        mensaje.style.color = "green";
     

    }

     else if (inputUsuario.value === "" || inputContrasenia.value === ""){
        mensaje.textContent = "Completá todos los datos";
        mensaje.style.color = "red";
    
 
    } else {
        mensaje.textContent = "Credenciales incorrectas";
        mensaje.style.color = "red";
      
    }
    

}

botonIngresar.addEventListener("click", validarDatos);

inputUsuario.addEventListener("input", Limpiar);
inputContrasenia.addEventListener("input", Limpiar);