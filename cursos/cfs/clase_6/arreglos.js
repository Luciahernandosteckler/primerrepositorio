"use strict";
// Algoritmo NumerosDeseados
// import * as rls from 'readline-sync';
// let nroDeseadoArreglo : number[] = new Array (5);
// let nro : number, indice : number;
// for (indice = 0; indice < 5; indice++) {
// nro = rls.questionInt(`Indique el numero que desea incorporar en la posicion ${indice}: `);
// nroDeseadoArreglo[indice] = nro;
// }
// for (indice = 0; indice < 5; indice++) {
// console.log(`El numero en la posicion ${indice} es ${nroDeseadoArreglo[indice]}`);
// }
Object.defineProperty(exports, "__esModule", { value: true });
// Algoritmo NombresDeseados
// import * as rls from 'readline-sync';
// let dimensionArreglo : number = rls.questionInt(`Ingrese la dimension del arreglo: `);
// let nombrePersonas : string[] = new Array (dimensionArreglo);
// let indice : number;
// for (indice = 0; indice < dimensionArreglo; indice++) {
// nombrePersonas[indice] = rls.question(`Ingrese el nombre que quiere poner en el lugar ${indice}: `);
// }
// for (indice = 0; indice < dimensionArreglo; indice++) {
// console.log(`La persona que ingreso en la posicion ${indice} es: ${nombrePersonas[indice]}`);
// }
// Algoritmo NombresDeseados
// import * as rls from 'readline-sync';
// let dimensionArreglo : number = rls.questionInt(`Ingrese la dimension del arreglo: `);
// let nombrePersonas : string[] = new Array (dimensionArreglo);
// let indice : number;
// for (indice = 0; indice < dimensionArreglo; indice++) {
// nombrePersonas[indice] = rls.question(`Ingrese el nombre que quiere poner en el lugar ${indice}: `);
// }
// for (indice = 0; indice < dimensionArreglo; indice++) {
// console.log(`La persona que ingreso en la posicion ${indice} es: ${nombrePersonas[indice]}`);
// }
// Algoritmo DosArreglos
var rls = require("readline-sync");
var arregloNombres = new Array(2);
var arregloNumeros = new Array(3);
var indice;
for (indice = 0; indice < 2; indice++) {
    arregloNombres[indice] = rls.question("Ingrese el nombre de la posicion ".concat(indice, ": "));
}
for (indice = 0; indice < 3; indice++) {
    arregloNumeros[indice] = rls.questionInt("Ingrese el numero de la posicion ".concat(indice, ": "));
}
for (indice = 0; indice < 2; indice++) {
    console.log("El nombre en la posicion ".concat(indice, " es: ").concat(arregloNombres[indice]));
}
for (indice = 0; indice < 3; indice++) {
    console.log("El numero en la posicion ".concat(indice, " es: ").concat(arregloNumeros[indice]));
}
