function soNoticiaBoa(nota){
    if(nota >= 7){
        console.log(`Aprovado com nota: ${nota}`)
    }
}

soNoticiaBoa(7.8)


function seForVerdadeEuFalo(valor){
    if(valor){
        console.log(`É verdade... ${valor}`)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(true)
seForVerdadeEuFalo(false)