"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
//Obtener números
var dividendo = rls.questionInt("Ingrese el dividiendo:");
var divisor = rls.questionInt("ingrese el divisor:");
function Multiplos(dividendo, dividor) {
    if (divisor === 0) {
        return "El divisor no puede ser cero";
    }
    if (dividendo % divisor === 0) { // Uso de MOD, si este deja residuo es falso sino verdadero
        return "Verdadero";
    }
    else {
        return "Falso";
    }
}
//Calcular
var resultado = Multiplos(dividendo, divisor);
console.log(resultado);
