
// 3)Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
// -Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
// -Almacenar el numero más grande en una variable global y pasarlo a una función para determinar
// si el numero es par o impar

import * as rls from 'readline-sync';
import { determinarParImpar } from '../clase_3/paroimpar';

// Definimos el arreglo
let numeros: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];

// Pedimos un número al usuario
let numeroIngresado = rls.questionInt('Ingrese un número para comparar: ');

// Inicializamos la variable para almacenar el número mayor
let numeroMayor: number = numeros[0];

// Comparamos el número ingresado con cada número del arreglo y actualizamos el número mayor
for (let i = 0; i < numeros.length; i++) {
    if (numeroIngresado > numeros[i]) {
        console.log(`El número ingresado (${numeroIngresado}) es mayor que ${numeros[i]}`);
    } else { //texto alternativo
        console.log(`El número ingresado (${numeroIngresado}) no es mayor que ${numeros[i]}`);
    }
    // Consulta si el número actual del arreglo es el mayor
    if (numeros[i] > numeroMayor) {
        numeroMayor = numeros[i];
    }
}

// Compara el número ingresado con el número mayor del los datos del programa
if (numeroIngresado > numeroMayor) {
    numeroMayor = numeroIngresado;
}

// Mostramos el número mayor encontrado
console.log(`El número mayor entre el arreglo y el número ingresado es: ${numeroMayor}`);

// Llamamos a la función para determinar si el número mayor es par o impar
determinarParImpar(numeroMayor);
