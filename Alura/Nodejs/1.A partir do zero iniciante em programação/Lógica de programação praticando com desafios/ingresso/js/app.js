
function comprar() {
  let tiposIngresso = document.getElementById("tipo-ingresso");
  let quantidadeEscolhida = parseInt(document.getElementById("qtd").value);

  if (quantidadeEscolhida <= 0 || isNaN(quantidadeEscolhida)) {
    alert('Por favor, insira uma quantidade válida.');
    return
  }

  if (tiposIngresso.value == "pista") {
    comprarPista(quantidadeEscolhida);
  } else if (tiposIngresso.value == "superior") {
    comprarSuperior(quantidadeEscolhida);
  } else {
    comprarInferior(quantidadeEscolhida);
  }
};

function comprarPista(quantidadeEscolhida) {
  let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
  if (quantidadeEscolhida > qtdPista) {
    alert("Quantidade indisponível para tipo pista");
  } else {
    qtdPista = qtdPista - quantidadeEscolhida;
    document.getElementById("qtd-pista").textContent = qtdPista;
    alert("Compra realizada com sucesso");
  };
};

function comprarSuperior(quantidadeEscolhida) {
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if (quantidadeEscolhida > qtdSuperior) {
      alert("Quantidade indisponível para tipo superior");
    } else {
      qtdSuperior = qtdSuperior - quantidadeEscolhida;
      document.getElementById("qtd-superior").textContent = qtdSuperior;
      alert("Compra realizada com sucesso");
    };
  };

  function comprarInferior(quantidadeEscolhida) {
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if (quantidadeEscolhida > qtdInferior) {
      alert("Quantidade indisponível para tipo inferior");
    } else {
      qtdInferior = qtdInferior - quantidadeEscolhida;
      document.getElementById("qtd-inferior").textContent = qtdInferior;
      alert("Compra realizada com sucesso");
    };
  };