const Record = function(pontos){
    
    if(pontos[0] == " ") pontos = pontos.replace(pontos[0], "")
    if(pontos[pontos.length] == " ") pontos = pontos.replace(pontos[pontos.length], "")
    
    var pont = ""
    var recorde, contRecorde = 0, pior, contPior = 0, controle = 0, contI = 0
    
    for(var i = 0; i < pontos.length; i++){
        
        if(pontos[i] != " " ){
            //console.log(i)
            //console.log(pontos[i])
            pont += pontos[i]
            
        }
        else{
            contI++
            if(controle == 0){
                recorde = parseInt(pont)
                pior = parseInt(pont)
                controle++
            }
            let PontInt = parseInt(pont)
            //console.log(PontInt)
            pont = ""
            if(PontInt > recorde){
                contRecorde++
                recorde = PontInt
            }
            if(PontInt < pior){
                pior = PontInt
                contPior = contI
            }       
        }
        if(pontos[i] != " " && i == pontos.length - 1){
            contI++
            pont = ""
            pont += pontos[i]
            let PontInt = parseInt(pont)
            pont = ""
            if(PontInt >= recorde){
                contRecorde++
                recorde = PontInt
            }
            if(PontInt < pior){
                pior = PontInt
                contPior = contI
            }
        }
        if(contPior == 0){
            contPior = 1
        }
                
    }
    return [contRecorde, contPior]
}

console.log(Record("10 20 20 8 25 3 0 30 1"))

console.log(Record("1 20 20 0 25 3 1 30 1 "))