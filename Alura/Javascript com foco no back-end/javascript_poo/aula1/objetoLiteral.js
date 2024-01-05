//Herança de protótipo

const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "admin",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

//This só funciona dentro de um contexto.
user.exibirInfos();

//Utilizando dessa maneira, o "this" não possui contexto, logo retorna "undefined"
const exibir = function (){
    console.log(this.nome)
}

//Bind() = Prender a execução de uma função a um contexto específico
const exibirNome = exibir.bind(user)

//Testando as funções

//Com contexto
exibirNome()
//Sem contexto
exibir()