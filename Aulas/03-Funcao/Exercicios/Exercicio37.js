const PA = function(n, a1, r){
    let res = a1, soma = 0
    for(let i = 1; i < n; i++){
        process.stdout.write(`${res} `)
        soma += res
        res += r
    }
    process.stdout.write(`= ${soma}\n`)
}

const PG = function(n, a1, r){
    let res = a1, soma = 0
    for(let i = 1; i <= n; i++){
        process.stdout.write(`${res} `)
        soma += res
        res *= r
    }
    process.stdout.write(`= ${soma}\n`)
    
}

PA(6, 2, 3)
PG(5, 1, 2)