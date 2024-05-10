"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
// Pide al usuario el número base
var base = rls.questionInt("Ingrese el número para la tabla de multiplicar: ");
// Pide al usuario hasta qué número quiere multiplicar
var limite = rls.questionInt("Ingrese hasta qu\u00E9 n\u00FAmero quiere multiplicar ".concat(base, ": "));
// Genera y muestra la tabla de multiplicar
console.log("Tabla de multiplicar del ".concat(base, " hasta ").concat(limite, ":"));
for (var i = 1; i <= limite; i++) { // i incrementa uno hasta llegar al valor limite
    var resultado = base * i;
    console.log("".concat(base, " x ").concat(i, " = ").concat(resultado));
}
