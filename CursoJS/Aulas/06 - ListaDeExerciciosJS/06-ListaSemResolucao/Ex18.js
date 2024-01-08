const despesas = array =>{
    let valor = 0
    for(let i in array){
        let obj = array[i]
        valor += obj.preco
    }
    return valor
}

console.log(despesas([{
    nome: 'Jornal online',
    categoria: 'Informação',
    preco: 89.99
}, {
    nome: 'Cinema', 
    categoria: 'Entretenimento',
    preco: 150
}])) 

console.log(despesas([{
    nome: 'Galaxy S20',
    categoria: 'Eletrônicos',
    preco: 3599.99
},{
    nome: 'Macbook Pro',
    categoria: 'Eletrônicos',
    preco: 30999.90
}]))