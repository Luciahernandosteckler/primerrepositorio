import * as rls from "readline-sync";

let posicionLlegada: number = rls.questionInt("Ingrese la posicion de llegada del competidor:");

switch (posicionLlegada) {
    case 1:
        console.log("Entregar medalla de oro");
        break;
    case 2:
        console.log("Entregar medalla de plata");
        break;
    case 3:
        console.log("Entregar medalla de bronce");
        break;
    default:
        console.log("Entregar mención de participación");
}