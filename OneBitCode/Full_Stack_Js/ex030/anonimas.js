

function somar(a,b){
    return a + b
}

//const operacao = somar() //Ao colocar o parênteses é entendido que a variável "operacao" recebe o RESULTADO da função somar.
const operacao = somar //Já nesse caso, operacao é igual a função somar.

console.log(operacao(4,5))


//É possível já criar a função como uma variável, dessa maneira não é necessário atribuir um nome a ela:

// const subtrair = function subtracao(a, b){
//     return a - b
// }
//Também podemos escrever da seguinte forma:
const subtrair = function(a,b){
    return a - b
}

console.log(subtrair(45,32))