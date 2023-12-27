
//Na classe Set não podem existir elementos repetidos.
const exemploSet = new Set([1,1,2,2,2,3,4]);
console.log(exemploSet);

//Dessa maneira, conseguimos eleminar os termos que estão repetidos na lista
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
const meuSet = new Set(nomes);
console.log(meuSet);
const nomesAtualizados = [...meuSet]; //Transformando o Set um array
console.log(nomesAtualizados);