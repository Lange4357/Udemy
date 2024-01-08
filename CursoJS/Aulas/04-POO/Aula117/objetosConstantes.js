const Pessoa = { nome: 'João' }
Pessoa.nome = 'Pedro'

console.log(Pessoa)

//Pessoa = { nome: 'Ana' }

Object.freeze(Pessoa)

Pessoa.nome = 'Maria'
Pessoa.endereco = 'Rua 123'
delete Pessoa.nome

console.log(Pessoa)


const PessoaConstante = Object.freeze({ nome: 'João' })
PessoaConstante.nome = 'Maria'
console.log(PessoaConstante)