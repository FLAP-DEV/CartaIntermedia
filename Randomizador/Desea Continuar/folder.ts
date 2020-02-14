
export function DeseaApostar(Carta: any){
    const Eleccion = prompt(" Carta Intermedia \n ¿ Deseas Jugar ?");
    const Seguir = Eleccion == "Si"|| Eleccion== "SI"|| Eleccion== "si";
    const Abandonar = Eleccion == "NO"|| Eleccion== "No"|| Eleccion== "no";
    if(Seguir){

       console.log(Carta);


    }if(Abandonar){

        console.log("Fin del juego");
        console.log('ImprimirRerultados');

    }else{
        console.log("Opcion no valida");
    }
}