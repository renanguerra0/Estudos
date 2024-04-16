
const numeros = [100,200,300,400,500,600];

//1ª Expressão: Executa apenas uma vez
//2ª Expressão: Condição de execução
//3ª Expressão: É executda sempre no final do bloco
for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}



//Calculando a média utilizando o FOR
const notas = [10, 6.5, 8, 7.5];
let somaNotas = 0;

for (let i = 0; i < notas.length; i++){
    somaNotas += notas[i]; //somaNotas = somaNotas + notas[i];
}
const media = somaNotas / notas.length

console.log(`A média das notas é: ${media}`);