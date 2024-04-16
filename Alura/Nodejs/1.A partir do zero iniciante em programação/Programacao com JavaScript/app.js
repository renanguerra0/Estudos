alert("Boas vindas ao jogo do número secreto");

let numeroMaximo = 100;
let numeroSecreto =  parseInt(Math.random() * numeroMaximo + 1);
let numeroEscolhido;
let tentativas = 1;

while (numeroEscolhido != numeroSecreto){

    numeroEscolhido = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if(numeroSecreto == numeroEscolhido){
        break;
    } else {
        if(numeroSecreto > numeroEscolhido){
            alert("O número secreto é maior")
        } else {
            alert("O número secreto é menor")
        };
        tentativas++;
    };
};

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Acertou! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`)