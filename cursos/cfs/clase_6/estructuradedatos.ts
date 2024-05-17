import * as rls from 'readline-sync';
import { determinarParImpar } from "../clase_3/paroimpar";  // Reautilizada

// Definimos el arreglo
let numeros: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];

// Función para encontrar el número más grande del arreglo con los numeros que se den por consola

function encontrarNumeroMaximo(Newarray: number[]): number {
    let maximo = Newarray[0];
    let contador = 1; // Comenzamos desde el segundo elemento
    while (Newarray[contador] !== undefined) {
        let num = Newarray[contador];
        if (num > maximo) {
            maximo = num;
        }
        contador++;
    }
    return maximo;
}

// Almacenamos el número más grande en una variable global
let numeroMaximo = encontrarNumeroMaximo(numeros);

// Determinamos si el número más grande es par o impar utilizando la función de la clase 3
let resultado = determinarParImpar(numeroMaximo);
console.log(`El número más grande del arreglo es: ${numeroMaximo}`);
console.log(resultado);
