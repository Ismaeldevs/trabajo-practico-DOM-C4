const inputUsuario = document.getElementById("usuario");
const inputPassword = document.getElementById("contraseña");
const btnLogin = document.getElementById("btnLogin");
const parrafo = document.getElementById("mensaje")



btnLogin.addEventListener ("click", () => {
    const usuario = inputUsuario.value;
    const contraseña = inputPassword.value;

    if (usuario === "" || contraseña === "") {
        parrafo.textContent = "Completa todos los campos";
        parrafo.style.color = "red";
        return;
    }

    const validarCredenciales =() =>{
    
    const usuarioRegistrado ="Alvaro";
    const passwordRegistrado ="1234";

    if(usuario===usuarioRegistrado && contraseña===passwordRegistrado){
        parrafo.textContent =`Bienvenido ${usuarioRegistrado}`
        parrafo.style.color = "green";
        inputUsuario.value ="";
            inputPassword.value=""
    } else {
            parrafo.textContent = "Usuario o contraseña incorrectos";
            parrafo.style.color = "red";
            inputUsuario.value ="";
            inputPassword.value=""
        }

}
validarCredenciales();
})