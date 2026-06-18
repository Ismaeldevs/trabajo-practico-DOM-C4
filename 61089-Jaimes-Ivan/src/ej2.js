const divColor = document.getElementById('divColor');
const btnRojo = document.getElementById('btnRojo');
const btnAmarillo = document.getElementById('btnAmarillo');
const btnVerde = document.getElementById('btnVerde');

btnRojo.addEventListener('click', () => {
    divColor.style.backgroundColor = 'red';
})

btnAmarillo.addEventListener('click', () => {
    divColor.style.backgroundColor = 'yellow';
})

btnVerde.addEventListener('click', () => {
    divColor.style.backgroundColor = 'green';
})