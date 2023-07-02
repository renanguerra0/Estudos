
function calcular(a, b, operacao){
    console.log("Realizando uma operação.")
    const resultado = operacao(a, b) //Passando outra função como parâmetro
    return resultado
}

function somar(x,y){
    console.log("Realizando uma soma.")
    return x + y
}

calcular(3, 5, somar)