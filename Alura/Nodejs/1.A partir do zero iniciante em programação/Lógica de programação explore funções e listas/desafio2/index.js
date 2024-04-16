// Criar uma função que exibe "Olá, mundo!" no console.

function exibirMensagem(){
    console.log('Olá, mundo!')
}
exibirMensagem();


// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibirMensagemNome(nome){
    console.log(`Olá, ${nome}.`);
}
exibirMensagemNome('Renan')


// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobroNumero(numero){
    console.log(`O dobro de ${numero} é ${numero * 2}.`)
}
dobroNumero(5);


// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media(n1, n2, n3){
    return (n1 + n2 + n3)/3
}
let resultado = media(5, 10, 15)
console.log(`A média dos números é: ${resultado}`)


// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maiorNumero(a, b){
    if(a > b){
        return console.log(`O maior número é ${a}.`);
    } else if (a < b){
        return console.log(`O maior número é ${b}.`);
    } else {
        return console.log(`Os dois números são iguais.`);
    }
};
maiorNumero(5, 5);   


// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplicaNumero(n){
    return n * n;
};
console.log(`Resultado da multiplicação: ${multiplicaNumero(5)}`);