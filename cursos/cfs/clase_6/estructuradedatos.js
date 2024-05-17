"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paroimpar_1 = require("../clase_3/paroimpar"); // Reautilizada
// Definimos el arreglo
var numeros = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
// Función para encontrar el número más grande del arreglo con los numeros que se den por consola
function encontrarNumeroMaximo(Newarray) {
    var maximo = Newarray[0];
    var contador = 1; // Comenzamos desde el segundo elemento
    while (Newarray[contador] !== undefined) {
        var num = Newarray[contador];
        if (num > maximo) {
            maximo = num;
        }
        contador++;
    }
    return maximo;
}
// Almacenamos el número más grande en una variable global
var numeroMaximo = encontrarNumeroMaximo(numeros);
// Determinamos si el número más grande es par o impar utilizando la función de la clase 3
var resultado = (0, paroimpar_1.determinarParImpar)(numeroMaximo);
console.log("El n\u00FAmero m\u00E1s grande del arreglo es: ".concat(numeroMaximo));
console.log(resultado);
