const saudacao = "Opa"  // Contexto léxico 1

function exec(){
    const saudacao = "Falaaa" // Contexto Léxico 2
    return saudacao
}

const cliente = {
    nome: "Pedro", 
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: "Rua 102 A",
        numero: 50
    }
}

console.log(saudacao)
console.log(exec())

console.log(cliente)