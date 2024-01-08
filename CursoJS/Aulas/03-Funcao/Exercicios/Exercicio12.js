const Fatorial = function(num){
    let fat = num
    for(let i = num; i > 0; i--){
        if(i > 1){
            process.stdout.write(`${i} x `)
        }
        if (i == 1){
            process.stdout.write(`${i}`)
        }
        if(i < fat){
            fat *= i;
        }
    }
    console.log(` = ${fat}`)
}

Fatorial(15)