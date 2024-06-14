import * as rls from "readline-sync";

let dimensionArreglo: number = rls.questionInt("Ingrese cantidad de jugadores:");
let edadesNenes: number[] = new Array(dimensionArreglo);

function cargarJugadores(edadesNenes: number[], dimensionArreglo: number) {
    let i: number = 0;
    for (i; i < edadesNenes.length; i++) {
        edadesNenes[i] = Aleatorio(3, 7);
    }
}

function Aleatorio(menorValor: number, mayorValor: number): number {
    let numeroDevolver: number = 0;
    numeroDevolver = Math.floor(Math.random() * (mayorValor - menorValor) + menorValor);
    //random arroja un numero no mayor a 1, al azar, 
    //multiplica por (7 - 0,1 - 0.1 ) al variar "random" no da mas de 6.99
    //el + 1 es opcional para pasar el numero mayor pedido
    //floor nos arroja numeros enteros
    return numeroDevolver;
}

function mostrarJugadores(edadesNenes: number[], dimensionArreglo: number) {
    let i: number = 0;
    let jugadores: string = "";
    for (i; i < edadesNenes.length; i++) {
        jugadores += edadesNenes[i] + "_";
    }
    console.log("los jugadores son: ", jugadores);
}

function obtenerPromedio(edadesNenes: number[], dimensionArreglo: number): number {
    let suma: number = 0;
    let i: number = 0;
    let promedio: number = 0;
    for (i; i < dimensionArreglo; i++) {
        suma = suma + edadesNenes[i];
    }
    promedio = suma / dimensionArreglo;
    return promedio;
}

cargarJugadores(edadesNenes, dimensionArreglo);
mostrarJugadores(edadesNenes, dimensionArreglo);
console.log("El promedio de edades es:", obtenerPromedio(edadesNenes, dimensionArreglo));
