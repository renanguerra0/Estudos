const clientes = require("./clientes.json");

function filtrarApartamentosSemComplementos(clientes){
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && //Verifica se o apartamento é TRUE
            !cliente.endereco.hasOwnProperty("complemento") //Verifica se a propriedade "complemento" não existe
        );  
    }); 
};

const filtrados = filtrarApartamentosSemComplementos(clientes);
console.log(filtrados);