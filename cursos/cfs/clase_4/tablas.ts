import * as rls from "readline-sync";

// Pide al usuario el número base
let base: number = rls.questionInt("Ingrese el número para la tabla de multiplicar: ");

// Pide al usuario hasta qué número quiere multiplicar
let limite: number = rls.questionInt(`Ingrese hasta qué número quiere multiplicar ${base}: `);

// Genera y muestra la tabla de multiplicar
console.log(`Tabla de multiplicar del ${base} hasta ${limite}:`);
for (let i = 1; i <= limite; i++) { // i incrementa uno hasta llegar al valor limite
    let resultado = base * i;
    console.log(`${base} x ${i} = ${resultado}`);
}
