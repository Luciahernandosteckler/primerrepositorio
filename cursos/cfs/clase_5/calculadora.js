"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
function calcularResultado(numero1, numero2, opcionMenu) {
    var resultado = 0;
    if (opcionMenu === 1) {
        resultado = numero1 + numero2;
    }
    else if (opcionMenu === 2) {
        resultado = numero1 - numero2;
    }
    return resultado;
}
var numero1 = rls.questionInt("Ingrese un número: ");
var numero2 = rls.questionInt("Ingrese el segundo número: ");
var opcionMenu = rls.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier tecla para salir: ");
var resultadoFuncion = calcularResultado(numero1, numero2, opcionMenu);
console.log("El resultado es: " + resultadoFuncion);
function dibujarGuionesN(n) {
    var linea = "";
    for (var i = 0; i < n; i++) {
        linea = linea + "-";
    }
    console.log(linea); //  línea dibujada
}
