import * as prompts from 'prompts'
import { convertirCartas } from './NumPorCartas'

async function Randomizar(){


    let Inicio =  await prompts({
        type: 'number',
        name: 'Tengo',
        message: 'Seamos Francos, ¿Cuanto dinero tienes?'
    })
    let Presupuesto = Inicio.Tengo // Definimos el presupuesto inicial de jugador 

    let cartas = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    let contadores = [4,4,4,4,4,4,4,4,4,4,4,4,4]
    async function SacarCartas(){     

        
        if(Presupuesto == 0){
            console.log('Juego Amistoso ');

        }
  

        let numero_de_ceros = contadores.reduce( // cuenta cuantos tipos de cartas, estan fuera de la baraja
          function(acumulador,valoractual){
            if(valoractual == 0){
                acumulador++
                return acumulador
            }else{
                return acumulador
            }
           }
        ,0
        )
       
        verificar_ceros()
        function verificar_ceros(){
            if(
                contadores.some(function(valoractual){
                return valoractual == 0
                })

              ){

                let posicion_del_cero = contadores.indexOf(0)
                switch(numero_de_ceros){
                    case 1 :
                        cartas.splice(posicion_del_cero,1)
                        contadores.splice(posicion_del_cero,1)
                        // console.log('Se ha eliminado', posicion_del_cero)
                        break;
                    case 2 :
                        cartas.splice(posicion_del_cero,1)
                        contadores.splice(posicion_del_cero,1)
                        cartas.splice(contadores.indexOf(0),1)
                        contadores.splice(contadores.indexOf(0),1)
                        // console.log('Se han eliminado 2', posicion_del_cero)
                        break;
                    case 3 :
                        cartas.splice(posicion_del_cero,1)
                        contadores.splice(posicion_del_cero,1)
                        cartas.splice(contadores.indexOf(0),1)
                        contadores.splice(contadores.indexOf(0),1)
                        cartas.splice(contadores.indexOf(0),1)
                        contadores.splice(contadores.indexOf(0),1)
                        // console.log('Se han eliminado 3')
                        break;
                }
                /*contadores = contadores.filter(function(valoractual){
                    return valoractual != 0
                })*/
            }
        }
        //math.floor(x) nos envia el entero mas cercano, pero menor o igual  a x
        //math.random(x) envia numeros de coma flotante de [0 a 1)
        let ValorAleatorio1 = Math.floor((contadores.length)*Math.random())
        let ValorAleatorio2 = Math.floor((contadores.length)*Math.random())
        let ValorAleatorio3 = Math.floor((contadores.length)*Math.random())
        let carta_obtenida1 = cartas[ValorAleatorio1]
        let carta_obtenida2 = cartas[ValorAleatorio2]
        let carta_obtenida3 = cartas[ValorAleatorio3]
        

        function eliminar_cartas(){
            
            contadores[ValorAleatorio1]--
            contadores[ValorAleatorio2]--
            contadores[ValorAleatorio3]--
            let total_cartas = contadores.reduce(
                function(acumulador,valoractual){
                    return acumulador + valoractual
                },
                0
            )

            console.log("Tu primera carta es: \n", convertirCartas(carta_obtenida1));
            console.log("Tu segunda carta es:\n ", convertirCartas(carta_obtenida2));
           
        }
        const todos_los_valores_diferentes = ValorAleatorio1 != ValorAleatorio2 && ValorAleatorio1 != ValorAleatorio3 && ValorAleatorio2 != ValorAleatorio3
        const caso1 = (ValorAleatorio1 == ValorAleatorio2 && ValorAleatorio1 != ValorAleatorio3) || 
        ValorAleatorio2 == ValorAleatorio3 && ValorAleatorio1 != ValorAleatorio2
        const caso2 = ValorAleatorio1 == ValorAleatorio3 && ValorAleatorio1 != ValorAleatorio2
        const todos_los_valores_iguales = ValorAleatorio1 == ValorAleatorio2 && ValorAleatorio2 == ValorAleatorio3
        && ValorAleatorio1 == ValorAleatorio3
        if(todos_los_valores_diferentes){
            eliminar_cartas()
            decidir()
        }else{
            if(caso1){
                if(contadores[ValorAleatorio2]==1){
                    SacarCartas()
                }else{
                    eliminar_cartas()
                    decidir()
                }  
            }
            if(caso2){
                if(contadores[ValorAleatorio1] == 1){
                    SacarCartas()
                }else{
                    eliminar_cartas()
                    decidir()
                }
            }
            if (todos_los_valores_iguales){
                if(contadores[ValorAleatorio1] == 2 || contadores[ValorAleatorio1] == 1){
                    SacarCartas()
                }else{
                    eliminar_cartas()
                    decidir()
                }
            }
            }
            let total_cartas = contadores.reduce(
                function(acumulador,valoractual){
                    return acumulador + valoractual
                },
                0
            )
            async function decidir(){

                console.log("\nTe quedan: ", Presupuesto, "\nNo apuestes mas de lo que puedas pagar");
                let decision = await prompts({
                    type: 'number',
                    name: 'eleccion',
                    message: '\n Jugamos?: \n 1 -> Si \n0 -> No'
                })

                switch(decision.eleccion){
                    case 0 :

                        console.log('\n');
                        LeDejamosJugar();
                        break;
                    case 1 :

                        let Apuesta

                        do{

                        let CuantoApuestas = await prompts({
                            type: 'number',
                            name: 'Valor',
                            message: '\n¿Cuanto deseas apostar?'
                        })

                        Apuesta = CuantoApuestas.Valor

                    

                        }while(Apuesta > Presupuesto || Apuesta < 0)

                    

                        console.log('\nTu apuesta es de: ', Apuesta);

                        
                        if(carta_obtenida1 > carta_obtenida3 && carta_obtenida2 < carta_obtenida3){
                            console.log("\n\t\t**********************\n\t\t* YOU WIN!!!!!!!! :) *\n\t\t********************** ");
                            console.log('\nTu tercera carta era....\n ', convertirCartas(carta_obtenida3));
                            Presupuesto = Presupuesto + Apuesta;
                            


                        }else if(carta_obtenida1 < carta_obtenida3 && carta_obtenida2 > carta_obtenida3){
        

                            console.log("\n\t\t**********************\n\t\t* YOU WIN!!!!!!!! :) *\n\t\t********************** ");


                            console.log('\nTu tercera carta era.... \n', convertirCartas(carta_obtenida3));
                            Presupuesto = Presupuesto + Apuesta;
                       

                        }else{
                            console.log("\n\t\t**********************\n\t\t* YOU LOSE!!!!!!! :( *\n\t\t********************** ");
                            console.log('\nTu tercera carta era....\n ', convertirCartas(carta_obtenida3));
                            Presupuesto = Presupuesto - Apuesta;
                         
                        }

                        LeDejamosJugar();
                  
                        break;

                    default:
                        console.log('\nOpcion invalida');
                        decidir();
                        break;
                }
            }

            function LeDejamosJugar(){

                if(total_cartas != 1 ){

                   if(Presupuesto == 0){

                      Randomizar();

                   }else{
                    console.log('\nTe quedan: ', Presupuesto);
                    SacarCartas()
                   } 

                }else{
                    console.log('\nSe han acabado las cartas ')
                }        
            }
            
    }  
    SacarCartas() 
}
Randomizar()