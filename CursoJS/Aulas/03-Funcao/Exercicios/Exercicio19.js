const Valor = function(codigo, qtd){
    switch(codigo){
        case 100:
            return qtd * 3.00
        case 200:
            return qtd * 4.00
        case 300:
            return qtd * 5.50
        case 400:
            return qtd * 7.50
        case 500:
            return qtd * 3.50
        case 600:
            return qtd * 2.80
        default:
            return "O código do produto informado não existe!"


    }
}

console.log(Valor(600, 5))