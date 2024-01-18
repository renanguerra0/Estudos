const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 9, 7.5];
const mediasAlunos = [alunos, medias];

console.log(mediasAlunos);


//Acessando um array dentro de outro array
//Primeiro informamos a posição do ARRAY e depois a posição do elemento dentro daquele array
console.log(`A aluna da posição 1 da lista de alunos é: ${mediasAlunos[0][1]} e sua média é: ${mediasAlunos[1][1]}`);