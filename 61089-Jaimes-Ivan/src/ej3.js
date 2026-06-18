const estado = document.getElementById("estado");
const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
const ingresarBtn = document.getElementById('btnIngresar');

usuario.addEventListener("input", () => {
    estado.textContent = "";
});

contraseña.addEventListener("input", () => {
    estado.textContent = "";
});

ingresarBtn.addEventListener("click", () => {
    const valorUsuario = usuario.value
    const valorContraseña = contraseña.value
    
    if(!valorUsuario.trim() || !valorContraseña.trim()){
        estado.textContent = "Completa los campos"
        estado.style.color = "red"
        return
    }

    if(valorContraseña.toLowerCase() === "admin" && valorUsuario.toLowerCase() === "admin"  ){
        estado.textContent = "Bienvenido Admin"
        estado.style.color = "green"
        usuario.value = ""
        contraseña.value = ""
    }else{
        estado.textContent = "Credenciales incorrectas"
        estado.style.color = "red"
        return
    }
});
