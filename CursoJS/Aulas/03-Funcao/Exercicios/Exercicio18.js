const Numero = function(num){
    switch(num){
        case 0:
            return "Zero"
        case 1:
            return "Um"
        case 2:
            return "Dois"
        case 3:
            return "Três"
        case 4:
            return "Quatro"
        case 5:
            return "Cinco"
        case 6:
            return "Seis"
        case 7:
            return "Sete"
        case 8:
            return "Oito"
        case 9:
            return "Nove"
        case 10:
            return "Dez"
        default:
            return "Numero fora do intervalo permitido!"
    }
}

console.log(Numero(-1))
console.log(Numero(0))
console.log(Numero(1))
console.log(Numero(2))
console.log(Numero(3))
console.log(Numero(4))
console.log(Numero(5))
console.log(Numero(6))
console.log(Numero(7))
console.log(Numero(8))
console.log(Numero(9))
console.log(Numero(10))
console.log(Numero(11))
