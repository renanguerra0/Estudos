const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155556554", "1156565667"],
    saldo: 200,
    efetuaPagamento: function(valor){
        if(valor > this.saldo){
            console.log("Saldo insuficiente");
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento efetuado. Novo saldo: ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(250);
cliente.efetuaPagamento(25);