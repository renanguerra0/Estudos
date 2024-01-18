//Um aluno recebeu um ponto extra nas suas notas. Adicione essse ponto nas notas da seguinte lista:
//Obs: Não é permitido nota maior que 10

const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map( (nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});

// console.log(notas);
// console.log(notasAtualizadas);


//Deixar todos os nomnes da lista maiúsculos
const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// const nomesPadronizados = nomes.map((nome) => {
//    return nome.toUpperCase(); 
// });

//Também podemos reeecrever a arrow function da seguinte maneira:
const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);