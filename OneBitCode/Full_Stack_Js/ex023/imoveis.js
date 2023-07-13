
const imoveis = []
opcao = ""


do {
    opcao = prompt("Há " + imoveis.length + " imóveis cadastrados.\n" +
    "Selecione uma das opção abaixo:\n" + 
    "1. Cadastrar imóvel\n" +
    "2. Listar imóveis\n" + 
    "3. Sair")

    switch(opcao){
        case "1":
            const imovel = {}
            imovel.proprietario = prompt("Informe o nome do proprietário desse imóvel: ")
            imovel.quarto = prompt("Informe a quantidade de quartos desse imóvel: ")
            imovel.banheiro = prompt("Informe a quantidade de banheiros desse imóvel: ")
            imovel.garagem = prompt("Esse imóvel possui garagem? S/N")

            const confirmacao = confirm("Salvar este imóvel?\n" + 
            "\nProprietário: " + imovel.proprietario +
            "\nQuatos: " + imovel.quarto +
            "\nBanheiros: " + imovel.banheiro +
            "\nGaragem: " + imovel.garagem)

            if (confirmacao) {
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso!")
            }
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++){
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quarto +
                    "\nBanheiros: " + imoveis[i].banheiro +
                    "\nGaragem: " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida, tente novamente.")

    }

} while (opcao != 3){}