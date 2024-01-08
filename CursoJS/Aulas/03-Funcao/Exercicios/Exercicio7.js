const Bhaskara = function(a, b , c){

    let delta = (b * b) - 4 * a * c

    if(delta < 0){
        return "O delta é negativo!"
    }
    else{
        let x1 = (-b + Math.sqrt(delta)) / 2 * a
        
        let x2 = (-b - Math.sqrt(delta)) / 2 * a

        return [x1, x2]
    }
    
    
}

console.log(Bhaskara(1, 12, -13))