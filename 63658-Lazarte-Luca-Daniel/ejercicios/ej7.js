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
        avisoP.textContent = "Completá nombre y profesión.";
        return;
    }
    
    avisoP.textContent = "";

    const divTarjeta = document.createElement("div");
    divTarjeta.style.borderLeft = "6px solid " + color;
    divTarjeta.style.borderRadius = "8px";
    divTarjeta.style.padding = "12px";
    divTarjeta.style.marginTop = "10px";
    divTarjeta.style.backgroundColor = "#fff";
    divTarjeta.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";

    const h3 = document.createElement("h3");
    h3.style.marginTop = "0";
    h3.textContent = nombre;

    const p = document.createElement("p");
    p.textContent = profesion;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar tarjeta";
    btnEliminar.addEventListener("click", function () {
        divTarjeta.remove();
    });

    // Se respeta el orden de la jerarquía solicitado
    divTarjeta.appendChild(h3);
    divTarjeta.appendChild(p);
    divTarjeta.appendChild(btnEliminar);

    resultados.appendChild(divTarjeta);

    // Vaciamos los inputs para mejorar la experiencia de usuario
    inpNombre.value = "";
    inpProfesion.value = "";
});