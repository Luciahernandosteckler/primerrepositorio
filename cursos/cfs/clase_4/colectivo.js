"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var llegadaColectivo;
console.log("Esperando colectivo");
llegadaColectivo = rls.question("¿Llegó el colectivo? [S/N]");
while (llegadaColectivo === "N") {
    console.log("Esperando el colectivo");
    llegadaColectivo = rls.question("¿Llegó el colectivo? [S/N]");
}
console.log("¡Llegó el colectivo!");
