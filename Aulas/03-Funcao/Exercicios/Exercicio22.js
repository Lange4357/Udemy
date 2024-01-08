const jurosAnuidade = function(mes, valor){

    let Anuidade = valor * Math.pow((1 + 0.05 ), (mes - 1))

    return Anuidade
}

console.log(jurosAnuidade(6, 1000).toFixed(2))