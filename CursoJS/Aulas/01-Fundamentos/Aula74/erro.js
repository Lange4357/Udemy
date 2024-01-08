function trartarErroELancar(erro){
    //throw new Error("Erro Gerado!")
    //throw 10
    //throw true
    //throw "Erro"
    throw{
        nome: erro.name,
        msg: erro.message, 
        date: new Date
    }
}

function imprimirNomeGritado(){
    try{
        console.log(obj.name.toUpperCase() + "!!!")
    } 
    catch (e){
        trartarErroELancar(e)
    }
    finally{
        console.log("Final")
    }

}
const obj = {name: "Roberto"}

imprimirNomeGritado(obj)