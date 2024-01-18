const listaLivros = require("./array");
const trocaLugar = require("./encontraMenores");

function quickSort(array, esquerda, direita){

    if(array.length > 1){
        let indiceAtual = particiona(array, esquerda, direita);
        if(esquerda < indiceAtual - 1){
            quickSort(array, esquerda, indiceAtual -1)
        };

        if(indiceAtual < direita){
            quickSort(array, indiceAtual, direita)
        };
    }
    return array;
};

function particiona(array, esquerda, direita){
    
    console.log("array",array)
    console.log("esquerda, direita",esquerda, direita)

    let pivo = array[Math.floor((esquerda + direita)/2)];
    let atualEsquerda = esquerda; //No inicio esquerda será 0
    let atualDireita = direita; //No início direita será
    
    while (atualEsquerda <= atualDireita){
        while(array[atualEsquerda].preco < pivo.preco){
            atualEsquerda++;
        }
        while(array[atualDireita].preco > pivo.preco){
            atualDireita--;
        }

        if(atualEsquerda <= atualDireita){
            trocaLugar(array, atualEsquerda ,atualDireita);
            atualEsquerda++;
            atualDireita--;

        }
    };
    return atualEsquerda;
};

//                      lista    1ª índice    último indice
console.table(quickSort(listaLivros, 0, listaLivros.length -1));


// function margeSort(array, nivelAninhamento = 0){

//     console.log(`Nivel de aninhamento: ${nivelAninhamento}`);
//     console.table(array)

//     if(array.length > 1){
//         const meio = Math.floor(array.length/2); //Arredondar o número para baixo
//         const parte1 = margeSort(array.slice(0,meio), nivelAninhamento +1); //Divide do início até a metade do array
//         const parte2 = margeSort(array.slice(meio, array.length), nivelAninhamento +1); //Divide da metade até o final do array
//         array = ordena(parte1, parte2);
//      }
//     return array;
// };
