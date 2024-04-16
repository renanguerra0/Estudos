let nomesArray = [];

function adicionar() {
  let nome = document.getElementById("nome-amigo").value;

  if(nome == ''){
    alert('Informe o nome do amigo!')
    return;
  };

  if(nomesArray.includes(nome)){
    alert('Nome já adicionado!');
    return;
  }

  let lista = document.getElementById("lista-amigos");
  nomesArray.push(nome);

  if (lista.textContent == "") {
    lista.textContent = nome;
  } else {
    lista.textContent = lista.textContent + ", " + nome;
  }
};


function sortear() {

    if(nomesArray.length < 4){
      alert('Adicione pelo menos 4 nomes');
      return;
    }
    embaralha(nomesArray);

    let nomeSorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i < nomesArray.length; i++){
        if( i == nomesArray.length -1){
            nomeSorteio.innerHTML = nomeSorteio.innerHTML + nomesArray[i] + ' --> ' + nomesArray[0] + '<br>';
        } else {
            nomeSorteio.innerHTML = nomeSorteio.innerHTML + nomesArray[i] + ' --> ' + nomesArray[i + 1] + '<br>';
        }
    };
};


function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    [lista[indice - 1], lista[indiceAleatorio]] = 
    [lista[indiceAleatorio],lista[indice - 1]];
  }
};


function reiniciar() {
    nomesArray = [];
    document.getElementById("lista-amigos").innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
};