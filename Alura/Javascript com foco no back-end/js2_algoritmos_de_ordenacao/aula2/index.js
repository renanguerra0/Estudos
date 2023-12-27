const listaLivros = require("./array");

function margeSort(array){

    if(array.length > 1){
        const meio = Math.floor(array.length/2); //Arredondar o número para baixo
        const parte1 = array.slice(0,meio); //Divide do início até a metade do array
        const parte2 = array.slice(meio, array.length); //Divide da metade até o final do array
     }

    return array
};

console.table(margeSort(listaLivros));