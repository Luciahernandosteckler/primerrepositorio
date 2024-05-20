// 3)Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
// -Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
// -Almacenar el numero más grande en una variable global y pasarlo a una función para determinar
// si el numero es par o impar

import * as rls from 'readline-sync';
// Definimos el arreglo
let numeros: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];

// Pedimos un número al usuario
let numeroIngresado = rls.questionInt('Ingrese un número para comparar: ');
let esIgual: boolean = false;

// Comparamos el número ingresado con cada número del arreglo y actualizamos el número mayor
for (let i = 0; i < numeros.length; i++) {
    if (numeroIngresado === numeros[i]) {
        console.log(`El número ingresado (${numeroIngresado}) es igual que ${numeros[i]}`);
        esIgual = true;
    } else if (numeroIngresado > numeros[i]) {
        console.log(`El número ingresado (${numeroIngresado}) es mayor que ${numeros[i]}`);
    } else {
        console.log(`El número ingresado (${numeroIngresado}) es menor que ${numeros[i]}`);
    }
}
// Si el número ingresado no fue igual a ningún número en el arreglo, lo indicamos

if (!esIgual) {
    console.log(`El número ingresado (${numeroIngresado}) no es igual a ningún número en el arreglo.`);
}

// Determinamos si el número ingresado es par o impar

if (numeroIngresado % 2 === 0) {
    console.log(`El número ingresado (${numeroIngresado}) es par.`);
} else {
    console.log(`El número ingresado (${numeroIngresado}) es impar.`);
}