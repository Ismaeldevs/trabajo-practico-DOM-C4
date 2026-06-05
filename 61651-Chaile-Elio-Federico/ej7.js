const inpNombre = document.getElementById("inpNombre"); 
const inpProfesion = document.getElementById("inpProfesion"); 
const inpColor = document.getElementById("inpColor"); 
const btnGenerar = document.getElementById("btnGenerar"); 
const resultados = document.getElementById("resultados"); 
const avisoP = document.getElementById("avisoP"); 

btnGenerar.addEventListener("click", function() { 
    const nombre = inpNombre.value.trim(); 
    const profesion = inpProfesion.value.trim(); 
    const color = inpColor.value; 


    if (nombre === "" || profesion === "") {
        avisoP.textContent = "Por favor, completá el nombre y la profesión.";
        return; 
    }
    
    avisoP.textContent = "";


    const tarjeta = document.createElement("div");
    

    tarjeta.style.borderLeft = "6px solid " + color; 
    tarjeta.style.borderRadius = "8px"; 
    tarjeta.style.padding = "12px"; 
    tarjeta.style.marginTop = "10px"; 
    tarjeta.style.backgroundColor = "#f0f0f0"; 


    const h3Nombre = document.createElement("h3");
    h3Nombre.textContent = nombre;


    const pProfesion = document.createElement("p");
    pProfesion.textContent = profesion;


    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar tarjeta"; 
    

    btnEliminar.addEventListener("click", function() {
        tarjeta.remove();
    });

    tarjeta.appendChild(h3Nombre);
    tarjeta.appendChild(pProfesion);
    tarjeta.appendChild(btnEliminar);

    
    resultados.appendChild(tarjeta);

    inpNombre.value = "";
    inpProfesion.value = "";
    inpNombre.focus();
});
