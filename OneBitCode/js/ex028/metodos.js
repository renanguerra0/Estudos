
let pessoa = {  //Objeto pessoa
    nome: "Renan",
    idade: 23,
    dizerOla(){  //Método dizerOla
        console.log("Olá, mundo! Meu nome é " + this.nome) //O "this" serve para referenciar o próprio objeto.
    }

}

console.log(pessoa)

pessoa.dizerOla()

//Em um navegador o CONSOLE se trata de um objeto, enquanto o CONSOLE.LOG se trata de uma função. Nesse caso o LOG é um método do CONSOLE. 