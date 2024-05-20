"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 3)Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
// -Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
// -Almacenar el numero más grande en una variable global y pasarlo a una función para determinar
// si el numero es par o impar
var rls = require("readline-sync");
// Definimos el arreglo
var numeros = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
// Pedimos un número al usuario
var numeroIngresado = rls.questionInt('Ingrese un número para comparar: ');
var esIgual = false;
// Comparamos el número ingresado con cada número del arreglo y actualizamos el número mayor
for (var i = 0; i < numeros.length; i++) {
    if (numeroIngresado === numeros[i]) {
        console.log("El n\u00FAmero ingresado (".concat(numeroIngresado, ") es igual que ").concat(numeros[i]));
        esIgual = true;
    }
    else if (numeroIngresado > numeros[i]) {
        console.log("El n\u00FAmero ingresado (".concat(numeroIngresado, ") es mayor que ").concat(numeros[i]));
    }
    else {
        console.log("El n\u00FAmero ingresado (".concat(numeroIngresado, ") es menor que ").concat(numeros[i]));
    }
}
// Si el número ingresado no fue igual a ningún número en el arreglo, lo indicamos
if (!esIgual) {
    console.log("El n\u00FAmero ingresado (".concat(numeroIngresado, ") no es igual a ning\u00FAn n\u00FAmero en el arreglo."));
}
// Determinamos si el número ingresado es par o impar
if (numeroIngresado % 2 === 0) {
    console.log("El n\u00FAmero ingresado (".concat(numeroIngresado, ") es par."));
}
else {
    console.log("El n\u00FAmero ingresado (".concat(numeroIngresado, ") es impar."));
}
