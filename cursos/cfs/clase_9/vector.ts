//invertir vector "palabras"

import * as rls from "readline-sync";

// Función para invertir una palabra
function invertirPalabra(palabra: string): string {
    let arregloLetras: string[] = palabra.split("");
    let palabraInvertida: string = "";

    for (let i = arregloLetras.length - 1; i >= 0; i--) {
        palabraInvertida += arregloLetras[i];
    }

    return palabraInvertida;
}

let palabra: string = rls.question("Ingrese la palabra a invertir:");
// Obtener la palabra invertida llamando a la función
let palabraInvertida: string = invertirPalabra(palabra);
// Mostrar la palabra invertida
console.log("La palabra invertida es: " + palabraInvertida);


//SIN FUNCIÓN
// import * as rls from "readline-sync";

// let palabra: string = rls.question("Ingrese la palabra a invertir:");

// let cantidadLetras: number = palabra.length;
// let arregloLetras: string[] = palabra.split(""); // Split nos da separaciones
// let palabraInvertida: string = ""

// console.log("La palabra invertida es:");
// for (let i = 0; i < arregloLetras.length; i++) {
//     console.log(arregloLetras[i]);
// }

// console.log(arregloLetras, cantidadLetras);

// console.log(`La palabra invertida es :` + `${arregloLetras}`);


//----------------------------------------Ejercicio Karen

// function invertirVector(v: string[], cantidad: number) {
//     let indiceIzq: number = 0;
//     let indiceDer: number = cantidad - 1;
//     let aux: string;
//     while (indiceIzq < indiceDer) {
//         aux = v[indiceIzq];
//         v[indiceIzq] = v[indiceDer];
//         v[indiceDer] = aux;
//         indiceIzq++;
//         indiceDer--;
//     }

//invertirVector(arregloLetras, cantidadLetras);
// mostrarVector(arregloLetras, cantidadLetras)
// invertirVector(arregloLetras, cantidadLetras)
// console.log("mostrando vector");
// mostrarVector(arregloLetras, cantidadLetras);