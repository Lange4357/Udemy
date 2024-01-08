const Aumento = function(salario, plano){
    switch(plano){
        case "A":
            salario += salario * 0.10
            return salario
        case "B":
            salario += salario * 0.15
            return salario
        case "C":
            salario += salario * 0.20
            return salario
        default:
            return "O plano de aumento é invalido!"
    }
}

console.log(Aumento(1000, "A"))