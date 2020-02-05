function Randomizar(){
    let cartas = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    let contadores = [4,4,4,4,4,4,4,4,4,4,4,4,4]
    function SacarCartas(){
        let ValorAleatorio1 = Math.floor(12*Math.random())
        let ValorAleatorio2 = Math.floor(12*Math.random())
        // console.log(ValorAleatorio)
        let carta_obtenida1 = cartas[ValorAleatorio1]
        let carta_obtenida2 = cartas[ValorAleatorio2]
        if( contadores[ValorAleatorio1] != 0 && contadores[ValorAleatorio2] != 0){
            console.log(contadores)
            contadores[ValorAleatorio1]--
            contadores[ValorAleatorio2]--
            SacarCartas()
        }else{
            if(contadores[ValorAleatorio1] != 0 || contadores[ValorAleatorio2] != 0){
                SacarCartas()
            }
            else{
                let todossoncero = contadores.every(function(valoractual){
                    return valoractual == 0
                })
                if(todossoncero){
                    console.log('Las cartas se han acabado')
                    console.log(contadores)
                }else{
                    SacarCartas()
                } 
            }
        }
        }    
    SacarCartas()
}
Randomizar()