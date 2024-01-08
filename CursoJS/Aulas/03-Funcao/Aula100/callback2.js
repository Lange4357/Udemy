const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.2, 9.0]

//Sem Callback
let NotasBaixas = []
for (let i in notas){
    if(notas[i] < 7){
        NotasBaixas.push(notas[i])
    }
}

console.log(NotasBaixas)


const NotasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(NotasBaixas2)

const notasMen = nota => nota < 7
const NotasBaixas3 = notas.filter(notasMen)

console.log(NotasBaixas3)