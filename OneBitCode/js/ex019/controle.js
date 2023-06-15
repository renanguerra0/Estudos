

//Utilizando o WHILE
/*
let valorInicial = parseFloat(prompt("Informe a quantidade inicial: "))
let escolhas = 0
let adicionarValor = 0
let reduzirValor = 0


while (escolhas !== 3){
    
    alert("Valor disponível: R$ " + valorInicial)
    escolhas = parseFloat(prompt("Escolha uma das opções abaixo: \n1.Depositar \n2.Sacar \n3.Sair"))
    
    switch(escolhas){
        case 1:
            adicionarValor = parseFloat(prompt("Informar o valor a ser depositado: "))
            valorInicial = valorInicial + adicionarValor
        break
        case 2:
            reduzirValor = parseFloat(prompt("Informar o valor que deseja sacar: "))
            valorInicial = valorInicial - reduzirValor
        break
        default:
            alert("PROGRAMA ENCERRADO!")
    }
}
*/


//Utilizando o DO WHILE

let saldo = parseFloat(prompt("Informe a quantioadde de dinheiro inicial: "))
let opcao = ""

do {
    opcao = prompt(
        "Saldo disponível: R$ " + saldo + "\n1. Adicionar dinheiro " +
        "\n2. Remover dinheiro" +
        "\n3. Sair"
    )

    switch (opcao) {
        case "1":
        saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
        break

        case "2":
        saldo -= parseFloat(prompt("Informe o valor a ser adicionado:"))
        break

        case "3":
        alert("Saindo...")
        break

        default:
        alert("Opção inválida.")
        break
    }

} while (opcao !== "3") {}