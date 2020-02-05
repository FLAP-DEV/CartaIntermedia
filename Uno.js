"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var trebol_1 = require("./trebol");
var trebolUno = trebol_1.trebolDer("");
var trebolDos = trebol_1.trebolIzq("");
function Uno(firstName) {
    return firstName + ('**********************\n' + trebolDos + '*       ******       *\n*      *******       *\n*     ********       *\n*    **** ****       *\n*   ****  ****       *\n*  ****   ****       *\n*         ****       *\n*         ****       *\n*         ****       *\n*         ****       *' + trebolUno + ('**********************'));
}
exports.Uno = Uno;
function Dos(firstName) {
    return firstName + ('**********************\n' + trebolDos + '*       *****       *\n*      ******       *\n*     *******       *\n*    **** ****       *\n*   ****  ****       *\n*  ****   ****       *\n*         ****       *\n*         ****       *\n*         ****       *\n*         ****       *' + trebolUno + ('**********************'));
}
exports.Dos = Dos;
