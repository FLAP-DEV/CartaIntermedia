function Randomizar(){
    let cartas = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    let contadores = [4,4,4,4,4,4,4,4,4,4,4,4,4]
    let iteraciones = 0
    function SacarCartas(){
        if(contadores.some(function(valoractual){
            return valoractual == 0
        })){
            let posicion_del_cero = contadores.indexOf(0)
            cartas.splice(posicion_del_cero,1)
            cartas = cartas.filter(function(valoractual){
                return valoractual != 0
            })
            contadores = contadores.filter(function(valoractual){
                return valoractual != 0
            })
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
            iteraciones++
            console.log(contadores)
            console.log(cartas)
            if(iteraciones < 26){
                SacarCartas()
        } 
        }else{
            if(contadores[ValorAleatorio1]==1){
                SacarCartas()
            }else{
                contadores[ValorAleatorio1]--
            contadores[ValorAleatorio2]--
            //console.log(ValorAleatorio1,ValorAleatorio2)
            iteraciones++
            console.log(contadores)
            console.log(cartas)
            if(iteraciones < 26){
                SacarCartas()
        } 
            }
            }
        
    }   
    SacarCartas()
    
}
Randomizar()
