const deleta = (obj, prop) =>{
    const obj1 = obj
    delete obj1[prop]
    return obj1    
}

console.log(Object.is(console.log(deleta({a: 1, b: 2}, "b"))))
console.log(deleta({
    id: 20,
    nome: 'caneta',
    descricao: 'Não preenchido'
}, 'descricao'))