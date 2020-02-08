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
            console.log('cartas obtenidas:',carta_obtenida1, carta_obtenida2,carta_obtenida3)
            console.log('contadores:', contadores)
            console.log('cartas:    ', cartas)
            console.log("Total:", total_cartas)
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
                        
                        if(total_cartas != 1){
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
