const inputNombre = document.getElementById("inputNombre");
const preview = document.getElementById("preview");

inputNombre.addEventListener("input", function(){
 const nombre = inputNombre.value.trim();

 if(nombre === ""){
 preview.textContent="Escribi tu nombre arriba";
 }
 else {
    preview.textContent = "Hola, "+ nombre + "!";
 }
})