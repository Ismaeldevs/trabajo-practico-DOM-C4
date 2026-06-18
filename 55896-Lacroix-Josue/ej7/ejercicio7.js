const nombre = document.getElementById("nombre");
const descripcion = document.getElementById("descripcion");
const btnCrear = document.getElementById("btnCrear");
const perfil = document.getElementById("perfil");

btnCrear.addEventListener("click", function () {

    const nombreUsuario = nombre.value.trim();
    const descripcionUsuario = descripcion.value.trim();

    if (nombreUsuario === "" || descripcionUsuario === "") {

        alert("Completá todos los campos");
        return;

    }

    perfil.innerHTML = `
        <div style="border:1px solid black; padding:10px; width:250px;">
            <h3>${nombreUsuario}</h3>
            <p>${descripcionUsuario}</p>
        </div>
    `;

});