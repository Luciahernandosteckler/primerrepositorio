"use strict";
//console.log("hola!");  como decir 5 veces hola
Object.defineProperty(exports, "__esModule", { value: true });
//while (HayCaminoAdelante){ // si la condicion se cumple se ejecuta sino nunca
//    console.log("avanzar");
//}
//import * as rls from "readline-sync";
//let cantHolas : number = 1;
//while (cantHolas <=5){
//    console.log("Hola");
//    cantHolas= cantHolas + 1;
//}
//calcular promedio
var rls = require("readline-sync");
var suma = 0;
var promedio = 0;
var contador = 1;
while (contador <= 10) {
    var nota = rls.questionFloat("Ingrese su nota:");
    suma = suma + nota;
    contador = contador + 1;
}
promedio = suma / 10;
console.log("El promedio del alumno es: " + promedio);
