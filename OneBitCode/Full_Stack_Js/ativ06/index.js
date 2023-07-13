
nomeInicial = prompt("Informe o nome da nave:")
caractere = prompt("Qual caractere deseja substituir?")
novoCaractere = prompt("Qual o novo caractere?")
nomeFinal = ""

for (let posicao = 0; posicao < nomeInicial.length; posicao++){
    if(nomeInicial[posicao] == caractere){
        nomeFinal = nomeFinal + novoCaractere
    } else {
        nomeFinal = nomeFinal + nomeInicial[posicao]
    }
}
alert("O novo nome da nave é " + nomeFinal)