const funcaoDaSorte = N =>{
    const temp = Math.floor(Math.random() * (10 - 1 + 1)) + 1
    if(temp == N){
        console.log(`Parabéns o numero sorteado foi ${N}\n`)
    }
    else{
        console.log(`Que pena! O numero sorteado foi ${temp}`)
    }
}


funcaoDaSorte(10)