const busca = (s, array) =>{
    let result = []
    for(let i in array){
        if(array[i].includes(s)){
            result.push(array[i])
        }
    }
    return result
}


console.log('Resultado: ', busca("pro", ["programação", "mobile", "profissional"]))