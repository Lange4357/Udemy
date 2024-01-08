const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]
console.log(`Vetor pilha: ${vetorPilha}`)
for(let i in vetorPilha){
    vetorPilha.push(vetorAdiciona[i])
}

console.log(`Vetor adicionado: ${vetorAdiciona}\nVetor pilha: ${vetorPilha}`)