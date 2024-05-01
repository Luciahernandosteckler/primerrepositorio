"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlinesync = require("readline-sync");
var precio = +readlinesync.question("ingrese el precio del producto:");
var descuento = 10; // descuento en %
var preciofinal = precio - (precio * descuento / 100);
console.log("el precio a pagar es de: $" + preciofinal);
//import * as readlinesync from ‘readline-sync’;    
//let alturapersona = readlinesync.question(); 
//console.log(alturapersona);
