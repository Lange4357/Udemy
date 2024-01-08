const media = array =>{
    let soma = 0
    array.forEach(elementos =>{
        soma += elementos
    })
    return soma / array.length
}

console.log(media([0, 10]))
console.log(media([1,2,3,4,5]))