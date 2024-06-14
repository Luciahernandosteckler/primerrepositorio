// Escribe una función que tome dos números como parámetros y devuelva la suma de ambos.
// Crea una función que tome un arreglo de números como parámetro y devuelva el promedio de los elementos.
// Implementa una función que tome un arreglo de números como parámetro y devuelva el número más grande.
// Escribe una función que tome dos arreglos como parámetros y devuelva un nuevo arreglo que contenga los elementos de ambos arreglos concatenados.
// Implementa una función que tome un arreglo de números como parámetro y devuelva el resultado de multiplicar todos los elementos.
// Escribe una función que tome un número como parámetro y devuelva true si es primo, o false si no lo es.
// Crea una función que tome un elemento y un arreglo como parámetros, y devuelva la cantidad de veces que el elemento aparece en el arreglo.
// Implementa una función que tome dos números como parámetros y devuelva el número más pequeño.
// Escribe una función que tome un arreglo de números como parámetro y lo ordene de forma descendente.

// function sumar(a: number, b: number): number {
//     let resultado: number = a + b;
//     return resultado;
// }

// let numero1: number = 5;
// let numero2: number = 10;
// let suma: number = sumar(numero1, numero2);
// console.log(`la suma de ${numero1} y ${numero2} es + ${suma}`);

// 2

// function CalcularPromedio(datos: number[]): number {
//     let suma: number = 0;

//     for (let i = 0; i < datos.length; i++) {
//         suma += datos[i];
//     }
//     //acumular la suma de los elementos del arreglo en la variable suma

//     let promedio: number = suma / datos.length;

//     return promedio;
// }

// let numeros: number[] = [5, 6, 10, 23];
// let promedio: number = CalcularPromedio(numeros);
// let suma: number = 0;
// console.log(`El promedio de los numeros es: ${promedio}`);

//3 Numero mas grande

// function encontrarMaximo(numeros: number[]): number {
//     let maximo: number = numeros[0]; // busca desde la primer posicion

//     for (let i = 1; i < numeros.length; i++) {
//         if (numeros[i] > maximo) {
//             maximo = numeros[i]; //busca el maximo
//         }
//     }

//     return maximo;
// }

// let numeros: number[] = [3, 66, 89, 2, 1];
// let maximo: number = encontrarMaximo(numeros);
// console.log(`El número más grande es: ${maximo}`);

////4

//dos cadenas de texto 
import * as rls from "readline-sync";

function unirFrase(): string[] {
    let fraseInicial: string = rls.question("Ingrese un usuario: ");
    let frasesArray: string[] = [fraseInicial];
    let cantidadFrases: number = parseInt(rls.question("¿Cuántas frases adicionales?: "), 10);

    for (let i = 1; i <= cantidadFrases; i++) {
        let nuevaFrase: string = rls.question(`Ingrese la frase ${i}: `);
        frasesArray[i] = nuevaFrase;
    }

    return frasesArray;
}

const resultado = unirFrase();
console.log("Las frases ingresadas son:", resultado);
