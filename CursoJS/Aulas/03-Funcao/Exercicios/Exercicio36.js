const funcao1 = function(vet, n){
    const vetor = []
    for(let i in vet){
        vetor[i] = vet[i] * n
    }
    vetores = {
        vetor1: vetor
    }
    if(n > 5){
        vetores.vetor2 = funcao2(vet, n)
    }
    
    return vetores
}

const funcao2 = function(vet, n){
    const vetor = []
    for(let i in vet){
        vetor[i] = vet[i] * n
    }
    return vetor
}

const vet = [1, 2, 3, 4]
console.log(funcao1(vet, 6))