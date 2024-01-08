const carrinho = [
    '{ "nome": "Borracha", "Preco": 3.45}',
    '{ "nome": "Caderno", "Preco": 13.90}',
    '{ "nome": "Kit de Lapis", "Preco": 41.22}',
    '{ "nome": "Caneta", "Preco": 7.50}'
]

const Preco = carrinho.map(function(vet){
    let obj = JSON.parse(vet)
    return obj.Preco
})

for(let i in Preco){
    console.log(Preco[i].toFixed(2))
}