//Crie uma função que valide se um número é positivo, negativo ou zero.

function validarNumeros(x){
    if(x > 0){
        console.log('Número positivo')
    } else if (x < 0) {
        console.log('Número é negativo')
    } else{
        console.log('ZERO')
    };
};

validarNumeros(1);


//Implemente uma função que verifique se uma pessoa é maior de idade.

function maiorDeIdade(x){
    if(x >= 18){
        console.log('Maior de idade')
    } else {
        console.log('Menor de idade')
    }
};
maiorDeIdade(17);


// Desenvolva uma função que valide se uma string é vazia ou não.

function stringVazia(termo){
    if (termo === ''){
        console.log('String vazia')
    } else {
        console.log('String não está vazia')
    }
};
stringVazia('');


//Crie uma função que determine se um ano é bissexto

function verificarAno(ano){
    if (ano % 4 == 0){
        if(ano % 100 == 0){
            if(ano % 400 == 0){
                console.log(`${ano} é bissexto`)
            } else {
                console.log(`${ano} não é bissexto`)
            }
        } else {
            console.log(`${ano} é bissexto`)
        }
    } else {
        console.log(`${ano} não é bissexto`)
    }
};
verificarAno(1605);


//Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.

function calcularMedia(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Um dos números não é válido.";
    }
    return (num1 + num2) / 2;
}

console.log(calcularMedia(8,5))


//Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.

function contarArray(array){
    return array.length
};

lista = [1,2,3,4,5,6,7]
console.log(contarArray(lista));


//Crie um array e utilize a função includes para verificar se um elemento específico está presente

lista = ['A', 'b', 5, -1];

function verificarArray(termoProcurado){
    if(lista.includes(termoProcurado)){
        return console.log('Termo encontrado')
    } else {
        return console.log('Termo NÃO encontrado')
    }
};

verificarArray('A');



//Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.

function verificarArrayElemento(array, elemento){
    if(array.includes(elemento)){
        return console.log('Elemento presente na lista')
    } else {
        return console.log('Elemento não está presente na lista')
    }
};

lista2 = ['A', 'b', 1, 2, 3]
verificarArrayElemento(lista2,4);

//Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. 
//Depois retorne se o objeto está presente no array.

listaEstudante = [
    {
        nome: 'Marcelo',
        idade: 19
    },
    {
        nome: 'João',
        idade: 21
    },
    {
        nome: 'Maria',
        idade: 18
    },
    {
        nome: 'Joana',
        idade: 23
    }
];

// function procurarEstudante(lista, aluno){

//     for(let i = 0; i < lista.length; i++){
//         if(lista[i].nome === aluno){
//             return true
//         };
//     }
//     return false;
// };

// if(procurarEstudante(listaEstudante, 'Maria')){
//     return console.log('Estudante encontrado')
// } else {
//     return console.log('Estudante não encontrado')
// };


//Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.

function calcularSomaProduto(array) {
    let somaPares = 0;
    let produtoImpares = 1;

    for (let numero of array) {
        if (numero % 2 === 0) {
            somaPares += numero;
        } else {
            produtoImpares *= numero;
        }
    };

    return {
        somaPares,
        produtoImpares
    };
};

const numeros = [1, 2, 3, 4, 5, 6];
const resultado = calcularSomaProduto(numeros);
console.log("Soma dos pares:", resultado.somaPares);
console.log("Produto dos ímpares:", resultado.produtoImpares);