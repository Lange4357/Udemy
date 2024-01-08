const VerificaTriangulo = function (a = 1, b = 1, c = 1){
    if(a == b && a  == c){
        return console.log(`Triangulo Equilatero!`)
    }
    else if( (a == b && a != c) || (a == c && a != b) || (b == c && b != a)){
        return console.log(`Triangulo Isóceles!`)
    }
    else if(a != b && a != c && b != c){
        console.log(`Triangulo Escaleno!`)
    }
}

VerificaTriangulo(31, 23, 13)