const ConverteValor = function(ValorDecim){
    let ValorReal = `R$ ${ValorDecim.toFixed(2).toString().replace(".", ",")}`
    console.log(ValorReal)    
}

ConverteValor(0.1 + 0.2)