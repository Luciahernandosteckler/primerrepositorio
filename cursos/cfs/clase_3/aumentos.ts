import * as rls from "readline-sync";
//Declaro la función
function calcularAumentoSalario(salario: number) {
    let aumento: number = 0;

    switch (true) {
        case salario <= 15000:
            aumento = salario * 0.2;
            break;
        case salario <= 20000:
            aumento = salario * 0.01;
            break;
        case salario <= 25000:
            aumento = salario * 0.05;
            break;
        default:
            aumento = 0;
    }

    return aumento;
}

//  salario indicado en numeros
const salario: number = rls.questionInt("Ingrese el salario del empleado: ");

// Calcular aumento de sueldo
const aumento: number = calcularAumentoSalario(salario);

// Mostrar resultado 
console.log("El aumento de sueldo es: " + aumento); 
