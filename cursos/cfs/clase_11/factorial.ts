//Ejemplo de recursion

const array: number[] = [1, 2, 3, 4, 5];

function imprimirArregloRec(arreglo: number[], indice: number, largo: number): number {
    if (indice < largo) {
        console.log(`posición ${indice} tiene: ${imprimirArregloRec(arreglo, indice + 1, largo)}`);
    }
    return arreglo[indice - 1];
}

function imprimirArregloSec(arreglo: number[], largo: number) {
    let indice: number;
    for (indice = 0; indice < largo; indice++) {
        console.log(`posición ${indice} tiene: ${arreglo[indice]}`);
    }
}

function calcularFactorialRec(n: number): number {
    if (n == 0) {
        return 1;
    } else {
        return n * calcularFactorialRec(n - 1);
    }

}

function calcularFactorialSec(n: number): number {
    let resultado: number = 1;
    let indice: number;
    for (indice = 2; indice <= n; indice++) {
        resultado = resultado * indice;
    }
    return resultado;
}


console.log("Imprimir arreglo recursivamente:");
imprimirArregloRec(array, 0, array.length);

console.log("Imprimir arreglo secuencialmente:");
imprimirArregloSec(array, array.length);

const numFactorial: number = 5;
console.log(`Factorial de ${numFactorial} (recursivo): ${calcularFactorialRec(numFactorial)}`);

console.log(`Factorial de ${numFactorial} (secuencial): ${calcularFactorialSec(numFactorial)}`);

