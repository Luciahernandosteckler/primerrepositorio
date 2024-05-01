function encontrarMayor(num1, num2, num3) {
    var mayor = num1;
    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }
    return mayor;
}
// Ejemplo de uso
var numeroMayor = encontrarMayor(10, 5, 8);
console.log("El número mayor es:", numeroMayor);
