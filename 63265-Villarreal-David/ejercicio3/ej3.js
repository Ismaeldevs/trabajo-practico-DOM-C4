const inputUsuario = document . getElementById ("usuario") ;
const inputContraseña = document . getElementById ("contraseña") ;
const btnLogin = document . getElementById ("btnLogin");
const mensaje = document . getElementById ("mensaje");


btnLogin.addEventListener ("click",() => {
    const usuario = inputUsuario.value.trim();
    const contraseña = inputContraseña.value.trim();

    if (usuario === "" && contraseña === "") {
        mensaje.textContent = "Por favor, Completa todos los campos.";
        mensaje.style.color = "red";
    return;
    }  
    
    const validarcredenciales =()=> {
        const usuarioRegistrado="admin";
        const passwordRegistrado="1234";
        if ( usuario===usuarioRegistrado && contraseña===passwordRegistrado){
            mensaje.textContent= 'Bienvenido, Admin!'
            mensaje.style.color="green"
            inputUsuario.value=""
            inputContraseña.value =""

        } else {
            mensaje.textContent = 'Credenciales incorrectas'
            mensaje.style.color = 'red'
            inputUsuario.value=""
            inputContraseña.value =""
            
        }
            
    }
    validarcredenciales()
});