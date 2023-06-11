

let escolhas = 0


while (escolhas !== 5) {
    escolhas = parseFloat(prompt("Escolha uma das alternativas abaixo: \n1.Opção \n2.Opção \n3.Opção \n4.Opção \n5.Encerrar"))

    switch (escolhas){
        case 1:
            alert("Opção 1 escolhida.")
        break
        case 2:
            alert("Opção 2 escolhida.")
        break
        case 3:
            alert("Opção 3 escolhida.")
        break
        case 4:
            alert("Opção 4 escolhida.")
        break
        default:
            alert("Opção 5 escolhida. Encerrando...")
        break
    }
}