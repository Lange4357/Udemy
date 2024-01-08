const MaiorMenor = function(vet){
    let Maior = vet[0], Menor = vet[0]
    for(let i = 0; i < vet.length; i++){
        if(vet[i] > Maior){
            Maior = vet[i]
        }
        if(vet[i] < Menor){
            Menor = vet[i]
        }
    }
    console.log(`Maior: ${Maior}\nMenor: ${Menor}`)
}

const vetor = [0,1,2,3,4,-25,5,6,7,8,9,10,1000]

MaiorMenor(vetor)