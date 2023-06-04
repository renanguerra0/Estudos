
const nome1 = prompt("Informe o nome: ")
const velocidade1 = prompt("Informe a velocidade: ")
const nome2 = prompt("Informe o nome: ")
const velocidade2 = prompt("Informe a velocidade: ")

if (velocidade1 > velocidade2) {
    alert("O " + nome1 + " possui maior velocidade")
} else if (velocidade1 < velocidade2) {
    alert("O " + nome2 + " possui maior velocidade")
} else{
    alert("Ambos possuem a mesma velocidade")
}