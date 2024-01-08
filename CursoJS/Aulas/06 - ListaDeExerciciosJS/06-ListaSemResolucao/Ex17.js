const somaArray = (array) =>{
    let result = 0
    array.forEach(elementos => result += elementos)
    return result
}

console.log(somaArray([10,10,10]))
console.log(somaArray([15,15,15,15]))