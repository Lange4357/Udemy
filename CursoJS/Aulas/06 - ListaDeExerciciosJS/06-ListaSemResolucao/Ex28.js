const qtdDigitos = (array, t)=>{
   let newArray = []
   for(let i in array){
      if(array[i].toString().length == t){
         newArray.push(array[i])
      }
   }
   return newArray
}


console.log(qtdDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(qtdDigitos([5, 9, 1, 125, 11], 1))