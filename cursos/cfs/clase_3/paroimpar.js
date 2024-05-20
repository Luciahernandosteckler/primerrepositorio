"use strict";
// import * as readlineSync from "readline-sync"; // Entrada de usuario 
Object.defineProperty(exports, "__esModule", { value: true });
exports.determinarParImpar = void 0;
// let numeroIngresado = readlineSync.question("Ingrese un número: ");
// let numero = +numeroIngresado; // Conversión de datos
// // Condiciones
// if (numero === 0) {
//     console.log("El número es 0");
// } else if (numero % 2 === 0) {
//     console.log("El número es par");
// } else {
//     console.log("El número es impar");
// }
// Tambien se puede hacer declarando una función
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
exports.determinarParImpar = determinarParImpar;
var numeroIngresado = readlineSync.question("Ingrese un número: ");
var numero = parseInt(numeroIngresado);
var resultado = determinarParImpar(numero);
console.log(resultado);
