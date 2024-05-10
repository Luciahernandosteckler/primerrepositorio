"use strict";
/* import * as rls from "readline-sync";

//Datos que pedimos al usuario

let base: number = rls.questionInt("Ingreso el número de la base:");
let exponencial: number = rls.questionInt("Ingrese el exponente:");

//Logica y condiciones

if (exponencial < 0) {
console.log("El número debe ser mayor o igual a cero")
} else {
let resultado = base ** exponencial;

// Resultado que brindamos por consola

console.log("El resultado es :", resultado);
} */
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
// Función para calcular la potencia
function calcularPotencia(base, exponente) {
    if (exponente === 0) {
        return 1; // Si el exponente es 0, el resultado es siempre 1
    }
    else { //si i es menor a 0 finaliza 
        var resultado = 1;
        for (var i = 0; i < exponente; i++) // contador de bucle, por x exponencial se repite la multiplicación
         {
            resultado *= base; //se repetira las veces que indique su potencia
        }
        return resultado;
    }
}
// Solicitar al usuario  base y el exponente
var base = rls.questionInt("Ingrese la base: ");
var exponente = rls.questionInt("Ingrese el exponente: ");
// Validar si el exponente es mayor o igual a cero
if (exponente < 0) {
    console.log("El exponente debe ser mayor o igual a cero.");
}
else {
    // Calcular la potencia utilizando la función calcularPotencia
    var resultado = calcularPotencia(base, exponente);
    console.log("El resultado de ".concat(base, " elevado a ").concat(exponente, " es: ").concat(resultado));
}
