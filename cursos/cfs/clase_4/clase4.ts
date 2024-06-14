//console.log("hola!");  como decir 5 veces hola

//while (HayCaminoAdelante){ // si la condicion se cumple se ejecuta sino nunca
//    console.log("avanzar");
//}

//import * as rls from "readline-sync";

//let cantHolas : number = 1;
//while (cantHolas <=5){
//    console.log("Hola");
//    cantHolas= cantHolas + 1;
//}

//calcular promedio

import * as rls from "readline-sync";

let suma: number = 0;
let promedio: number = 0;
let contador: number = 1;

while (contador <= 10) {
    let nota: number = rls.questionFloat("Ingrese su nota:");
    suma = suma + nota;
    contador = contador + 1;
}

promedio = suma / 10;

console.log("El promedio del alumno es: " + promedio);
