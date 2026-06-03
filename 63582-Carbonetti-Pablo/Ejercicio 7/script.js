// Ejercicio 7 - Generador de tarjetas de perfil.

const inpNombre = document.getElementById("inpNombre");
const inpProfesion = document.getElementById("inpProfesion");
const inpColor = document.getElementById("inpColor");
const btnGenerar = document.getElementById("btnGenerar");
const avisoP = document.getElementById("avisoP");
const resultados = document.getElementById("resultados");

btnGenerar.addEventListener("click", function() {
    if (inpNombre.value.trim() === "" || inpProfesion.value.trim() === "") {
        avisoP.textContent = "Ingrese un nombre o profesion."
        return;
    } 

    avisoP.textContent = "";

    const tarjeta = document.createElement("div");
    tarjeta.style.cssText = `
        padding: 12px;
        margin-top: 10px;
        border-radius: 8px;
        border-left: 4px solid ${inpColor.value}
    `;

    const h3 = document.createElement("h3");
    h3.textContent = inpNombre.value;
    tarjeta.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = inpProfesion.value;
    tarjeta.appendChild(p);

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar tarjeta"
    
    btnEliminar.addEventListener("click", function() {
        tarjeta.remove();
    });

    tarjeta.appendChild(btnEliminar);

    resultados.appendChild(tarjeta);

    inpNombre.value = "";
    inpProfesion.value = "";
});