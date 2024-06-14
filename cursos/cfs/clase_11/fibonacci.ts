// EJERCICIO FIBONACCI recursión

function calcularFibonacciRec(n: number): number {
    let resultado: number = 0;
    if (n > 1) {
        resultado = calcularFibonacciRec(n - 1) + calcularFibonacciRec(n - 2);
    } else {
        resultado = n;
    };
    return resultado;
}

// forma fibonacci interactiva

function calcularFibonacciSec(n: number): number {
    let resultado: number = 0;
    let indice: number, aux1: number, aux2: number;
    aux1 = 1;
    for (indice = 1; indice <= n; indice++) {
        aux2 = resultado;
        resultado = aux1;
        aux1 = aux2 + aux1;
    };
    return resultado;
}

let n: number = 10;  

console.log(`Fibonacci recursivo (${n}):`, calcularFibonacciRec(n));
console.log(`Fibonacci secuencial (${n}):`, calcularFibonacciSec(n));