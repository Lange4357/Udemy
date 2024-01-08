const verificaAnoBissexto = function(ano){
    if(ano % 400 == 0){
        console.log(`${ano} é bissexto!`)
        return true;
    }
    else if(ano % 100 == 0){
        console.log(`${ano} não é bissexto!`)
        return false
    }
    else if(ano % 4 == 0){
        console.log(`${ano} é bissexto!`)
        return true
    }
    else{
        console.log(`${ano} não é bissexto!`)
    }
}

verificaAnoBissexto(2028)