import * as readlinesync from "readline-sync";

const precio = +readlinesync.question("ingrese el precio del producto:");
const descuento = 10; // descuento en %
const preciofinal = precio - (precio * descuento / 100);
console.log("el precio a pagar es de: $" + preciofinal);

//import * as readlinesync from ‘readline-sync’;    

//let alturapersona = readlinesync.question(); 

//console.log(alturapersona);
