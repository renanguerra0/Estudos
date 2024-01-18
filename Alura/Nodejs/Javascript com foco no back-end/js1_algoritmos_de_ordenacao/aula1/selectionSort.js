
const livros = require("./lista_livros");
const valorMenor = require("./valor_menor");

//Função quadrática
for (let atual = 0; atual < livros.length; atual++){
    let menor = valorMenor(livros, atual); //Acessando a função presente no arquivo valor_menor.js e passando os parâmetros
    
    let livroAtual = livros[atual]; //Acessando as informações completas do livro de acordo com a posição atual
    console.log(`Posicação atual:`, atual)
    console.log(`Livro atual:`, livros[atual])
    
    let livroMenorPreco = livros[menor]; //Retornando o resultado da função acessada anteriormente
    console.log(`Livro menor preço:`, livros[menor])

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
};

console.log(livros);