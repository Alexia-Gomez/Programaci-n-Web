import {addHistory, updateInputA} from './ui.js';

let num1= null;
let op= null;
let inputA= "";

export function dataEntry(value){

    if(!isNaN(value)){
        inputA+= value;
        updateInputA(inputA);

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
        updateInputA("");

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

            updateInputA(res);
            inputA= res.toString();
            addHistory(`${num1} ${op} ${num2} = ${res}`)

            num1= null;
            op= null;
        }
    }
}