
velocidade = 150

let desacelerar = function desacelerando(){
    velocidade -= 20
    return
}

while (velocidade > 0){
    desacelerar()
    alert("Velocidade atual: " + velocidade)
}

alert("A nave está parada e as comportas podem ser abertas")