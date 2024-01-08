const trocaChaveValor = (array) =>{
   let novoArray = {}
   for(let chave in array){
      novoArray[array[chave]] = chave
   }
   return novoArray
}

console.log(trocaChaveValor({a: 1, b: 2, c: 3}))