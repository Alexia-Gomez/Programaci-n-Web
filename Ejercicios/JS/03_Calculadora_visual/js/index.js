const input= document.getElementById('input');
const history= document.querySelector('.history');
const botones= document.querySelectorAll('button');

let num1= null;
let operador= null;
let inputA= "";

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

function dataEntry(value){

    if(!isNaN(value)){
        inputA+= value;
        input.value= inputA;

    } else if (value=== '+' || value=== '-' || value=== '/' || value==='*'){
        if(inputA !== ""){
            num1= parseInt(inputA);
            op= value;
            inputA = "";
        }

    } else if (value.toLowerCase() === 'c' || value=== 'Escape'){
        inputA= "";
        num1= null;
        op=null;
        input.value= "";

    } else if (value== '=' || value==='Enter'){
        if(num1!= null && op!= null){
            const num2= parseInt(inputA);
            let res;

            switch(op){
                case '+':
                    res= num1 + num2;
                    break;
                case '-':
                    res= num1 - num2;
                    break;
                case '/':
                    res= num1 / num2;
                    break;
                case '*':
                    res= num1 * num2
                    break;
            }

            input.value= res;
            inputA= res.toString();
            addHistory(`${num1} ${op} ${num2} = ${res}`)

            num1= null;
            op= null;
        }
    }
}

function addHistory(txt){
    //console.log(value);
    const p= document.createElement('p');
    p.textContent=txt;
    history.appendChild(p);
    history.scrollTop= history.scrollHeight;
}