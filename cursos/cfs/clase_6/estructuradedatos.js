"use strict";
// 3)Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
// -Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
// -Almacenar el numero más grande en una variable global y pasarlo a una función para determinar
// si el numero es par o impar
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var paroimpar_1 = require("../clase_3/paroimpar");
// Definimos el arreglo
var numeros = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
// Pedimos un número al usuario
var numeroIngresado = rls.questionInt('Ingrese un número para comparar: ');
// Inicializamos la variable para almacenar el número mayor
var numeroMayor = numeros[0];
// Comparamos el número ingresado con cada número del arreglo y actualizamos el número mayor
for (var i = 0; i < numeros.length; i++) {
    if (numeroIngresado > numeros[i]) {
        console.log("El n\u00FAmero ingresado (".concat(numeroIngresado, ") es mayor que ").concat(numeros[i]));
    }
    else { //texto alternativo
        console.log("El n\u00FAmero ingresado (".concat(numeroIngresado, ") no es mayor que ").concat(numeros[i]));
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
console.log("El n\u00FAmero mayor entre el arreglo y el n\u00FAmero ingresado es: ".concat(numeroMayor));
// Llamamos a la función para determinar si el número mayor es par o impar
(0, paroimpar_1.determinarParImpar)(numeroMayor);
