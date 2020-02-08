let x = [1,2,3]
let total_cartas = x.reduce(
    function(acumulador,valoractual){
        return acumulador + valoractual
    },
    0
)
let aleatorio = -1
while(aleatorio != 0){
    aleatorio = Math.ceil(12*Math.random())
    console.log(aleatorio)
}*/
/*const respuesta = x.reduce(function(acumulador,valoractual){
    if(valoractual == 0){
        acumulador++
        return acumulador
    }else{
        return acumulador
    }
},0)
console.log(respuesta)*/