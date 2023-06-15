

const numero = parseFloat(prompt("Digite um número: "))
let i = 1
let armazenarResultados = " "
let resultado = 0

for (i ; i <= 20 ; i++){
    resultado = i * numero
    armazenarResultados = armazenarResultados + numero + " * " + i + " = " + resultado + "\n"
}
alert(armazenarResultados)