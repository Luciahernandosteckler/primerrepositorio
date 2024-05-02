import * as readlineSync from "readline-sync";

// Obtener el mes de la compra del usuario
const mesCompra = readlineSync.question("¿En que mes realizo la compra?");

// Solicitar el monto de la compra al usuario
const montoCompraStr = readlineSync.question("¿Cual fue el monto de su compra?");

// Verificar si el mes es octubre 
const montoCompra = +montoCompraStr;
const total = (mesCompra === "octubre" || mesCompra === "OCTUBRE") ? montoCompra * 0.85 : montoCompra;

// Mostrar el resultado
console.log("Total a pagar: $" + total);
