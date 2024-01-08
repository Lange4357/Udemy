const entre = (numero, minimo, maximo, inclusivo = false) =>{
    if(inclusivo){
        return (minimo <= numero && numero <= maximo)
    }
    else{
        return (minimo < numero && numero < maximo)
    }
}

console.log(entre(4, 3, 150))