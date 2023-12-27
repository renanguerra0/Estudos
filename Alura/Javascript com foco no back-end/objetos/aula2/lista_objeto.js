const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155556554", "1156565667"]
}

cliente.enderecos = [
    {
        rua: "R. Jose de Alencar",
        numero: 1548,
        apartamento: true,
        complemento: "ap 934",
    }
];

//Adicionando mais um objeto no array
cliente.enderecos.push(
    {
        rua: "R. Jose de Alencar",
        numero: 1172,
        apartamento: false
    }
);

// console.log(cliente.enderecos);

//Filtrando apenas os aparamentos
const listaApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApartamentos);