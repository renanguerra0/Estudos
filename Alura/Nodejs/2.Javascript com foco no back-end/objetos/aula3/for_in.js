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


for (let chave in cliente){
    // console.log(chave);
    // console.log(cliente[chave]);
    // console.log(chave + " - " + cliente[chave]);

    //O typeof de um array retorna um objeto.
    let tipo = typeof cliente[chave];
    if(tipo != "object" && tipo != "function"){
        console.log(`A chave ${chave} tem o valor de ${cliente[chave]}`);
    }  
};