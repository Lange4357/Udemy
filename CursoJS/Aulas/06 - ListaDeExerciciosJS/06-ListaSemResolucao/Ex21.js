const menor = array =>{
    let menor = array[0]
    array.forEach(elements =>{
        if(elements < menor){
            menor = elements
        }
    })
    return menor
}

console.log(menor([10,5,35,65]))
console.log(menor([5,-15,50,3]))