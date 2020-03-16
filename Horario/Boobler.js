"use strict";
// La funcion $() sirve para acceder a elementos HTML en Javascript
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
/*
Pedir el nombre de la materia
Listar los dias de la semana Enter para pasar al siguiente dia o escribimos los horarios
 --> Hora de Inicio 6
 --> Hora Terminada 22
 no se manejar pm ni am
 Se imprimira una tabla en la que las columanas señalen los dias y las filas las horas
 tendran un rango de lunes a viernes y de 7 a 20 horas y el nombre de la materia en la posicion
 Dia, hora señalada
*/
/*
Una vez se termine de ingresar los datos cada materia se tratara como una estructura que tendra dos
conbinaciones se empezara a agregar primero la materia cuyo indice de filas sea el mas pequeño de todos
este indice se ingresara por el usuario en forma de horas la idea esque con truty y folsis se pueda contar el
numero de HORAS HUECAS por dia, al mismo tiempo se creara otro arreglo que empieze con la segunda materia con el
menor numero de filas y columnas y contaremos las horas por dia, se comparara las horas huecas de cada  dia y se
decidira conservar el horario mas optimo segun una relacion  predefinida

es decir puedo tener horas seguidas todos los dias pero no es practico tener un dia con dos clases una en la mañana
y la otra en la noche es necesario cuantificar un resultado final que indique que opcion tomar segun estos parametros
que tendran un grado de importancia mas elevado dependiendo el numero de horas huecas seguidas en el mismo dia

Pasos

1.crear un arreglo que almacene todas las estructuras
2.el usuario nos facilitara las filas y columnas de plantilla sin saberlo al ingresar las horas correspondientes
a cada materia


*/
var prompts = require("prompts");
function Principal() {
    /*
    const Plantilla = [  ['Horario','   Lunes  ','  Martes ' ,'Miercoles ','  Jueves  ',  'Viernes '],
                         ['7 a 8'  ,'Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                         ['8 a 9'  ,'Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                         ['9 a 10' ,'Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                         ['10 a 11','Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                         ['11 a 12','Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                         ['12 a 13','Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                         ['13 a 14','Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                         ['14 a 15','Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                         ['15 a 16','Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                         ['17 a 18','Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                         ['18 a 19','Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                         ['19 a 20','Hora libre','Hora libre','Hora libre','Hora libre','Hora libre']
                      ]
    
    
    Plantilla.forEach(
    
        function(valorActual){
    
            console.log(valorActual);
    
        }
    );
    */
    var ListadeMateriasIngresadas = [];
    var NoEsEntero;
    var NoEstaEnHorarioPermitido;
    var opcionInvalida;
    var contador = 0;
    function CreandoMateria() {
        return __awaiter(this, void 0, void 0, function () {
            var nombreMateria;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prompts({
                            type: "string",
                            name: "Materia",
                            message: "Dame el nombre de la Materia que deseas Ingresar "
                        })];
                    case 1:
                        nombreMateria = _a.sent();
                        IngresarHorarios(nombreMateria.Materia);
                        return [2 /*return*/];
                }
            });
        });
    }
    function IngresarHorarios(nombreMateria) {
        return __awaiter(this, void 0, void 0, function () {
            var ElDia, LaHoraInicial, LaHoraFinal, FilaMateria, OtroHorario, ColumnaMateria, NoEnteroHoradeInicio, NoEnteroHoradeSalida, FueradeRangoHoradeInicio, FueradeRangoHoradeSalida, InicioDudoso, NuevaMateria;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prompts({
                            type: "number",
                            name: "Dia",
                            message: "'Selecciona el dia de clases' \n Lunes --> 1 \n Martes --> 2 \n Miercoles --> 3 \n Jueves --> 4 \n Viernes --> 5 \n No hay mas dias que ingresar --> 0"
                        })];
                    case 1:
                        FilaMateria = _a.sent();
                        NoEsEntero = Math.floor(FilaMateria.Dia) != FilaMateria.Dia;
                        opcionInvalida = FilaMateria.Dia < 0 || FilaMateria.Dia > 5;
                        if (!(FilaMateria.Dia == 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, prompts({
                                type: "number",
                                name: "Tomar datos",
                                message: "Existe otro horario para esta materia? \n si --> 1 \n no --> 0 "
                            })];
                    case 2:
                        OtroHorario = _a.sent();
                        _a.label = 3;
                    case 3:
                        ElDia = FilaMateria;
                        _a.label = 4;
                    case 4:
                        if (NoEsEntero || opcionInvalida) return [3 /*break*/, 0];
                        _a.label = 5;
                    case 5: return [4 /*yield*/, prompts({
                            type: "number",
                            name: "HoradeInicio",
                            message: "Hora de Inicio: "
                        }, {
                            type: "number",
                            name: "HoradeSalida",
                            message: "Hora de Salida: "
                        })];
                    case 6:
                        ColumnaMateria = _a.sent();
                        NoEnteroHoradeInicio = Math.floor(ColumnaMateria[0].HoradeInicio) != ColumnaMateria[0].HoradeInicio;
                        NoEnteroHoradeSalida = Math.floor(ColumnaMateria[1].HoradeSalida) != ColumnaMateria[1].HoradeSalida;
                        FueradeRangoHoradeInicio = ColumnaMateria[0].HoradeInicio < 7 || ColumnaMateria[1].HoradeInicio > 20;
                        FueradeRangoHoradeSalida = ColumnaMateria[1].HoradeSalida < 7 || ColumnaMateria[1].HoradeSalida > 20;
                        InicioDudoso = ColumnaMateria[0].HoradeInicio >= ColumnaMateria[1].HoradeSalida;
                        NoEsEntero = NoEnteroHoradeInicio || NoEnteroHoradeSalida;
                        NoEstaEnHorarioPermitido = FueradeRangoHoradeInicio || FueradeRangoHoradeSalida || InicioDudoso;
                        LaHoraInicial = ColumnaMateria[0].HoradeInicio;
                        LaHoraFinal = ColumnaMateria[1].HoradeSalida;
                        _a.label = 7;
                    case 7:
                        if (NoEsEntero || NoEstaEnHorarioPermitido) return [3 /*break*/, 5];
                        _a.label = 8;
                    case 8:
                        NuevaMateria = {
                            id: contador,
                            materia: nombreMateria,
                            Día: ElDia,
                            HoraDeInicio: LaHoraInicial,
                            HoraDeSalida: LaHoraFinal
                        };
                        ListadeMateriasIngresadas.push(NuevaMateria);
                        console.log(NuevaMateria);
                        console.log(ListadeMateriasIngresadas);
                        return [2 /*return*/];
                }
            });
        });
    }
    CreandoMateria();
}
Principal();
