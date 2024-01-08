let negativo = 0

const Negativo = function(vet, i){
    if(i == 6){
        return 1
    }
    else{
        if(vet[i] < 0){
            negativo++
        }
        Negativo(vet, ++i)
    }
    return `Numeros negativos no vetor: ${negativo}`
}

const vetor = [-2,0,1,25,-10,-5]
console.log(Negativo(vetor, 0))