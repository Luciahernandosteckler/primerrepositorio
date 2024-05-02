import * as rls from "readline-sync";

let edad: number = rls.questionInt("introduce:");
if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("No es mayor de edad");
}