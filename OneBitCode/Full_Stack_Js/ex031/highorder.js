
function calcular(a, b, operacao){
    console.log("Realizando uma operação.")
    const resultado = operacao(a, b) //Passando outra função como parâmetro
    return resultado
}

function somar(x,y){
    console.log("Realizando uma soma.")
    return x + y
}

console.log(calcular(3, 5, somar))

console.log(calcular(8,4, function(x, y){
    console.log("Realizando uma subtração")
    return x - y
})
)




//Função para exibir elementos de um ARRAY
function exibirElemento(elemento, indice, array){
    console.log({elemento, indice, array}) //Objetos
}
const lista = ["Banana", "Maçã", "Uva", "Abacaxi"]

/*
for (let i = 0; i < lista.length; i++){
    exibirElemento(lista[i], i, lista)
}
*/

//Toda esse trecho de código logo acima pode ser substituido por um método já existente:
lista.forEach(exibirElemento) //Executa uma função para cada elemento de um array.
