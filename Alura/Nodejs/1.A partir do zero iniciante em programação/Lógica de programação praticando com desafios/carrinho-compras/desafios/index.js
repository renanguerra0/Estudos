// Tenha um elemento HTML na página (por exemplo, um parágrafo) e utilize JavaScript para modificar seu conteúdo usando a propriedade textContent.

function modificarTexto(){
    let paragrafo = document.getElementById('modificar');
    paragrafo.textContent = 'Novo texto modificado'
};


//Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.

const num1 = 5
const num2 = 10

let soma = num1 + num2;

console.log(`A soma entra ${num1} e ${num2} é: ${soma}`);


// Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.

let frasesUnidas = "Frase de número 1;Frase de número 2";
let frasesSeparadas = frasesUnidas.split(';');
console.log(frasesSeparadas);


//Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e exibi-los no console.

let numerosJuntos = '1, 2, 3, 4, 5';
let numerosSeparados = numerosJuntos.split(',')
console.log(numerosSeparados);