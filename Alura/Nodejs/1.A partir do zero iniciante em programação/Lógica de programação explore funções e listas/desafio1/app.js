// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

let titulo1 = document.querySelector('h1');
titulo1.innerHTML = 'Hora do Desafio';


//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function exibirConsole() {
    console.log('O botão foi clicado');
};


//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function exibirAlerta(){
    alert('Eu amo JS'); 
};


//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function exibirCidade(){
    let cidade = prompt('Informe o nome de uma cidade brasileira.');
    alert(`Estive em ${cidade} e lembrei de você.`);
};


//Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.

function exibirSoma(){
    let n1 = parseFloat(prompt("Esolha o primeiro número"));
    let n2 = parseFloat(prompt("Esolha o segundo número"));
    alert(`O resultado da soma entre ${n1} e ${n2} é: ${n1 + n2}`)
};