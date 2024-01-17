function funcionarOuNao(valor, chanceErro){
   return new Promise((resolve, reject) => {
      (Math.random() < chanceErro) ? reject('Ocorreu um erro!') : resolve(valor)
   })
}

funcionarOuNao('Testando...', 0.5)
   .then(v => console.log(`Valor: ${v}`))
   .catch(err => console.log(`Erro: ${err}`))
   .then(() => console.log('Fim!'))