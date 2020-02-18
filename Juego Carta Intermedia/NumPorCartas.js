"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numeros_corazon_1 = require("./cartas/numeros_corazon");
var numeros_c_negro_1 = require("./cartas/numeros_c_negro");
var numeros_diamantes_1 = require("./cartas/numeros_diamantes");
var numeros_trebol_1 = require("./cartas/numeros_trebol");
//Cambiar los numeros del arreglo de cartas por los strings de cada carta
function convertirCartas(Ingresanumero) {
    var lacartaElegida;
    var min = Math.ceil(1); //CON ESTO, DEFINO NUMEROS ALEATORIOS DEL 1 AL 4, ESTO LO HICE PARA QUE SALGAN ALEATORIAS
    var max = Math.floor(4); //LAS CARTAS, ES DECIR, SI SALE 1: ME SACA CORAZON, 2: CORAZON NEGRO, 3: dIAMANTE, 4:tREBOL
    var respuesta = Math.floor(Math.random() * (1 + max - min) + min);
    switch (Ingresanumero) { //OBVIAMENTE, EL INGRESANUMERO ES PARA SABER QUE NUMERO DEBE IMPRIMIR EN PANTALLA
        case 1: //AS
            if (respuesta == 1) {
                lacartaElegida = numeros_corazon_1.AsC(""); //Corazon
            }
            if (respuesta == 2) {
                lacartaElegida = numeros_c_negro_1.AsCN(""); //Corazon Negro
            }
            if (respuesta == 3) {
                lacartaElegida = numeros_diamantes_1.AsD(""); //Diamante
            }
            if (respuesta == 4) {
                lacartaElegida = numeros_trebol_1.As(""); //Trebol
            }
            break;
        case 2:
            if (respuesta == 1) {
                lacartaElegida = numeros_corazon_1.DosC("");
            }
            if (respuesta == 2) {
                lacartaElegida = numeros_c_negro_1.DosCN("");
            }
            if (respuesta == 3) {
                lacartaElegida = numeros_diamantes_1.DosD("");
            }
            if (respuesta == 4) {
                lacartaElegida = numeros_trebol_1.Dos("");
            }
            break;
        case 3:
            if (respuesta == 1) {
                lacartaElegida = numeros_corazon_1.TresC("");
            }
            if (respuesta == 2) {
                lacartaElegida = numeros_c_negro_1.TresCN("");
            }
            if (respuesta == 3) {
                lacartaElegida = numeros_diamantes_1.TresD("");
            }
            if (respuesta == 4) {
                lacartaElegida = numeros_trebol_1.Tres("");
            }
            break;
        case 4:
            if (respuesta == 1) {
                lacartaElegida = numeros_corazon_1.CuatroC("");
            }
            if (respuesta == 2) {
                lacartaElegida = numeros_c_negro_1.CuatroCN("");
            }
            if (respuesta == 3) {
                lacartaElegida = numeros_diamantes_1.CuatroD("");
            }
            if (respuesta == 4) {
                lacartaElegida = numeros_trebol_1.Cuatro("");
            }
            break;
        case 5:
            if (respuesta == 1) {
                lacartaElegida = numeros_corazon_1.CincoC("");
            }
            if (respuesta == 2) {
                lacartaElegida = numeros_c_negro_1.CincoCN("");
            }
            if (respuesta == 3) {
                lacartaElegida = numeros_diamantes_1.CincoD("");
            }
            if (respuesta == 4) {
                lacartaElegida = numeros_trebol_1.Cinco("");
            }
            break;
        case 6:
            if (respuesta == 1) {
                lacartaElegida = numeros_corazon_1.SeisC("");
            }
            if (respuesta == 2) {
                lacartaElegida = numeros_c_negro_1.SeisCN("");
            }
            if (respuesta == 3) {
                lacartaElegida = numeros_diamantes_1.SeisD("");
            }
            if (respuesta == 4) {
                lacartaElegida = numeros_trebol_1.Seis("");
            }
            break;
        case 7:
            if (respuesta == 1) {
                lacartaElegida = numeros_corazon_1.SieteC("");
            }
            if (respuesta == 2) {
                lacartaElegida = numeros_c_negro_1.SieteCN("");
            }
            if (respuesta == 3) {
                lacartaElegida = numeros_diamantes_1.SieteD("");
            }
            if (respuesta == 4) {
                lacartaElegida = numeros_trebol_1.Siete("");
            }
            break;
        case 8:
            if (respuesta == 1) {
                lacartaElegida = numeros_corazon_1.OchoC("");
            }
            if (respuesta == 2) {
                lacartaElegida = numeros_c_negro_1.OchoCN("");
            }
            if (respuesta == 3) {
                lacartaElegida = numeros_diamantes_1.OchoD("");
            }
            if (respuesta == 4) {
                lacartaElegida = numeros_trebol_1.Ocho("");
            }
            break;
        case 9:
            if (respuesta == 1) {
                lacartaElegida = numeros_corazon_1.NueveC("");
            }
            if (respuesta == 2) {
                lacartaElegida = numeros_c_negro_1.NueveCN("");
            }
            if (respuesta == 3) {
                lacartaElegida = numeros_diamantes_1.NueveD("");
            }
            if (respuesta == 4) {
                lacartaElegida = numeros_trebol_1.Nueve("");
            }
            break;
        case 10:
            if (respuesta == 1) {
                lacartaElegida = numeros_corazon_1.DiezC("");
            }
            if (respuesta == 2) {
                lacartaElegida = numeros_c_negro_1.DiezCN("");
            }
            if (respuesta == 3) {
                lacartaElegida = numeros_diamantes_1.DiezD("");
            }
            if (respuesta == 4) {
                lacartaElegida = numeros_trebol_1.Diez("");
            }
            break;
        case 11:
            if (respuesta == 1) {
                lacartaElegida = numeros_corazon_1.JotaC("");
            }
            if (respuesta == 2) {
                lacartaElegida = numeros_c_negro_1.JotaCN("");
            }
            if (respuesta == 3) {
                lacartaElegida = numeros_diamantes_1.JotaD("");
            }
            if (respuesta == 4) {
                lacartaElegida = numeros_trebol_1.Jota("");
            }
            break;
        case 12:
            if (respuesta == 1) {
                lacartaElegida = numeros_corazon_1.QuuC("");
            }
            if (respuesta == 2) {
                lacartaElegida = numeros_c_negro_1.QuuCN("");
            }
            if (respuesta == 3) {
                lacartaElegida = numeros_diamantes_1.QuuD("");
            }
            if (respuesta == 4) {
                lacartaElegida = numeros_trebol_1.Quu("");
            }
            break;
        case 13:
            if (respuesta == 1) {
                lacartaElegida = numeros_corazon_1.kaaC("");
            }
            if (respuesta == 2) {
                lacartaElegida = numeros_c_negro_1.kaaCN("");
            }
            if (respuesta == 3) {
                lacartaElegida = numeros_diamantes_1.kaaD("");
            }
            if (respuesta == 4) {
                lacartaElegida = numeros_trebol_1.kaa("");
            }
            break;
    }
    return lacartaElegida;
}
exports.convertirCartas = convertirCartas;
