const notas = function(vet){
    for(let i in vet){
        let conceito
        if(vet[i] < 5){
            conceito = "D"
        }
        else if(vet[i] < 7){
            conceito = "C"
        }
        else if(vet[i] < 9){
            conceito = "B"
        }
        else{
            conceito = "A"
        }
        console.log(`Nota: ${vet[i]}\nConceito: ${conceito}`)
    }
}

const nota = [4.9, 6.9, 7, 8.9, 9, 10]
notas(nota)