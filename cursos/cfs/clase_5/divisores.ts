import * as rls from 'readline-sync';

// Definir la función contarDivisores
function contarDivisores(numero: number): number {
    if (numero <= 0) {
        return 0; // No hay divisores para números negativos o cero
    }

    let cantidadDivisores = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            cantidadDivisores++;
        }
    }
    return cantidadDivisores;
}

// Obtener el número del usuario
let numero = rls.questionInt("Ingrese un número: ");

// Calcular y mostrar la cantidad de divisores
let cantidadDivisores = contarDivisores(numero);
console.log(`El número ${numero} tiene ${cantidadDivisores} divisores.`);

