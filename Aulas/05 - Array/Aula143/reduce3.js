Array.prototype.reduce2 = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1
    let acmuluador = this[0]
    for(let i = indiceInicial; i <this.length; i++){
        acmuluador = callback(acmuluador, this[i], i, this)
    }
    return acmuluador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6, 7]
console.log(nums.reduce2(soma))