const cardDinamica = document.getElementById("cardDinamica")
const ocultarCardBtn = document.getElementById("ocultarCardBtn")

ocultarCardBtn.addEventListener("click", () => {
    cardDinamica.classList.toggle("oculto")
    if (cardDinamica.classList.contains("oculto")){
        ocultarCardBtn.textContent = "Mostrar"
    }else{
        ocultarCardBtn.textContent = "Ocultar"
    }
    
})

