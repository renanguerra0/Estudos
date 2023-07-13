
let velocidade = 80

//Testando a estrutura WHILE
/*while (velocidade > 0){
    alert("O veículo está a " + velocidade + "km/h")
    velocidade = velocidade - 20
    alert("Diminuindo 20mk/h")
}

alert("O veículo parou.")
*/

//Combinando a estrutura WHILE com o IF
while (velocidade > 0){
    alert("O veículo está a " + velocidade + "km/h")
    velocidade = velocidade - 20
    alert("Diminuindo 20mk/h")

    if (velocidade === 40){
        break
    }
}

alert("O veículo parou.")