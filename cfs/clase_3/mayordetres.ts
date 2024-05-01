function encontrarMayor(num1: number, num2: number, num3: number): number {
    let mayor = num1;

    if (num2 > mayor) {
        mayor = num2;
    }

    if (num3 > mayor) {
        mayor = num3;
    }

    return mayor;
}

// Ejemplo de uso
const numeroMayor = encontrarMayor(10, 5, 8);
console.log("El número mayor es:", numeroMayor);
