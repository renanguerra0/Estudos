// const precosLivros = [25, 15, 30, 50, 45, 20];

// let menorValor = 0;

// for (let atual = 0; atual < precosLivros.length; atual++) {
//   if (precosLivros[atual] < precosLivros[menorValor]) {
//     menorValor = atual;
//   };
// };

// console.log(`O livro mais barato custa: ${precosLivros[menorValor]}`);

const livros = require("./lista_livros"); //Importando o array com objetos

//Função linear
function valorMenor(arrayProdutos, posicaoInicial){
  
  let menorValor = posicaoInicial;

  for (let atual = posicaoInicial; atual < arrayProdutos.length; atual++) {
    if (arrayProdutos[atual].preco < arrayProdutos[menorValor].preco) {
      menorValor = atual;
    };
  };

  return menorValor;
}

//Exportando a função acima
module.exports = valorMenor;