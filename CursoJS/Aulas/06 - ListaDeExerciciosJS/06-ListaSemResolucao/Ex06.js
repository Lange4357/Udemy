const inverso = valor =>{
    
    if(typeof valor == 'number'){
        return valor * -1
    }
    else if(typeof valor == 'boolean'){
        return !valor
    }
    else{
        return `Booleano ou numeros esperado, maos o parametro é do tipo string`
    }
}


console.log(inverso(10))