"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompts = require("prompts");
function Randomizar() {
    return __awaiter(this, void 0, void 0, function () {
        function SacarCartas() {
            return __awaiter(this, void 0, void 0, function () {
                function verificar_ceros() {
                    if (contadores.some(function (valoractual) {
                        return valoractual == 0;
                    })) {
                        var posicion_del_cero = contadores.indexOf(0);
                        switch (numero_de_ceros) {
                            case 1:
                                cartas.splice(posicion_del_cero, 1);
                                contadores.splice(posicion_del_cero, 1);
                                // console.log('Se ha eliminado', posicion_del_cero)
                                break;
                            case 2:
                                cartas.splice(posicion_del_cero, 1);
                                contadores.splice(posicion_del_cero, 1);
                                cartas.splice(contadores.indexOf(0), 1);
                                contadores.splice(contadores.indexOf(0), 1);
                                // console.log('Se han eliminado 2', posicion_del_cero)
                                break;
                            case 3:
                                cartas.splice(posicion_del_cero, 1);
                                contadores.splice(posicion_del_cero, 1);
                                cartas.splice(contadores.indexOf(0), 1);
                                contadores.splice(contadores.indexOf(0), 1);
                                cartas.splice(contadores.indexOf(0), 1);
                                contadores.splice(contadores.indexOf(0), 1);
                                // console.log('Se han eliminado 3')
                                break;
                        }
                        /*contadores = contadores.filter(function(valoractual){
                            return valoractual != 0
                        })*/
                    }
                }
                function eliminar_cartas() {
                    contadores[ValorAleatorio1]--;
                    contadores[ValorAleatorio2]--;
                    contadores[ValorAleatorio3]--;
                    var total_cartas = contadores.reduce(function (acumulador, valoractual) {
                        return acumulador + valoractual;
                    }, 0);
                    console.log("Tu primera carta es: ", carta_obtenida1);
                    console.log("Tu segunda carta es: ", carta_obtenida2);
                    /*
                    console.log('cartas obtenidas:',carta_obtenida1, carta_obtenida2,carta_obtenida3)
                    console.log('contadores:', contadores)
                    console.log('cartas:    ', cartas)
                    console.log("Total:", total_cartas)
                    */
                }
                function decidir() {
                    return __awaiter(this, void 0, void 0, function () {
                        var decision, _a, Apuesta, CuantoApuestas;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    console.log("Te quedan: ", Presupuesto, "No apuestes mas de lo que puedas pagar");
                                    return [4 /*yield*/, prompts({
                                            type: 'number',
                                            name: 'eleccion',
                                            /// Aui Arteaga
                                            message: ' Jugamos? \n 1 -> Si 0 -> No'
                                            ////////
                                        })];
                                case 1:
                                    decision = _b.sent();
                                    _a = decision.eleccion;
                                    switch (_a) {
                                        case 0: return [3 /*break*/, 2];
                                        case 1: return [3 /*break*/, 3];
                                    }
                                    return [3 /*break*/, 8];
                                case 2:
                                    LeDejamosJugar();
                                    return [3 /*break*/, 9];
                                case 3:
                                    Apuesta = void 0;
                                    _b.label = 4;
                                case 4: return [4 /*yield*/, prompts({
                                        type: 'number',
                                        name: 'Valor',
                                        message: '¿Cuanto deseas apostar?'
                                    })];
                                case 5:
                                    CuantoApuestas = _b.sent();
                                    Apuesta = CuantoApuestas.Valor;
                                    _b.label = 6;
                                case 6:
                                    if (Apuesta > Presupuesto || Apuesta < 0) return [3 /*break*/, 4];
                                    _b.label = 7;
                                case 7:
                                    /////////
                                    console.log('Tu apuesta es de: ', Apuesta);
                                    if (carta_obtenida1 > carta_obtenida3 && carta_obtenida2 < carta_obtenida3) {
                                        console.log("You Win :)");
                                        console.log('Tu tercera carta era.... ', carta_obtenida3);
                                        Presupuesto = Presupuesto + Apuesta;
                                    }
                                    else if (carta_obtenida1 < carta_obtenida3 && carta_obtenida2 > carta_obtenida3) {
                                        // Arteaaaa aqui era un win
                                        console.log("You Win :) ");
                                        /////////////
                                        console.log('Tu tercera carta era.... ', carta_obtenida3);
                                        Presupuesto = Presupuesto + Apuesta;
                                    }
                                    else {
                                        console.log("You Lose :( ");
                                        console.log('Tu tercera carta era.... ', carta_obtenida3);
                                        Presupuesto = Presupuesto - Apuesta;
                                    }
                                    LeDejamosJugar();
                                    return [3 /*break*/, 9];
                                case 8:
                                    console.log('Opcion invalida');
                                    decidir();
                                    return [3 /*break*/, 9];
                                case 9: return [2 /*return*/];
                            }
                        });
                    });
                }
                function LeDejamosJugar() {
                    /// Aqui Arteagaaaaaaaa
                    if (total_cartas != 1) {
                        if (Presupuesto == 0) {
                            Randomizar();
                        }
                        else {
                            console.log('Te quedan: ', Presupuesto);
                            SacarCartas();
                        }
                        ///////////////////
                    }
                    else {
                        console.log('Se han acabado las cartas ');
                    }
                }
                var numero_de_ceros, ValorAleatorio1, ValorAleatorio2, ValorAleatorio3, carta_obtenida1, carta_obtenida2, carta_obtenida3, todos_los_valores_diferentes, caso1, caso2, todos_los_valores_iguales, total_cartas;
                return __generator(this, function (_a) {
                    //    Aqui Arteagaaaa
                    if (Presupuesto == 0) {
                        console.log('Juego Amistoso ');
                    }
                    numero_de_ceros = contadores.reduce(// cuenta cuantos tipos de cartas, estan fuera de la baraja
                    function (acumulador, valoractual) {
                        if (valoractual == 0) {
                            acumulador++;
                            return acumulador;
                        }
                        else {
                            return acumulador;
                        }
                    }, 0);
                    //console.log(numero_de_ceros)
                    verificar_ceros();
                    ValorAleatorio1 = Math.floor((contadores.length) * Math.random());
                    ValorAleatorio2 = Math.floor((contadores.length) * Math.random());
                    ValorAleatorio3 = Math.floor((contadores.length) * Math.random());
                    carta_obtenida1 = cartas[ValorAleatorio1];
                    carta_obtenida2 = cartas[ValorAleatorio2];
                    carta_obtenida3 = cartas[ValorAleatorio3];
                    todos_los_valores_diferentes = ValorAleatorio1 != ValorAleatorio2 && ValorAleatorio1 != ValorAleatorio3 && ValorAleatorio2 != ValorAleatorio3;
                    caso1 = (ValorAleatorio1 == ValorAleatorio2 && ValorAleatorio1 != ValorAleatorio3) ||
                        ValorAleatorio2 == ValorAleatorio3 && ValorAleatorio1 != ValorAleatorio2;
                    caso2 = ValorAleatorio1 == ValorAleatorio3 && ValorAleatorio1 != ValorAleatorio2;
                    todos_los_valores_iguales = ValorAleatorio1 == ValorAleatorio2 && ValorAleatorio2 == ValorAleatorio3
                        && ValorAleatorio1 == ValorAleatorio3;
                    if (todos_los_valores_diferentes) {
                        eliminar_cartas();
                        decidir();
                    }
                    else {
                        if (caso1) {
                            if (contadores[ValorAleatorio2] == 1) {
                                SacarCartas();
                            }
                            else {
                                eliminar_cartas();
                                decidir();
                            }
                        }
                        if (caso2) {
                            if (contadores[ValorAleatorio1] == 1) {
                                SacarCartas();
                            }
                            else {
                                eliminar_cartas();
                                decidir();
                            }
                        }
                        if (todos_los_valores_iguales) {
                            if (contadores[ValorAleatorio1] == 2 || contadores[ValorAleatorio1] == 1) {
                                SacarCartas();
                            }
                            else {
                                eliminar_cartas();
                                decidir();
                            }
                        }
                    }
                    total_cartas = contadores.reduce(function (acumulador, valoractual) {
                        return acumulador + valoractual;
                    }, 0);
                    return [2 /*return*/];
                });
            });
        }
        var Inicio, Presupuesto, cartas, contadores;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'Tengo',
                        message: 'Seamos Francos, ¿Cuanto dinero tienes?'
                    })];
                case 1:
                    Inicio = _a.sent();
                    Presupuesto = Inicio.Tengo // Definimos el presupuesto inicial de jugador 
                    ;
                    cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                    contadores = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
                    SacarCartas();
                    return [2 /*return*/];
            }
        });
    });
}
Randomizar();
