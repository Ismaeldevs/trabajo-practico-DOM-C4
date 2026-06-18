const nombre = document.getElementById("nombre")
const parrafoNombre = document.getElementById("parrafoNombre")

nombre.addEventListener("input", ()=>{
    parrafoNombre.textContent = `Hola! ${nombre.value.trim()}` 
})

nombre.addEventListener("input", ()=>{
    if (!nombre.value.trim()){
       parrafoNombre.textContent = "Escribi tu nombre arriba" 
    }
})