"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Obtener el mes de la compra del usuario
var mesCompra = readlineSync.question("¿En qué mes realizó la compra? ");
// Solicitar el monto de la compra al usuario
var montoCompraStr = readlineSync.question("¿Cuál fue el monto de su compra? ");
// Verificar si el mes es octubre y calcular el total con descuento o sin descuento
var montoCompra = +montoCompraStr;
var total = (mesCompra === "octubre" || mesCompra === "OCTUBRE") ? montoCompra * 0.85 : montoCompra;
// Mostrar el resultado
console.log("Total a pagar: $" + total);
