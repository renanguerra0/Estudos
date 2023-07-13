
const entrada1 = window.prompt("Insira o primeiro número")
const entrada2 = window.prompt("Insira o segundo número")

const num1 = parseFloat(entrada1) //O parseFloat serve para converter uma String em um número 
const num2 = parseFloat(entrada2)

const soma = num1 + num2
const subtracao = num1 - num2
const multiplicacao = num1 * num2
const divisao = num1 / num2

alert(
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao
)