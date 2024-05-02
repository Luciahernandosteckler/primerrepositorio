"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nroDeseado = rls.questionInt("Escriba el número que desea verificar si es mayor o no a 20:");
if (nroDeseado > 20) {
    console.log("El número es mayor a 20:" + nroDeseado);
}
else {
    console.log("El número es menor o igual a 20" + nroDeseado);
}
