import { AsC, DosC, TresC, CuatroC, CincoC, SeisC, SieteC, OchoC, NueveC, DiezC, JotaC, QuuC, kaaC } from "./cartas/numeros_corazon";

//Cambiar los numeros del arreglo de cartas por los strings de cada carta
export function convertirCartas(Ingresanumero: number){
    let lacartaElegida;
    switch(Ingresanumero){
        case 1:
            lacartaElegida = AsC("")
            break;
        case 2:
            lacartaElegida = DosC("")
            break;
        case 3:
            lacartaElegida = TresC("")
            break;
        case 4:
            lacartaElegida = CuatroC("")
            break;
        case 5:
            lacartaElegida = CincoC("")
            break;
        case 6:
            lacartaElegida = SeisC("")
            break;
        case 7:
            lacartaElegida = SieteC("")
            break;
        case 8:
            lacartaElegida = OchoC("")
            break;
        case 9:
            lacartaElegida = NueveC("")
            break;
        case 10:
            lacartaElegida = DiezC("")
            break;
        case 11:
            lacartaElegida = JotaC("")
            break;            
        case 12:           
            lacartaElegida = QuuC("")
            break;
        case 13:
            lacartaElegida = kaaC("")
            break;
    }

    return lacartaElegida;

}





















