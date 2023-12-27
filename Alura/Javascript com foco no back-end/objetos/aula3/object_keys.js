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

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

//Verificando as chaves do objeto
if (!chavesDoObjeto.includes("enderecos")){
  console.log("Erro. É necessário ter um endereço cadastrado.")    
};