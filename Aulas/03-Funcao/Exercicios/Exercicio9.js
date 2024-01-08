const SistNotas = function(nota){
    if(nota >= 38){
        for(let i = 0; i <=100; i++){
            if(i % 5 == 0){
                //console.log(i)
                if(nota >= i - 2 && nota < i){
                    nota = i;
                }
            }
        }
        if(nota > 100){
            nota = 100
        }
        console.log(`Nota: ${nota}\nSituação: Aprovado!`)
    }
    else{
        console.log(`Nota: ${nota}\nSituação: Reprovado!`)
    }
}

SistNotas(84)