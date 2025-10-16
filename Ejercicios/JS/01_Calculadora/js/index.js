function calcular(num1, num2, operacion) {

    let resultado;

    if (operacion === "suma") {
        resultado = num1 + num2;

    } else if (operacion === "resta") {
        resultado = num1 - num2;

    } else if (operacion === "multiplicacion") {
        resultado = num1 * num2;

    } else if (operacion === "division") {
        if (num2 !== 0) {
            resultado = num1 / num2;

        } else {
            console.log("No se puede dividir entre cero");
            return;

        }
    } else {
        console.log("Operación invalida");
        return;

    }

    console.log("El resultado es: " + resultado);

}

let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let operacion = prompt("Ingresa la operación (suma / resta / multiplicacion / division):");
calcular(num1, num2, operacion)