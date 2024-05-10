"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importamos el módulo readline-sync para poder interactuar con la consola
var rls = require("readline-sync");
// Definimos la constante CLAVE_REAL que contendrá la clave correcta
var CLAVE_REAL = "eureka";
// Cantidad de intentos permitidos
var intentos = 3;
// Llevar la cuenta de los intentos realizados
var contador = 0;
// Declaramos una variable para almacenar la clave ingresada por el usuario
var claveUsuario;
// Mientras haya intentos disponibles, solicitamos al usuario que ingrese la clave
while (intentos > 0) {
    // Solicita al usuario que ingrese la clave y la almacenamos en la variable claveUsuario
    claveUsuario = rls.question("Ingrese su clave: ");
    // Verifica si la clave ingresada por el usuario es igual a la clave real
    if (claveUsuario === CLAVE_REAL) {
        // Si la clave es correcta, se muestra el mensaje y sale del ciclo
        console.log("¡La clave es correcta!");
        break;
    }
    else {
        // Si la clave es incorrecta, decrementamos el número de intentos "--" y mostramos el mensaje 
        intentos--;
        console.log("Clave incorrecta. Te quedan ".concat(intentos, " intentos."));
    }
}
// Si se acabaron los intentos ejecuta el siguiente mensaje
if (intentos === 0) {
    console.log("Te has quedado sin intentos.");
}
