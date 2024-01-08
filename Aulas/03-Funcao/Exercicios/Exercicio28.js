const Ler = require("readline")

LerLinha = Ler.createInterface({
    input: process.stdin,
    output: process.stdout
})

function ParImpar(){
    LerLinha.question("Digite numeros separados por espaço: ", (str) =>{
        let num = str.split(" ")
        let par = 0 , impar = 0

        for(let i = 0; i < num.length; i++){
            if(num[i] % 2 == 0){
                par++
            }
            else{
                impar++
            }
        }
        console.log(`Pares: ${par}\nImpares: ${impar}`)
        LerLinha.close()
    })
}
ParImpar()