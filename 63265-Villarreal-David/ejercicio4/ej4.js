const inputNombre=document.getElementById ("inputNombre");
const preview=document.getElementById ("preview");


inputNombre.addEventListener  ("input",() => {
    const nombre=inputNombre.value;
 if(nombre===""){
    preview.textContent=`escriba arriba su nombre`;
 } else {
    preview.textContent= `Hola, ${nombre}`;
 }

});