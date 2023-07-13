
nome = prompt("Informe o nome da nave:")
nomeInvertido = ""

for (let posicao = nome.length - 1; posicao >= 0; posicao--){
    if (nome[posicao] == "e"){
        break
    }
    nomeInvertido += nome[posicao]
}
alert("Nome original da nave: " + nome + "\nNome após a ocultação: " + nomeInvertido)