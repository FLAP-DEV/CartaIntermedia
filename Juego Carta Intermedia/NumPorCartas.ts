import { AsC, DosC, TresC, CuatroC, CincoC, SeisC, SieteC, OchoC, NueveC, DiezC, JotaC, QuuC, kaaC } from "./cartas/numeros_corazon";
import { DosCN, TresCN, CuatroCN, CincoCN, SeisCN, SieteCN, OchoCN, NueveCN, DiezCN, JotaCN, QuuCN, kaaCN, AsCN } from "./cartas/numeros_c_negro";
import { DosD, TresD, CuatroD, CincoD, SeisD, SieteD, OchoD, NueveD, DiezD, JotaD, QuuD, kaaD, AsD } from "./cartas/numeros_diamantes";
import { Dos, Tres, Cuatro, Cinco, Seis, Siete, Ocho, Nueve, Diez, Jota, Quu, kaa, As } from "./cartas/numeros_trebol";

//Cambiar los numeros del arreglo de cartas por los strings de cada carta
export function convertirCartas(Ingresanumero: number){
    let lacartaElegida;
    let min = Math.ceil(1);  //CON ESTO, DEFINO NUMEROS ALEATORIOS DEL 1 AL 4, ESTO LO HICE PARA QUE SALGAN ALEATORIAS
    let max = Math.floor(4); //LAS CARTAS, ES DECIR, SI SALE 1: ME SACA CORAZON, 2: CORAZON NEGRO, 3: dIAMANTE, 4:tREBOL
    let respuesta = Math.floor(Math.random() * (1 + max - min) + min);
    
    
    switch(Ingresanumero){ //OBVIAMENTE, EL INGRESANUMERO ES PARA SABER QUE NUMERO DEBE IMPRIMIR EN PANTALLA
        case 1: //AS
            if(respuesta == 1){
                lacartaElegida = AsC(""); //Corazon
            }
            if(respuesta == 2){
                lacartaElegida = AsCN(""); //Corazon Negro
            }
            if(respuesta == 3){
                lacartaElegida = AsD(""); //Diamante
            }
            if(respuesta == 4){
                lacartaElegida = As(""); //Trebol
            }
            
            break;
        case 2:
            if(respuesta == 1){
                lacartaElegida = DosC("");
            }
            if(respuesta == 2){
                lacartaElegida = DosCN("");
            }
            if(respuesta == 3){
                lacartaElegida = DosD("");
            }
            if(respuesta == 4){
                lacartaElegida = Dos("");
            }
            
            break;
        case 3:
            if(respuesta == 1){
                lacartaElegida = TresC("")
            }
            if(respuesta == 2){
                lacartaElegida = TresCN("");
            }
            if(respuesta == 3){
                lacartaElegida = TresD("");
            }
            if(respuesta == 4){
                lacartaElegida = Tres("");
            }
            
            break;
        case 4:
            if(respuesta == 1){
                lacartaElegida = CuatroC("");
            }
            if(respuesta == 2){
                lacartaElegida = CuatroCN("");
            }
            if(respuesta == 3){
                lacartaElegida = CuatroD("");
            }
            if(respuesta == 4){
                lacartaElegida = Cuatro("");
            }
            
            break;
        case 5:
            if(respuesta == 1){
                lacartaElegida = CincoC("");
            }
            if(respuesta == 2){
                lacartaElegida = CincoCN("");
            }
            if(respuesta == 3){

                lacartaElegida = CincoD("");
            }
            if(respuesta == 4){
                lacartaElegida = Cinco("");
            }
            
            break;
        case 6:
            if(respuesta == 1){
                lacartaElegida = SeisC("");
            }
            if(respuesta == 2){
                lacartaElegida = SeisCN("");
            }
            if(respuesta == 3){
                lacartaElegida = SeisD("");
            }
            if(respuesta == 4){
                lacartaElegida = Seis("");
            }
            
            break;
        case 7:
            if(respuesta == 1){
                lacartaElegida = SieteC("");
            }
            if(respuesta == 2){
                lacartaElegida = SieteCN("");
            }
            if(respuesta == 3){
                lacartaElegida = SieteD("");
            }
            if(respuesta == 4){
                lacartaElegida = Siete("");
            }
            
            break;
        case 8:
            if(respuesta == 1){
                lacartaElegida = OchoC("");
            }
            if(respuesta == 2){
                lacartaElegida = OchoCN("");
            }
            if(respuesta == 3){
                lacartaElegida = OchoD("");
            }
            if(respuesta == 4){
                lacartaElegida = Ocho("");
            }
            
            break;
        case 9:
            if(respuesta == 1){
                lacartaElegida = NueveC("");
            }
            if(respuesta == 2){
                lacartaElegida = NueveCN("");
            }
            if(respuesta == 3){
                lacartaElegida = NueveD("");
            }
            if(respuesta == 4){
                lacartaElegida = Nueve("");
            }
            
            break;
        case 10:
            if(respuesta == 1){
                lacartaElegida = DiezC("");
            }
            if(respuesta == 2){
                lacartaElegida = DiezCN("");
            }
            if(respuesta == 3){
                lacartaElegida = DiezD("");
            }
            if(respuesta == 4){
                lacartaElegida = Diez("");
            }
            
            break;
        case 11:
            if(respuesta == 1){
                lacartaElegida = JotaC("");
            }
            if(respuesta == 2){
                lacartaElegida = JotaCN("");
            }
            if(respuesta == 3){
                lacartaElegida = JotaD("");
            }
            if(respuesta == 4){
                lacartaElegida = Jota("");
            }
            
            break;            
        case 12:
            if(respuesta == 1){
                lacartaElegida = QuuC("")
            }
            if(respuesta == 2){
                lacartaElegida = QuuCN("");
            }
            if(respuesta == 3){
                lacartaElegida = QuuD("");
            }
            if(respuesta == 4){
                lacartaElegida = Quu("");
            } 
            
            break;
        case 13:
            if(respuesta == 1){
                lacartaElegida = kaaC("")
            }
            if(respuesta == 2){
                lacartaElegida = kaaCN("");
            }
            if(respuesta == 3){
                lacartaElegida = kaaD("");
            }
            if(respuesta == 4){
                lacartaElegida = kaa("");
            }
            
            break;
    }

    return lacartaElegida;

}
















