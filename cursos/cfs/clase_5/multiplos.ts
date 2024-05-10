import * as rls from "readline-sync"

//Obtener números

let dividendo: number = rls.questionInt("Ingrese el dividiendo:");
let divisor: number = rls.questionInt("ingrese el divisor:");

function Multiplos(dividendo: number, dividor: number): string {
    if (divisor === 0) {
        return "El divisor no puede ser cero";
    }
    if (dividendo % divisor === 0) { // Uso de MOD, si este deja residuo es falso sino verdadero
        return "Verdadero";
    } else {
        return "Falso";
    }
}


//Calcular

let resultado = Multiplos(dividendo, divisor);
console.log(resultado);