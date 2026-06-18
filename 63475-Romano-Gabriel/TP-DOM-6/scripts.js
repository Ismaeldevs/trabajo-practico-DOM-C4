const tarjeta = document.getElementById('tarjeta');
const btnToggle = document.getElementById('btnToggle');

btnToggle.addEventListener('click', () => {
    const oculto = tarjeta.classList.toggle('oculto');
    if (oculto) {
        btnToggle.textContent = 'Mostrar Tarjeta';
    } else {
        btnToggle.textContent = 'Ocultar Tarjeta';
    }
});