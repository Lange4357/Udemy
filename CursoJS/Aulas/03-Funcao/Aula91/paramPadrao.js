function Soma(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(Soma())
console.log(Soma(3))
console.log(Soma(1, 2, 3))


function Soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log("\n")

console.log(Soma2())
console.log(Soma2(3))
console.log(Soma2(1, 2, 3))
console.log(Soma2(0, 0 ,0))


function Soma3(a=1, b=1, c=1){
    return a + b + c
}

console.log("\n")

console.log(Soma3())
console.log(Soma3(3))
console.log(Soma3(1, 2, 3))
console.log(Soma3(0, 0 ,0))

