const Ler = require("readline")

const Lerlinha = Ler.createInterface({
    input: process.stdin,
    output: process.stdout
})

const Intervalo = function(){
    Lerlinha.question("Digite numeros separados por espaço: ", (str) =>{
        let num = str.split(" ")
        let Int10_20 = 0
        let Fora = 0
        for(let i = 0; i < num.length; i++){
            if(num[i] >= 10 && num[i] <= 20){
                Int10_20++
            }
            else{
                Fora++
            }
        }
        console.log(`Numeros dentro do intervalo [10,20]: ${Int10_20}`)
        console.log(`Numeros fora do intervalo [10, 20]: ${Fora}`)
        Lerlinha.close()
    })
}

Intervalo()