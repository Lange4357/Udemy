const pares = (array) =>{
    const nArray = []
    for(let i in array){
        if(i % 2 == 0){
            if(array[i] % 2 == 0){
                nArray.push(array[i])
            }
        }
    }
    return nArray
}

console.log(pares([1,2,3,4]))
console.log(pares([10, 70, 22, 43]))