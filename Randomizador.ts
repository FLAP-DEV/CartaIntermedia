import * as prompts from 'prompts'
async function Randomizar(){
    let cartas = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    let contadores = [4,4,4,4,4,4,4,4,4,4,4,4,4]
    async function SacarCartas(){     
        let numero_de_ceros = contadores.reduce(function(acumulador,valoractual){
            if(valoractual == 0){
                acumulador++
                return acumulador
            }else{
                return acumulador
            }
        },0)
        console.log(numero_de_ceros)
        verificar_ceros()
        function verificar_ceros(){
            if(contadores.some(function(valoractual){
                return valoractual == 0
            })){
                let posicion_del_cero = contadores.indexOf(0)
                switch(numero_de_ceros){
                    case 1 :
                        cartas.splice(posicion_del_cero,1)
                        console.log('Se ha eliminado', posicion_del_cero)
                        break;
                    case 2 :
                        cartas.splice(posicion_del_cero,1)
                        cartas.splice(contadores.indexOf(0),1)
                        break;
                }
                contadores = contadores.filter(function(valoractual){
                    return valoractual != 0
                })
            }
        }
 
        let ValorAleatorio1 = Math.floor((contadores.length-1)*Math.random())
        let ValorAleatorio2 = Math.floor((contadores.length-1)*Math.random())
        // console.log(ValorAleatorio)
        let carta_obtenida1 = cartas[ValorAleatorio1]
        let carta_obtenida2 = cartas[ValorAleatorio2]
        console.log(carta_obtenida1, carta_obtenida2)
        //console.log(carta_obtenida1,carta_obtenida2)
        if(ValorAleatorio1 != ValorAleatorio2){
            contadores[ValorAleatorio1]--
            contadores[ValorAleatorio2]--
            //console.log(ValorAleatorio1,ValorAleatorio2)
            console.log(contadores)
            console.log(cartas)
            decidir()
        }else{
            if(contadores[ValorAleatorio1]==1){
                SacarCartas()
            }else{
                contadores[ValorAleatorio1]--
            contadores[ValorAleatorio2]--
            //console.log(ValorAleatorio1,ValorAleatorio2)
            console.log(contadores)
            console.log(cartas)
            decidir()
            }
            }
            async function decidir(){
                let decision = await prompts({
                    type: 'text',
                    name: 'eleccion',
                    message: 'Inserte: \n 1 -> Seguir 0 -> Salir'
                })
                switch(decision.eleccion){
                    case '0':
                        console.log('Finalizado')
                        break;
                    case '1':
                        let total_cartas = contadores.reduce(
                            function(acumulador,valoractual){
                                return acumulador + valoractual
                            },
                            0
                        )
                        if(total_cartas != 0){
                            SacarCartas() 
                        }else{
                            console.log('Se han acabado las cartas')
                        }                          
                        break;
                }
            }
            
    }  
    SacarCartas() 
}
Randomizar()
