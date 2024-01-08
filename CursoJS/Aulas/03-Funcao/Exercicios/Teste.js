const LerLinha = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
LerLinha.question('Digite um valor: ', (valor) => {
    console.log(`Você digitou: ${valor}`);
    LerLinha.close();
});
