/* for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i)
    }
} */



const Par = function(n){
    if(n == 101){
        return 1
    }
    else if(n % 2 == 0){
        console.log(n)
    }
    Par(n + 1)
    
}


Par(1)