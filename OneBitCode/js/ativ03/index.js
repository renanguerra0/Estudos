
velocidadeInicial = 0
const piloto = prompt("Informe o nome do piloto: ")
velocidade = prompt("Qual velociadade gostaria de acelerar a nave?")
confirmarVelocidade = confirm("Deseja acelerar para a velocidade: " + velocidade + " km/s ?")

if (velocidade <= 0){
    alert("A nave está parada. Considere partir e aumentar a velocidade.")
} else if (velocidade < 40){
    alert("Você está devagar, podemos aumentar mais.")
} else if (velocidade >= 40 && velocidade < 80){
    alert("Parece uma boa velocidade para manter")
} else if (velocidade >= 80 && velocidade < 100){
    alert("Velocidade alta. Considere diminuir.")
} else if (velocidade >= 100){
    alert("Velocidade perigosa. Controle automático ativado")
}

alert("O piloto " + piloto + " encontra-se a uma velocidade de " + velocidade + " km/s")