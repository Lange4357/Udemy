const Pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(Pessoa))
console.log(Object.values(Pessoa))
console.log(Object.entries(Pessoa))

Object.entries(Pessoa).forEach(([chave, valor])=>{
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(Pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

Pessoa.dataNascimento = '01/01/2017'

console.log(Pessoa.dataNascimento)
console.log(Object.keys(Pessoa))


// Object.assign

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234

console.log(obj)