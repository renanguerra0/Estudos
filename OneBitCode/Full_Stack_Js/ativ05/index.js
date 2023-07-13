
const nomeNave = prompt("Insira o nome da nave:")
opcao = prompt("Deseja entrar em dobra espacial? S/N")
let contador = 0

while (opcao != "N"){
    opcao = prompt("Deseja realizar a próxima dobra?")
    contador += 1
}

alert("A nave " + nomeNave + " realizou " + contador + " dobra(s)")