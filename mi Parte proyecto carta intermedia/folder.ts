
export function DeseaJugar():boolean{
    const Eleccion = prompt(" Carta Intermedia \n ¿ Deseas Apostar ?");
    const Seguir = Eleccion == "Si"|| Eleccion== "SI"|| Eleccion== "si";
    const Abandonar = Eleccion == "NO"|| Eleccion== "No"|| Eleccion== "no";
    if(Seguir){
       


    }if(Abandonar){

        
        console.log("Fin del juego");
        //console.log(ImprimirRerultados);

    }else{
        DeseaJugar();
    }
}