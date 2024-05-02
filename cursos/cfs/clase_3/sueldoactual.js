"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var sueldoActual = rls.questionInt("Ingrese el salario actual del empleado:");
var nuevoSueldo;
if (0 < sueldoActual && sueldoActual <= 15000) {
    nuevoSueldo = sueldoActual * 1.2;
    console.log("Ud tiene un aumento del 20%");
}
else if (15001 < sueldoActual && sueldoActual <= 20000) {
    nuevoSueldo = sueldoActual * 1.1;
    console.log("Ud tiene un aumento del 10%");
}
else if (20001 < sueldoActual && sueldoActual <= 25000) {
    nuevoSueldo = sueldoActual * 1.05;
    console.log("Ud tiene un aumento del 5%");
}
else {
    nuevoSueldo = sueldoActual;
    console.log("Ud no tiene aumento");
}
// para que nos arroje tambien el nuevo valor 
console.log("El nuevo sueldo es: " + nuevoSueldo);
