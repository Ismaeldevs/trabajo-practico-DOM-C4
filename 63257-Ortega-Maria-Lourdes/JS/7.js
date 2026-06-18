const inputNombre = document.getElementById("inputNombre");
const inputProfesion = document.getElementById("inputProfesion");
const inputColor = document.getElementById("inputColor");
const btnGenerar = document.getElementById("btnGenerar");
const aviso = document.getElementById("aviso");
const resultados = document.getElementById("resultados");


const Limpiar =() => {
    inputNombre.value = "";
    inputProfesion.value =""
    aviso.textContent = "";
    inputColor.value = "#3b82f6";
}

const generarTarjeta = () => {
    const nombre = inputNombre.value.trim();
    const profesion = inputProfesion.value.trim();
    const color = inputColor.value;

    if (nombre === "" || profesion === ""){
        aviso.textContent = "No se puede generar una tarjeta si el nombre o la profesión están vacíos.";
    
    } else {

        const tarjeta = document.createElement("div");
        tarjeta.style.borderLeft = "4px solid" + color;
        tarjeta.style.borderRadius ="8px";
        tarjeta.style.padding = "12px";
        tarjeta.style.marginTop = "10px";

        const h3 = document.createElement("h3");
        h3.textContent = nombre;
        
        const p = document.createElement("p");
        p.textContent= profesion;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";

        btnEliminar.addEventListener("click", () =>{
            tarjeta.remove();
        })

        tarjeta.appendChild(h3);
        tarjeta.appendChild(p);
        tarjeta.appendChild(btnEliminar);

        resultados.appendChild(tarjeta);

        Limpiar();
    }
}

btnGenerar.addEventListener("click", generarTarjeta);
