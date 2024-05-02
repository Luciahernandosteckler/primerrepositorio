import * as readlineSync from "readline-sync";

function determinarParImpar(numero: number): string {
    if (numero === 0) {
        return "El número es 0";
    } else if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

const numeroIngresado = readlineSync.question("Ingrese un número: ");
const numero = parseInt(numeroIngresado);

const resultado = determinarParImpar(numero);
console.log(resultado);