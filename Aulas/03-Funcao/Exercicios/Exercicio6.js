const JurosSimples = function(valorInicial, juros, tempoAplicacao){
    juros = juros / 100
    let ValorTot = valorInicial * juros * tempoAplicacao
    return console.log(`Calculo de juros simples: ${ValorTot.toFixed(2).toString().replace(".", ",")}`)
}

const JurosComposto = function(valorInicial, juros, tempoAplicacao){
    juros = juros / 100
    let ValorTot = valorInicial * Math.pow((1 + juros), tempoAplicacao)
    return console.log(`Calculo de juros composto: R$ ${ValorTot.toFixed(2).toString().replace(".", ",")}` )

}

JurosSimples(800, 2, 12)

JurosComposto(1000, 12, 12)