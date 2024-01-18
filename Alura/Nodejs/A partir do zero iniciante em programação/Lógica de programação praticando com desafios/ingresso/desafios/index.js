//Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. 
//Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.

function adicao(n1, n2){
     return n1 + n2;
};

function subtracao(n1, n2){
    return n1 - n2
};

function multiplicacao(n1, n2){
    return n1 * n2
};

function divisao(n1, n2){
    if(n2 !== 0){
        return n1 / n2
    } else {
        return 'Erro: divisão por zero.'
    }
};

function calculadora(operacao, n1, n2){
    switch  (operacao){
        case 'soma':
            return adicao(n1, n2);
        case 'subtracao':
            return subtracao(n1, n2);
        case 'multiplicacao':
            return multiplicacao(n1, n2);
        case 'divisao':
            return divisao(n1, n2);
        default:
            return 'Operacação inválida';
    };
};

let resultado = calculadora('divisao', 10, 5);
console.log(resultado)


//Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.

function verificarNumero(numero){
    if (numero % 2 == 0){
        console.log('Número par')
    } else {
        console.log('Número ímpar')
    }
};

verificarNumero(20);


//Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. 
//Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar.

function conversorTemperatura(valor, temperatura){

    if (temperatura == 'C'){
        return (valor -32) / 1.8
    } else if (temperatura == 'F'){
        return valor * 1.8 + 32;
    } else {
        return 'Opção inválida'
    }
};

let valorConvertido = conversorTemperatura(100, 'F');
console.log(valorConvertido);


//Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável. 
//Use o método concat() para combinar as sequências de valores em uma nova lista chamadanovaLista. Imprima novaLista no console.

minhaLista = [1, 2, 3];
outrLista = [4, 5, 6];

novaLista = minhaLista.concat(outrLista);
console.log(novaLista);

//Remova o último elemento de novaLista. Imprima novaLista após a remoção.

elementoRemovido = novaLista.pop()
console.log(novaLista)

//Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. 
//Pesquise e adapte o código para realizar o embaralhamento.

function embaralha(lista) {

    let indice = lista.length
    
    while(indice) {
        // atenção para o pós-incremento indice-- 
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    };
};

embaralha(novaLista);
console.log(novaLista);

//Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. 
//Teste a função com novaLista e imprima o array resultante.

function removerDuplicatas(array){
    return [...new Set(array)];
};

listaTeste = [1, 1, 1, 2, 2, 3]
teste = removerDuplicatas(listaTeste);
console.log(teste);