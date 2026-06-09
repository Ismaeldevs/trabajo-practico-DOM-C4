const cuadro = document.getElementById ("cuadro");
const btnRojo = document.getElementById ("btnRojo");
const btnAmarillo = document.getElementById ("btnAmarillo");
const btnVerde = document.getElementById ("btnVerde");

btnRojo.addEventListener("click", () =>{
    cuadro.style.background="red";
})

btnAmarillo.addEventListener("click", () =>{
    cuadro.style.background="yellow";
})

btnVerde.addEventListener("click", () =>{
    cuadro.style.background="green"
})