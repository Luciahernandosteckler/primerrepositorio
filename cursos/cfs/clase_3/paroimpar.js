"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function determinarParImpar(numero) {
    if (numero === 0) {
        return "El número es 0";
    }
    else if (numero % 2 === 0) {
        return "El número es par";
    }
    else {
        return "El número es impar";
    }
}
var numeroIngresado = readlineSync.question("Ingrese un número: ");
var numero = parseInt(numeroIngresado);
var resultado = determinarParImpar(numero);
console.log(resultado);
