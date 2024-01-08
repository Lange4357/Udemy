const melhorAluno = objeto =>{
   let melhor = {}, melhorResultado = {}
   let result = 0, fChave, fValor
   for(let aux in objeto){
      melhor[aux] = objeto[aux]
      break
   }
   for(let aluno in objeto){
      let soma = 0, i = 0, vFinal = 0
      for(i = 0; i < objeto[aluno].length; i++){
         soma += objeto[aluno][i]
      }
      vFinal = soma / i
      if(vFinal > result){
         fChave = aluno
         fvalor = objeto[aluno]
         result = vFinal
      }
   }
   melhorResultado[fChave] = objeto[fChave]
   melhorResultado.Media = result
   return melhorResultado
}

console.log(melhorAluno({
   Joao: [8, 7.6, 8.9, 6],
   Mariana: [9, 6.6, 7.9, 8],
   Carla: [7, 7, 8, 9]
}))