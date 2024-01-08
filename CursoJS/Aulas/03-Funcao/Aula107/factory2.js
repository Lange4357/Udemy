function criarProduto(nom= "Padrão", prec= 50){
    return {
        nome: nom,
        preco: prec,
        desconto: 10,
        total: prec - 10
    }
}

console.log(criarProduto())
console.log(criarProduto(`Sandalia`, 29.9))