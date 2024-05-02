"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var edad = rls.questionInt("introduce:");
if (edad >= 18) {
    console.log("Es mayor de edad");
}
else {
    console.log("No es mayor de edad");
}
