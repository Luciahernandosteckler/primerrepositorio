import * as rls from 'readline-sync';

let numero1: number = rls.questionInt("Ingrese un número: ");
let numero2: number = rls.questionInt("Ingrese el segundo número: ");
let opcionMenu: number = rls.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier tecla para salir: ");
let resultadoFuncion: number = calcularResultado(numero1, numero2, opcionMenu);

function calcularResultado(numero1: number, numero2: number, opcionMenu: number): number {
    let resultado: number = 0;
    if (opcionMenu === 1) {
        resultado = numero1 + numero2;  //Opcion 1 sumar
    } else if (opcionMenu === 2) {
        resultado = numero1 - numero2;  //Opcion 2 restar 
    }
    return resultado;
}


function dibujarGuionesN(n: number) {
    let linea: string = "";
    for (let i = 0; i < n; i++) { 
        linea = linea + "-";
    }
    console.log(linea); //  línea dibujada
}


console.log("El resultado es: " + resultadoFuncion);
