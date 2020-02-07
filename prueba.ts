let x = [1,2,3]
let total_cartas = x.reduce(
    function(acumulador,valoractual){
        return acumulador + valoractual
    },
    0
)
console.log(total_cartas)
x.splice(-1,1)
x.splice(0,1)
console.log(x)
console.log(x.length)
console.log(x[-1])
/*const respuesta = x.reduce(function(acumulador,valoractual){
    if(valoractual == 0){
        acumulador++
        return acumulador
    }else{
        return acumulador
    }
},0)
console.log(respuesta)*/