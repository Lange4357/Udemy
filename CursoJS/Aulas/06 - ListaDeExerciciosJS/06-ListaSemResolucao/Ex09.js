const repete = (repetido, vezes) =>{
    const result = []
    for(let i = 0; i < vezes; i++){
        result.push(repetido)
    }
    return result
}

console.log(repete(7, 3))