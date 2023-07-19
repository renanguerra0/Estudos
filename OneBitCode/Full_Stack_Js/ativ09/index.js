
function reduzirVelocidade(velocidade, imprimir){
    let desacelerar = 20

    while(velocidade > 0){
        imprimir(velocidade)
        velocidade -= desacelerar
    }
    alert("Nave parada. As comportas podem ser abertas.")
}

let velocidadeNave = 150

reduzirVelocidade(velocidadeNave, function(velocidade){
    console.log("Velocidade atual: " + velocidade)
})