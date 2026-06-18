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

    const tarjeta = document.createElement("div");
    tarjeta.style.borderLeft = "6px solid " + color;
    tarjeta.style.borderRadius = "8px";
    tarjeta.style.padding = "12px";
    tarjeta.style.marginTop = "10px";

    const titulo = document.createElement("h3");
    titulo.textContent = nombre;

    const texto = document.createElement("p");
    texto.textContent = profesion;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar tarjeta";

    btnEliminar.addEventListener("click", function () {
        tarjeta.remove();
    });

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(texto);
    tarjeta.appendChild(btnEliminar);

    resultados.appendChild(tarjeta);

    inpNombre.value = "";
    inpProfesion.value = "";
});