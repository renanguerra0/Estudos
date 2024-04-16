const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155556554", "1156565667"]
};


cliente.enderecos = [
    {
        rua: "R. Jose de Alencar",
        numero: 1548,
        apartamento: true,
        complemento: "ap 934",
    }
];


function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
};

// ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
//Com espalhamento:
ligaParaCliente(...cliente.telefone);


const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
    // endereco: cliente.enderecos[0]
};

console.log(encomenda); 