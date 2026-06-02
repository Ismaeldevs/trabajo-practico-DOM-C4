const titulo = document.getElementById("titulo");
const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.addEventListener("click", () => {
  if(titulo.textContent === "Bienvenido al DOM!" ){
    titulo.style.color = "";
    titulo.textContent = "Esperando cambio...";
    return
  }
  
  titulo.style.color = "navy";
  titulo.textContent = "Bienvenido al DOM!";
});

