const Media = function(vet){
    var soma = vet[0]
    for(var i = 1; i < vet.length; i++){
        soma += vet[i]
    }
    console.log(`Média: ${(soma / i).toFixed(2)}`)
}

const vetor = [2,1,7]
Media(vetor)