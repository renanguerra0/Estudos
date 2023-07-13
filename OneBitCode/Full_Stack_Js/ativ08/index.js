
nome = prompt("Informe o nome da nave")
velocidadeInicial = 0
opcao = ""

let acelerar = function acelerando(){
    velocidadeInicial += 5
}

let desacelerar = function desacelerando(){
    velocidadeInicial -= 5
    if(velocidadeInicial < 0){
        velocidadeInicial = 0
    }
}

let imprimir = function imprimindo(){
    alert("Dados de bordo\n" + "Nome: " + nome + "\nVelocidade atual: " + velocidadeInicial + " km/s")
}

let menu = function exibirMenu(){

    do {
    opcao = prompt("Escolha uma das opções abaixo:\n" + "1. Acelerar nave em 5km/s" + "\n2. Desacelerar nave em 5km/s" + "\n3. Imprimir dados de bordo" + "\n4. Sair")

    switch(opcao){
        case "1":
            acelerar()
            break
        case "2":
            desacelerar()
            break
        case "3":
            imprimir()
            break
        case "4":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida, tente novamente.")
    }

}while (opcao != 4){}
}

menu()