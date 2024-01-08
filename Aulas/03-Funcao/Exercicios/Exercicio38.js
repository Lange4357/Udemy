const impar = function(inicio, fim){
    if(inicio > fim){
        let aux = inicio
        inicio = fim
        fim = aux
    }
    for(let i = inicio; i <= fim; i++){
        if(i % 2 != 0){
            process.stdout.write(`${i} `)
        }
    }
}


impar(0, 100)