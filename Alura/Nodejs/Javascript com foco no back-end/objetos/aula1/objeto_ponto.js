const listaCPF = [111111, 2222222, 3333333];

const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1112333"];


//Um objeto é uma entidade indepedente com propriedade e tipo 
const objetoPessoa = {
    idade: 32,
    nome: "José",
    cpf: "12312556",
    email: "jose@dominio.com",
};

console.log(objetoPessoa);
console.log(`O nome do cliente é ${objetoPessoa.nome} e tem a idade de ${objetoPessoa.idade} anos`)
console.log(`Os 3 primeiros dígitos do CPF são: ${objetoPessoa.cpf.substring(0,3)}`);

