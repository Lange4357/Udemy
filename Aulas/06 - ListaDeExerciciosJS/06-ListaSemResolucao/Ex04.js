const mes = num =>{
    if(num == 1){
        return 'Janeiro'
    }
    if(num == 2){
        return 'Fevereiro'
    }
    if(num == 3){
        return 'Março'
    }
    if(num == 4){
        return 'Abril'
    }
    if(num == 5){
        return 'Maio'
    }
    if(num == 6){
        return 'Junho'
    }
    if(num == 7){
        return 'Julho'
    }
    if(num == 8){
        return 'Agosto'
    }
    if(num == 9){
        return 'Setembro'
    }
    if(num == 10){
        return 'Outubro'
    }
    if(num == 11){
        return 'Novembro'
    }
    if(num == 12){
        return 'Dezembro'
    }
    else{
        return 'Mes invalido'
    }
}
console.log(mes(0))