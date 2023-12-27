const nomes = ["Evaldo", "Mari", "Camis"];


//Método 1
// nomes.forEach(function(nome){
//     console.log(nome);
// });


//Método 2
// nomes.forEach((nome) => {
//     console.log(nome);
// });


//Método 3
function imprimeNomes(nome){
    console.log(nome);
}

nomes.forEach(imprimeNomes);