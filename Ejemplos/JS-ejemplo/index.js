const titulo = document.getElementById('titulo');
titulo.textContent = 'Nuevo texto';
titulo.style.color = 'red';
console.log(titulo);

const parrafos = document.getElementsByClassName('parrafo');
for(let i = 0; i < parrafos.length; i++){
    parrafos[i].style.background = 'lightgray';
    parrafos[i].style.color = 'black';
}
console.log(parrafos);

const enlaces = document.getElementsByTagName('a');
for(let i=0; i < enlaces.length; i++){
    enlaces[i].style.textDecoration = 'none';
}
console.log(enlaces);

const primerLi = document.querySelector('ul li');
console.log(primerLi);

const celdas = document.querySelectorAll('td');
const nuevosEstilos = {
    backgroundColor: 'seashell',
    color: 'black'
};
celdas.forEach(celda => {
    Object.assign(celda.style, nuevosEstilos);
});
console.log(celdas);

const contenedorP = document.querySelector('.container p');
console.log(contenedorP)

const imagen = document.getElementById('imagen');
imagen.src = 'img/cinnamonroll.webp';

const boton = document.getElementById('miBoton');
boton.addEventListener('click', function(){
    alert('Se hizo click')
})



