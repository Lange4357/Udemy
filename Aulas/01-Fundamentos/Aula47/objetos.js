const prod1 = {}

prod1.nome = "Celular Ultra Mega"
prod1.preco = (4998.90).toLocaleString('pt-br', {style: 'currency', currency: 'brl'})

console.log(prod1)

const prod2 = {
    nome: "Camisa Polo", preco: (79.90).toLocaleString('pt-br', {style: 'currency', currency: 'brl'})
}

console.log(prod2)