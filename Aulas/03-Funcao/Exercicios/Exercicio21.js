const PlanoDeSaude = function(idade){
    
    let Vplano = 100
    if(idade < 10){
        Vplano += 80
    }
    else if(idade <= 30){
        Vplano += 50
    }
    else if(idade <= 60){
        Vplano += 95
    }
    else{
        Vplano += 130
    }
    return Vplano
}

console.log(PlanoDeSaude(61))
