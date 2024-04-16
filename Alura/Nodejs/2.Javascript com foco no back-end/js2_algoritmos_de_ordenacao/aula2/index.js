const listaLivros = require("./array");

function margeSort(array, nivelAninhamento = 0){

    console.log(`Nivel de aninhamento: ${nivelAninhamento}`);
    console.table(array)

    if(array.length > 1){
        const meio = Math.floor(array.length/2); //Arredondar o número para baixo
        const parte1 = margeSort(array.slice(0,meio), nivelAninhamento +1); //Divide do início até a metade do array
        const parte2 = margeSort(array.slice(meio, array.length), nivelAninhamento +1); //Divide da metade até o final do array
        array = ordena(parte1, parte2);
     }
    return array;
};

function ordena(parte1,parte2){

    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){

        let produtoAtualParte1 = parte1[posicaoAtualParte1];
        let produtoAtualParte2 = parte2[posicaoAtualParte2];
        
        if(produtoAtualParte1.preco < produtoAtualParte2.preco){
            resultado.push(produtoAtualParte1);
            console.log("Resultado 1");
            console.table(resultado);
            posicaoAtualParte1++;
        } else {
            resultado.push(produtoAtualParte2);
            console.log("Resultado 2");
            console.table(resultado);
            posicaoAtualParte2++;
        }
    };

    return resultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte1) : parte2.slice(posicaoAtualParte2));
};

console.table(margeSort(listaLivros));