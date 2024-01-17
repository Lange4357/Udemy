function txt(){
   return new Promise(resolve =>{
      const fs = require('fs')
      const path = require('path')
      const caminho = path.join(__dirname, 'dados.txt')
      fs.readFile(caminho, 'utf8', (erro, resultado) =>{
         if(erro){
            console.log(`Erro ao ler o arquivo dados.txt: ${erro}`)
            return
         }
         resolve(resultado.toString())
      })
   })
}

txt()
   .then(conteudo => conteudo.split(''))
   .then(linhas => linhas.join(','))
   .then(conteudo => `O valor final é: ${conteudo}`)
   .then(console.log)