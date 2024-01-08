const notas = function(cod, N1, N2, N3){
  if(cod < 0){
    console.log("Encerrando...")
    return
  }
  else{
    console.log(`Código: ${cod}\nN1: ${N1}\nN2: ${N2}\nN3: ${N3}`)
    let nf = N1 * 0.4 + N2 * 0.3 + N3 * 0.3
    if(nf >= 5){
      console.log(`Aprovado`)
    }
    else{
      console.log(`Reprovado`)
    }
    Ler()
  }
}


const Ler = function(){
  var codigo, n1, n2, n3
  const LerLinha = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
  })

  LerLinha.question("Digite o código do aluno: ", (cod) =>{
    codigo = cod
    if(codigo < 0){
      notas(codigo)
      LerLinha.close()
    }
    else{
      LerLinha.question("Digite a N1: ", (nota) =>{
        n1 = nota
        LerLinha.question("DIgite a N2: ", (nota) =>{
          n2 = nota
          LerLinha.question("Digite a N3: ", (nota) =>{
            n3 = nota
            LerLinha.close()
            notas(codigo, n1, n2, n3)
          })
        })
      })
    }
  })
}

Ler()