
/*
const numero = parseFloat(prompt("Digite um número: "))
let i = 1
let armazenarResultados = " "
let resultado = 0

for (i ; i <= 20 ; i++){
    resultado = i * numero
    armazenarResultados = armazenarResultados + numero + " * " + i + " = " + resultado + "\n"
}
alert(armazenarResultados)
*/


//Outra maneira

const numero = prompt("Informe o número que você deseja calcula a tabuada: ")

let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
    resultado += " -> " + numero + " * " + fator + " = " + (numero * fator) + "\n"
}

alert("Resultado da tabuado de " + numero + ":\n\n" + resultado )