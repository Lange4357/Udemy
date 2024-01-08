let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)

const obj= {}

comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)

comparaComThis(obj)



let comparaComThis1 = param => console.log(this === param)

comparaComThis1 = comparaComThis1.bind(obj)

comparaComThis1(obj)

comparaComThis1(module.exports)


