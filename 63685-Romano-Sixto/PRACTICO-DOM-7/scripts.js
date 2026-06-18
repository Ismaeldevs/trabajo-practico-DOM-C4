const inpNombre = document.getElementById("inpNombre");
const inpProfesion = document.getElementById("inpProfesion");
const inpColor = document.getElementById("inpColor");
const btnGenerar = document.getElementById("btnGenerar");
const avisoP = document.getElementById("avisoP");

btnGenerar.addEventListener("click", () => {
    const nombre = inpNombre.value;
    const profesion = inpProfesion.value;
    const color = inpColor.value;
    if (nombre === "" || profesion === "") {
        avisoP.textContent = "Por favor, complete nombre y profesión.";
    }

    avisoP.textContent = "";

    const tarjeta = document.createElement("div");

    tarjeta.style.borderLeft = `6px solid ${color}`;
    tarjeta.style.borderRadius = "8px";
    tarjeta.style.padding = "12px";
    tarjeta.style.marginTop = "10px";
    tarjeta.style.backgroundColor = "#f0f0f0";

    const titulo = document.createElement("h3");
    titulo.textContent = nombre;

    const texto = document.createElement("p");
    texto.textContent = profesion;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar Tarjeta";

    btnEliminar.addEventListener("click", () => {
        tarjeta.remove();
    });

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(texto);
    tarjeta.appendChild(btnEliminar);

    resultados.appendChild(tarjeta);

    inpNombre.value = "";
    inpProfesion.value = "";
});
