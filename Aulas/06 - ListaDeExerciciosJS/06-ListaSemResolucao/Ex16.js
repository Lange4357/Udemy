const anoBissexto = ano =>{
    if(ano % 400 == 0){
        return true
    }
    else if(ano % 100 == 0){
        return false
    }
    else if(ano % 4 == 0){
        return true
    }
    return false
}

console.log(`Anos bissextos: `)
console.log(anoBissexto(2020))
console.log(anoBissexto(2016))
console.log(anoBissexto(2012))
console.log(anoBissexto(2008))
console.log(anoBissexto(2004))

console.log(`Anos não bissextos: `)
console.log(anoBissexto(2019))
console.log(anoBissexto(2015))
console.log(anoBissexto(2011))
console.log(anoBissexto(2007))
console.log(anoBissexto(2003))