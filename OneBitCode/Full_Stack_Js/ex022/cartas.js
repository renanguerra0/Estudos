

let baralho = []
let opcao = ""

do {
    quantidade = baralho.length
    opcao = prompt("Baralho:\n" + quantidade + "\n" + "Selecione uma das opções abaixo:\n" + "1. Adicionar uma carta\n" + "2. Puxar uma carta\n" + "3. Sair")
    
    switch (opcao){
        case "1":
            adicionarCarta = prompt("Informe o nome da carta:")
            baralho.unshift(adicionarCarta)
            break
        case "2":
            const removerCarta = baralho.shift()
            alert("A carta " + removerCarta + " foi removida do baralho")
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida, tente novamente.")
    }

} while (opcao != 3)