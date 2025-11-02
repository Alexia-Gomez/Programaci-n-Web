import { dataEntry } from "./math.js";

const botones= document.querySelectorAll('button');

botones.forEach(boton => {
    boton.addEventListener('click', function(){
        const value= this.dataset.value;
        dataEntry(value);
    });
});

document.addEventListener('keydown', function(e){
    let key= e.key;
    if (key === 'Enter'){
        key= '=';
    }
    dataEntry(key);
});