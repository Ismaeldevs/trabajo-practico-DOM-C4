const inpNombre = document.getElementById("inpNombre");
const inpProfesion = document.getElementById("inpProfesion");
const inpColor = document.getElementById("inpColor");
const btnGenerar = document.getElementById("btnGenerar");
const resultados = document.getElementById("resultados");
const avisoP = document.getElementById("avisoP");

btnGenerar.addEventListener("click", function () {
    const nombre = inpNombre.value.trim();
    const profesion = inpProfesion.value.trim();
    const color = inpColor.value;

    
    if (nombre === "" || profesion === "") {
        avisoP.textContent = "Debe completar nombre y profesión.";
        return;
    }

    avisoP.textContent = "";

    
    const tarjeta = document.createElement("div");
    tarjeta.style.borderLeft = `10px solid ${color}`;
    tarjeta.style.padding = "10px";
    tarjeta.style.margin = "10px 0";

    const h3 = document.createElement("h3");
    h3.textContent = nombre;

    
    const p = document.createElement("p");
    p.textContent = profesion;

    
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar tarjeta";

    btnEliminar.addEventListener("click", function () {
        tarjeta.remove();
    });

    
    tarjeta.appendChild(h3);
    tarjeta.appendChild(p);
    tarjeta.appendChild(btnEliminar);

    
    resultados.appendChild(tarjeta);

    
    inpNombre.value = "";
    inpProfesion.value = "";
    inpNombre.focus();
});

console.log("hola")