function range_vision(n){
    let result = false
    if(+n <= 0){
        return "Numero no valido, ingrese un numero mayor a 0"
    }
    for (const i in n) {
        let result2 = recorridoDerecha(i, n)
        if(result2){
            result = result2
        }
    }
    
    console.log(result)
    return result
}

function recorridoDerecha(i, n){
    let suma = 0;
    let verDerecha = '';
    let verIzquierda = '';
    let cortado = n.slice(+i + 1)
    let cadenaDerecha = cortado.slice(0, +n[i])
    let indiceNegativo = (+i - +n[i]) < 0 ? 0 : (+i - +n[i]); 
    let cadenaIzquierda = n.slice(indiceNegativo, i)
    
    for (let index = 0; index < cadenaDerecha.length ; index++) {
        verDerecha += verDerecha === '' ? ` ${cadenaDerecha[index]}` : ' + ' + cadenaDerecha[index];
        suma += +cadenaDerecha[index]
    }
    for (let index = 0; index < cadenaIzquierda.length ; index++) {
            verIzquierda += verIzquierda === '' ? ` ${cadenaIzquierda[index]}` : ' + ' + cadenaIzquierda[index];
            suma += +cadenaIzquierda[index]

    }

    
    

    let mensaje = `
    Digito: ${n[i]}
    Puede ver a la izquierda: ${cadenaIzquierda}
    Puede ver a la derecha: ${cadenaDerecha}
    Valor de la vision:${verIzquierda}${verIzquierda && ' +'}${verDerecha} = ${suma}
    `
    console.log(mensaje)
    return suma.toString().length === 1 ? true : false;

}





range_vision(process.argv[2])
