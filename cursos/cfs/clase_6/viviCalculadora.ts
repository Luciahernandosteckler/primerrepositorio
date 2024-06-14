function suma(a: number, b: number): number {
    return a + b;
}
function resta(a: number, b: number): number {
    return a - b;
}
function multiplicacion(a: number, b: number): number {
    return a * b;
}
function division(a: number, b: number): number {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}
function calcular(op: string, a: number, b: number) {
    switch (op) {
        case "suma":
            return suma(a, b);
        case "resta":
            return resta(a, b);
        case "multiplicacion":
            return multiplicacion(a, b);
        case "division":
            return division(a, b);
        default:
            console.log("Operación no válida");
    }
}