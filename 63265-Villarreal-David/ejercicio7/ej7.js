const inpNombre = document.getElementById("inpNombre");
const inpProfesion = document.getElementById("inpProfesion");
const inpColor = document.getElementById("inpColor");
const btnGenerar = document.getElementById("btnGenerar");
const resultados = document.getElementById("resultados");
const avisoP = document.getElementById("avisoP");

btnGenerar.addEventListener("click", () => {

    const nombre = inpNombre.value.trim();
    const profesion = inpProfesion.value.trim();
    const color = inpColor.value;

    if (nombre === "" || profesion === "") {
        avisoP.textContent = "Completá nombre y profesion.";
        return;
    }

    avisoP.textContent = "";

    const tarjeta = document.createElement("div");

    tarjeta.style.borderLeft = "6px solid " + color;
    tarjeta.style.borderRadius = "8px";
    tarjeta.style.padding = "12px";
    tarjeta.style.marginTop = "10px";

    const h3 = document.createElement("h3");
    h3.textContent = nombre;

    const p = document.createElement("p");
    p.textContent = profesion;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar tarjeta";

    btnEliminar.addEventListener("click", () => {
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