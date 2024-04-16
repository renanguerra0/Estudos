//Com a lista abaixo, faça: Ana e Caio mudaram de escola e o Rodrigo entrou nesta sala. Atualize a lista.

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// nomes.splice(1, 2); //Primeiro informa a partir de qual elemento vai remover e depois até quantos elementos serão removidos.
// // nomes.push('Rodrigo');

// console.log(nomes);

nomes.splice(1, 2, "Rodrigo") //Também é possível passar um 3ª parâmetro, nesse caso o elemento será colocado no lugar dos que foram removidos
console.log(nomes);