const contarCaractere = function(c, s){
    let cont = 0;
    for(let i = 0; i < s.length; i++){
        if(c == s[i]){
            cont++
        }
    }
    return cont
}


console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))