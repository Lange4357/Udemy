const Troco = function(troco){
    
    let qtd100 = 0, qtd50 = 0, qtd5 = 0, qtd10 = 0, qtd1 = 0
    
    while(troco >= 100){
        qtd100++
        troco -= 100
    }
    while(troco >= 50){
        qtd50++
        troco -= 50
    }
    while(troco >= 10){
        qtd10++
        troco -= 10
    }
    while(troco >= 5){
        qtd5++
        troco -= 5
    }
    while(troco >= 1){
        qtd1++
        troco -= 1
    }

    if(qtd100 > 0) console.log(`${qtd100} nota(s) de R$ 100,00`)
    if(qtd50 > 0) console.log(`${qtd50} nota(s) de R$ 50,00`)
    if(qtd10 > 0) console.log(`${qtd10} nota(S) de R$ 10,00`)
    if(qtd5 > 0) console.log(`${qtd5} nota(s) de R$ 5,00`)
    if(qtd1 > 0) console.log(`${qtd1} nota(s) de R$ 1,00`)
}


Troco(156)