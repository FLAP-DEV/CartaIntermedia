let x = [1,1,1,2]
x.splice(-1,1)
x.splice(0,1)
console.log(x)
console.log(x.indexOf(0))
/*const respuesta = x.reduce(function(acumulador,valoractual){
    if(valoractual == 0){
        acumulador++
        return acumulador
    }else{
        return acumulador
    }
},0)
console.log(respuesta)*/