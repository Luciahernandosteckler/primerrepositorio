function Azar(max: number): number {
    return Math.floor(Math.random() * max) + 1;
}

let filas: number = 3;
let columnas: number = 3;

let identificador: number[][] = new Array(filas);
for (let i = 0; i < filas; i++) {
    identificador[i] = new Array(columnas);
}

let tabla: number[][] = new Array(filas);
for (let i = 0; i < filas; i++) {
    tabla[i] = new Array(columnas);
}

function cargar(matriz: number[][], f: number, c: number, numAzar: number) {
    let fil: number, col: number;
    for (fil = 0; fil < f; fil++) {
        for (col = 0; col < c; col++) {
            matriz[fil][col] = Azar(numAzar);
        }
    }
}

function mostrarMatriz(matriz: number[][], f: number, c: number) {
    let fil: number, col: number;
    let cadena: string;
    for (fil = 0; fil < f; fil++) {
        cadena = " ";
        for (col = 0; col < c; col++) {
            cadena += ` ${matriz[fil][col]} `; function Azar(max: number): number {
                return Math.floor(Math.random() * max) + 1;
            }

            let filas: number = 3;
            let columnas: number = 3;

            let identificador: number[][] = new Array(filas);
            for (let i = 0; i < filas; i++) {
                identificador[i] = new Array(columnas);
            }

            let tabla: number[][] = new Array(filas);
            for (let i = 0; i < filas; i++) {
                tabla[i] = new Array(columnas);
            }

            function cargar(matriz: number[][], f: number, c: number, numAzar: number) {
                let fil: number, col: number;
                for (fil = 0; fil < f; fil++) {
                    for (col = 0; col < c; col++) {
                        matriz[fil][col] = Azar(numAzar);
                    }
                }
            }

            function mostrarMatriz(matriz: number[][], f: number, c: number) {
                let fil: number, col: number;
                let cadena: string;
                for (fil = 0; fil < f; fil++) {
                    cadena = " ";
                    for (col = 0; col < c; col++) {
                        cadena += ` ${matriz[fil][col]} `;
                    }
                    console.log(cadena);
                }
            }

            cargar(identificador, filas, columnas, 2); 
            cargar(tabla, filas, columnas, 2); 

            console.log("Matriz 'identificador':");
            mostrarMatriz(identificador, filas, columnas);

            console.log("\nMatriz 'tabla':");
            mostrarMatriz(tabla, filas, columnas);

        }
        console.log(cadena);
    }
}

cargar(identificador, filas, columnas, 2);
cargar(tabla, filas, columnas, 2); 

console.table("Matriz 'identificador':");
mostrarMatriz(identificador, filas, columnas);

console.table("\nMatriz 'tabla':");
mostrarMatriz(tabla, filas, columnas);
