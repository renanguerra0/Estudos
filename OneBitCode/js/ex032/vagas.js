
const vagas = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.lenght + " candidatos)\n"
        return textoFinal
    }, "")
    alert(vagasEmTexto)
}


function novaVaga(){
    const nome = "Informe o nome da vaga: "
    const descricao = "Informe a descrição da vaga: "
    const dataLimite = "Informe a data limite para a vaga: "

    const confirmacao = confirm("Deseja criar uma nova vaga com essas informações?\n" + 
    "Nome " + nome + "\nDescrição: " + descricao + "\nData limite:" + dataLimite)

    if (confirmacao){
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada!")
    }
}

function visualizarVaga(){
    const indice = prompt("Informe o índice da vaga que deseja exibir:")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
        return textoFinal + "\n - " + candidato
    }, "")

    alert("Vaga nº " + indice +
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao +
    "\nData limite: " + vaga.dataLimite +
    "\nQuantidade de candidatos: " + vaga.candidatos.lenght +
    "\nNome dos candidatos: " + candidatosEmTexto
    )
}

function inscreverCandidato(){
    const candidato = prompt("Informe o nome do candidato(a): ")
    const indice = prompt("Informe o índice da vaga desejada: ")
    const vaga = vaga[indice]

    const confirmacao = confirm("Deseja inscrever o candidato(a) " + candidato + " na vaga " + indice + "?\n" + "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite)

    if(confirmacao){
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada.")
    }
}


function excluirVaga(){
    const indice = prompt("Informe o índice da vaga que deseja excluir: ")
    const vaga = vagas[indice]

    const confirmacao = confirm("Tem certeza que deseja excluir a vaga " + indice + "?\n" + "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite)

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluída!")
    }
}



function exibirMenu(){
    const opcao = prompt("VAGAS DE EMPREGO\n\n" +
    "1. Listar vagas disponíveis\n" +
    "2. Criar um nova vaga\n" +
    "3. Visualizar uma vaga\n" +
    "4. Inscrever o candidato em uma vaga\n" +
    "5. Excluir uma vaga\n" +
    "6. Sair")

    return opcao
}