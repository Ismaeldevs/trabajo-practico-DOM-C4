const inputUsuario = document.getElementById("usuario");
const inputContrasena = document.getElementById("contrasenia");
const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");

function Limpiar(){
    inputUsuario.value = "";
    inputContrasena.value = "";
}

inputUsuario.addEventListener("input",function() {
    mensaje.textContent = "";
})

inputContrasena.addEventListener("input", function() {
    mensaje.textContent = "";
})

const IniciarSesio = () => {
    const contrasenaRegistrada = "1234"; 
    const usuarioRegistrado = "Matias";

    if(inputContrasena.value === "" || inputUsuario.value === ""){
        mensaje.textContent = "Complete todos los campos";
        mensaje.style.color = "red";
        
    } else if(contrasenaRegistrada === inputContrasena.value && usuarioRegistrado === inputUsuario.value){
        mensaje.style.color = "green";
        mensaje.textContent = "BIENVENIDO " + usuarioRegistrado;
        
    } else {
        mensaje.style.color = "red";
        mensaje.textContent = "Credencial incorrecta";
        
    }
    Limpiar();
};



btnLogin.addEventListener("click", IniciarSesio,Limpiar);
