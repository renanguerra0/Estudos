const dados = require("./cliente.json"); //Função do node para puxar um código de outro lugar
console.log(dados);
console.log(dados.nome);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados); //Transformando o Objeto em Sintrg
console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome);
const clienteEmObjeto = JSON.parse(clienteEmString) //Transformando a String em Objeto novamente
console.log(clienteEmObjeto);
console.log(clienteEmObjeto.nome);
