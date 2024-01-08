const encontraVogais = (str) =>{
    return str.replace(/[aeiouAEIOU]/g, '')
}

console.log(encontraVogais('Cod3r'))
console.log(encontraVogais('Fundamentos'))