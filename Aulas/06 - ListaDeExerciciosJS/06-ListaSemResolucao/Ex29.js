const segundoMaior = array =>{
   let maior = -999
   for(let i in array){
      if(array[i] > maior && array[i] != Math.max(...array)){
         maior = array[i]
      }
   }
   return maior
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))