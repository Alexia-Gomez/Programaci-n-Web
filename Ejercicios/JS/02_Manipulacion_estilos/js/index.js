const contenedor = document.querySelector('.container');
const body = document.body;

const botonR = document.getElementById('btnRojo');
botonR.addEventListener('click', function(){
    contenedor.style.backgroundColor = 'red';
    body.style.backgroundColor = 'red';
});

const botonV = document.getElementById('btnVerde');
botonV.addEventListener('click', function(){
    contenedor.style.backgroundColor = 'green';
    body.style.backgroundColor = 'green';
});

const botonA = document.getElementById('btnAzul');
botonA.addEventListener('click', function(){
    contenedor.style.backgroundColor = 'blue';
    body.style.backgroundColor = 'blue';
});

const boton = document.getElementById('btnRes');
boton.addEventListener('click', function(){
    contenedor.style.backgroundColor = 'white';
    body.style.backgroundColor = 'white';
});

