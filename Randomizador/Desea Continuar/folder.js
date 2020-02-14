"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function DeseaApostar(Carta) {
    var Eleccion = prompt(" Carta Intermedia \n ¿ Deseas Jugar ?");
    var Seguir = Eleccion == "Si" || Eleccion == "SI" || Eleccion == "si";
    var Abandonar = Eleccion == "NO" || Eleccion == "No" || Eleccion == "no";
    if (Seguir) {
        console.log(Carta);
    }
    if (Abandonar) {
        console.log("Fin del juego");
        console.log('ImprimirRerultados');
    }
    else {
        console.log("Opcion no valida");
    }
}
exports.DeseaApostar = DeseaApostar;
