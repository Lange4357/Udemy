const contarPalavras = msg =>{
    const msg1 = msg.trim().split(/\s+/)
    console.log(msg1)
    return msg1.length
}

console.log(`Quantidade: `, contarPalavras("Sou uma frase"))
console.log(`Quantidade: `, contarPalavras("Me divirto aprendendo a programar"))