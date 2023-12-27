const {edGalho, edFolha} = require('./arrays');


function juntaListas(lista1, lista2){
    let listaFinal = [];
    let posicaoAtualLista1 = 0; //índice da lista1
    let posicaoAtualLista2 = 0; //índice da lista2
    let atual = 0;

    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length){
        let produtoAtualLista1 = lista1[posicaoAtualLista1]; //obtendo os dados do objeto com base no índice da lista1 
        let produtoAtualLista2 = lista2[posicaoAtualLista2]; //obtendo os dados do objeto com base no índice da lista2

        if(produtoAtualLista1.preco < produtoAtualLista2.preco){
            listaFinal[atual] = produtoAtualLista1; //Atribuo os dados na posicação atual da listaFinal
            posicaoAtualLista1++;
        }else{
            listaFinal[atual] = produtoAtualLista2;
            posicaoAtualLista2++;
        }
        atual++;
    }

    while (posicaoAtualLista1 < lista1.length){
        listaFinal[atual] = lista1[posicaoAtualLista1];
        posicaoAtualLista1++;
        atual++;
    }

    while (posicaoAtualLista2 < lista2.length){
        // console.log(`Posicação atual: ${posicaoAtualLista2}`);
        // console.log(`Tamanho da lista: ${lista2.length}`);
        listaFinal[atual] = lista2[posicaoAtualLista2];
        posicaoAtualLista2++;
        atual++;
    }

    return listaFinal;
}

console.table(juntaListas(edGalho, edFolha));