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
exports.__esModule = true;
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
                                console.log('Se ha eliminado', posicion_del_cero);
                                break;
                            case 2:
                                cartas.splice(posicion_del_cero, 1);
                                cartas.splice(contadores.indexOf(0), 1);
                                break;
                        }
                        contadores = contadores.filter(function (valoractual) {
                            return valoractual != 0;
                        });
                    }
                }
                var numero_de_ceros, ValorAleatorio1, ValorAleatorio2, carta_obtenida1, carta_obtenida2, decision;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            numero_de_ceros = contadores.reduce(function (acumulador, valoractual) {
                                if (valoractual == 0) {
                                    acumulador++;
                                    return acumulador;
                                }
                                else {
                                    return acumulador;
                                }
                            }, 0);
                            console.log(numero_de_ceros);
                            verificar_ceros();
                            ValorAleatorio1 = Math.floor((contadores.length - 1) * Math.random());
                            ValorAleatorio2 = Math.floor((contadores.length - 1) * Math.random());
                            carta_obtenida1 = cartas[ValorAleatorio1];
                            carta_obtenida2 = cartas[ValorAleatorio2];
                            console.log(carta_obtenida1, carta_obtenida2);
                            //console.log(carta_obtenida1,carta_obtenida2)
                            if (ValorAleatorio1 != ValorAleatorio2) {
                                contadores[ValorAleatorio1]--;
                                contadores[ValorAleatorio2]--;
                                //console.log(ValorAleatorio1,ValorAleatorio2)
                                iteraciones++;
                                console.log(contadores);
                                console.log(cartas);
                            }
                            else {
                                if (contadores[ValorAleatorio1] == 1) {
                                    SacarCartas();
                                }
                                else {
                                    contadores[ValorAleatorio1]--;
                                    contadores[ValorAleatorio2]--;
                                    //console.log(ValorAleatorio1,ValorAleatorio2)
                                    iteraciones++;
                                    console.log(contadores);
                                    console.log(cartas);
                                }
                            }
                            return [4 /*yield*/, prompts({
                                    type: 'text',
                                    name: 'eleccion',
                                    message: 'Inserte: \n 1 -> Seguir 0 -> Salir'
                                })];
                        case 1:
                            decision = _a.sent();
                            switch (decision.eleccion) {
                                case '0':
                                    console.log('Finalizado');
                                    break;
                                case '1':
                                    SacarCartas();
                                    break;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        var cartas, contadores, iteraciones;
        return __generator(this, function (_a) {
            cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
            contadores = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
            iteraciones = 0;
            if (contadores.length = 0) {
                SacarCartas();
            }
            else {
                console.log('Se han acabado las cartas');
            }
            return [2 /*return*/];
        });
    });
}
Randomizar();
