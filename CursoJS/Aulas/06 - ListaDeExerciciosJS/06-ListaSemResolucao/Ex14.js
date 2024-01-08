const transforma = (obj) =>{
    const objeto = Object.keys(obj).map((chave =>{
        const nArray = []
        nArray.push(chave, obj[chave])
        return nArray
    }))
    return objeto
}

const obj = {
    nome: 'João',
    profissao: 'Assistente'
}

const obj1 = {
    codigo: 1111,
    preco: 12000
}


console.log(transforma(obj))
console.log(transforma(obj1))