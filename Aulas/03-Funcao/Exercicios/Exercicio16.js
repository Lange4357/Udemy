const Calculadora = function(n1, sinal, n2){
    switch(sinal){
        case "+":
            return n1 + n2
        case "-":
            return n1 - n2
        case "*":
            return n1 * n2
        case "/":
            return n1 / n2
        default:
            return "Operação inserida é inválida!"
    }
}

console.log(Calculadora(1, "+", 2))
console.log(Calculadora(1, "-", 2))
console.log(Calculadora(1, "*", 2))
console.log(Calculadora(1, "/", 2))
console.log(Calculadora(1, "x", 2))