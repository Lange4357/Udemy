const nums = (array) =>{
    const nArray = []
    array.forEach(element =>{
        if(typeof element == 'number'){
            nArray.push(element)
        }
    })
    return nArray
}
console.log(nums(['Javascript', 1, '3', 'web', 20]))
console.log(nums(['a', 'c']))