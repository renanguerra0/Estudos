const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "12312556",
    email: "andre@dominio.com",
};

//Outra maneira de acessarmos as propriedades de um objeto
console.log(
    `O nome do cliente é ${cliente["nome"]} e tem a idade de ${cliente["idade"]} anos`
    )

//Pode ser útil nessas situações    
const chaves = ["nome", "idade", "cpf", "email"];
chaves.forEach( (chave)=> {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});

x   