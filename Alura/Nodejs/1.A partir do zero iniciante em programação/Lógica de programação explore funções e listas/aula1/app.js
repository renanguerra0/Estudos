let listaNumSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um númweo entre 1 e 10';

function alterarCampos(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak( texto, 'Brazilian Portuguese Female', {rate:1.2} );
};

function exibirMensagemInicial(){
    alterarCampos('h1', 'Jogo do número secreto');
    alterarCampos('p', 'Escolha um número entre 1 e 10');
};


//-------------------------------------------------------------

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        alterarCampos('h1', 'Acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
        alterarCampos('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            alterarCampos('p', 'O número é menor')
        };
        if(chute < numeroSecreto) {
            alterarCampos('p', 'O número é maior')
        };
        tentativas++;
        limparCampo();
    };
};

//-------------------------------------------------------------

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qntdElementosLista = listaNumSorteados.length;

    if(qntdElementosLista == numeroLimite){
        listaNumSorteados = [];
    };

    if(listaNumSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumSorteados.push(numeroEscolhido);
        console.log(listaNumSorteados);
        return numeroEscolhido;
    }
};

//-------------------------------------------------------------

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
};

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};

exibirMensagemInicial();