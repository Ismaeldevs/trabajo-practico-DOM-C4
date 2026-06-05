const inpNombre = document.getElementById("inpNombre"); 
const inpProfesion = document.getElementById("inpProfesion"); 
const inpColor = document.getElementById("inpColor"); 
const btnGenerar = document.getElementById("btnGenerar"); 
const resultados = document.getElementById("resultados"); 
const avisoP = document.getElementById("avisoP"); // 

btnGenerar.addEventListener("click", function() { 
    const nombre = inpNombre.value.trim(); 
    const profesion = inpProfesion.value.trim(); 
    const color = inpColor.value; 

    // Validar que nombre y profesión no estén vacíos 
    if (nombre === "" || profesion === "") {
        avisoP.textContent = "Por favor, completá el nombre y la profesión.";
        return; // Cortamos la ejecución para que no se cree la tarjeta
    }
    
    // Si está todo bien, limpiamos el aviso de error por si había quedado visible
    avisoP.textContent = "";

    // Crear la tarjeta: un <div> 
    const tarjeta = document.createElement("div");
    
    // Darle estilos a la tarjeta usando JS 
    tarjeta.style.borderLeft = "6px solid " + color; // Usamos la pista del apunte 
    tarjeta.style.borderRadius = "8px"; 
    tarjeta.style.padding = "12px"; 
    tarjeta.style.marginTop = "10px"; 
    tarjeta.style.backgroundColor = "#f0f0f0"; // Le sumamos un fondo gris clarito para que se distinga

    // Crear el <h3> con el nombre 
    const h3Nombre = document.createElement("h3");
    h3Nombre.textContent = nombre;

    // Crear el <p> con la profesión 
    const pProfesion = document.createElement("p");
    pProfesion.textContent = profesion;

    // Crear el botón "Eliminar tarjeta" 
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar tarjeta"; // 
    
    // Al igual que en el ej 5, este botón "recuerda" a su tarjeta padre
    btnEliminar.addEventListener("click", function() {
        tarjeta.remove();
    });

    // Armar la jerarquía y agregar al DOM 
    // El orden importa: primero agregamos el h3, después el p y por último el botón 
    tarjeta.appendChild(h3Nombre);
    tarjeta.appendChild(pProfesion);
    tarjeta.appendChild(btnEliminar);

    // Finalmente, insertamos la tarjeta ya armada adentro del div principal de resultados
    resultados.appendChild(tarjeta);

    // Opcional: Limpiamos los inputs para que sea más fácil cargar el próximo
    inpNombre.value = "";
    inpProfesion.value = "";
    inpNombre.focus();
});