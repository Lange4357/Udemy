const soma = function(x, y){
    return x + y
}

const imprimirRestuldado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}


imprimirRestuldado(3, 4)
imprimirRestuldado(3, 4, soma)
imprimirRestuldado(3, 4, function(x, y){
    return x - y
})
imprimirRestuldado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function(){
        console.log("Opa")
    }
}


pessoa.falar()