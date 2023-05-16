
function number_cardinality(n){
    let number = n.toString()
    let lastCharacter = number.slice(-1)
    if( +lastCharacter === 0){
        return "zero"
    } else if( +lastCharacter === 5 ){
        return "five"
    } else if( (+lastCharacter!= 0) && (+lastCharacter % 2 === 0)){
        return "even"
    } else if(+lastCharacter != 5 && +lastCharacter % 2 != 0){
        return "odd"
    }

}

console.log(number_cardinality(process.argv[2]))