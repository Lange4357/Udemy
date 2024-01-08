const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome:'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false}
]

console.log(alunos.map(bolsa => bolsa.bolsista))

const todosBolsistas = (resultado, bolsista) => resultado && bolsista

const algumBolsista = (resultado, bolsista) => resultado || bolsista

resultado = alunos.map(bolsa => bolsa.bolsista).reduce(algumBolsista)

console.log(resultado)