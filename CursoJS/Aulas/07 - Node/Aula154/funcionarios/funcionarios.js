const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
   const funcionarios = response.data
   
   let funcionariosChineses = funcionarios.filter((i) => {
      return i.pais == 'China' && i.genero == 'F'
   })
   
   let funcionarioMenorSalario = funcionariosChineses.reduce((menorSalario, funcionarioAtual) => {
      return funcionarioAtual.salario < menorSalario.salario ? funcionarioAtual : menorSalario
   }, funcionariosChineses[0])

   console.log('Funcionaria com menor salario: ', funcionarioMenorSalario)
})