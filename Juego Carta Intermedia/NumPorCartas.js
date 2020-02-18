"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numeros_corazon_1 = require("./cartas/numeros_corazon");
//Cambiar los numeros del arreglo de cartas por los strings de cada carta
function convertirCartas(Ingresanumero) {
    var lacartaElegida;
    switch (Ingresanumero) {
        case 1:
            lacartaElegida = numeros_corazon_1.AsC("");
            break;
        case 2:
            lacartaElegida = numeros_corazon_1.DosC("");
            break;
        case 3:
            lacartaElegida = numeros_corazon_1.TresC("");
            break;
        case 4:
            lacartaElegida = numeros_corazon_1.CuatroC("");
            break;
        case 5:
            lacartaElegida = numeros_corazon_1.CincoC("");
            break;
        case 6:
            lacartaElegida = numeros_corazon_1.SeisC("");
            break;
        case 7:
            lacartaElegida = numeros_corazon_1.SieteC("");
            break;
        case 8:
            lacartaElegida = numeros_corazon_1.OchoC("");
            break;
        case 9:
            lacartaElegida = numeros_corazon_1.NueveC("");
            break;
        case 10:
            lacartaElegida = numeros_corazon_1.DiezC("");
            break;
        case 11:
            lacartaElegida = numeros_corazon_1.JotaC("");
            break;
        case 12:
            lacartaElegida = numeros_corazon_1.QuuC("");
            break;
        case 13:
            lacartaElegida = numeros_corazon_1.kaaC("");
            break;
    }
    return lacartaElegida;
}
exports.convertirCartas = convertirCartas;
