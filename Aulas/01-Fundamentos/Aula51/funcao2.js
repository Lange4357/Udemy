const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)


// Armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {
    return a + b
}
console.log(soma(4, 2))

// Retorno implicito

const subtracao = (a, b) => a - b
console.log(subtracao(9, 1))