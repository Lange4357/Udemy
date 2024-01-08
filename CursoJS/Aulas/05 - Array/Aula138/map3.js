Array.prototype.map2 = function(callback){
    const nArray = []
    for(let i = 0; i < this.length; i++){
        nArray.push(callback(this[i]))
    }
    return nArray
}


const carrinho = [
    '{ "nome": "Borracha", "Preco": 3.45}',
    '{ "nome": "Caderno", "Preco": 13.90}',
    '{ "nome": "Kit de Lapis", "Preco": 41.22}',
    '{ "nome": "Caneta", "Preco": 7.50}'
]

const Preco = carrinho.map2(function(vet){
    let obj = JSON.parse(vet)
    return obj.Preco
})

console.log(Preco)