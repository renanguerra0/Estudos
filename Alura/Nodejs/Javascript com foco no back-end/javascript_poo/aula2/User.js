export default class User {
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }

  //Disponibiliza a informação apenas para leitura
  //NUNCA recebe argumento
  //Quando for chamá-la, não se utiliza os (), chamamos como se fosse uma propriedade.
  //Exemplo: novoAdmin.nome() <-- Está errado, o correto é: novoAdmin.nome
  get nome() {
    return this.#nome;
  }
  get email(){
    return this.#email;
  }
  get nascimento(){
    return this.#nascimento;
  }
  get role(){
    return this.#role;
  }
  get ativo(){
    return this.#ativo;
  }

  //Permite alterações
  set nome(novoNome) {
    if(novoNome === ''){
      throw new Error('formato não válido')
    }
    this.#nome = novoNome
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
  }
}

// O simbolo # utilizado antes do termo declara que aquela variável é privada. Exemplo:
// this.email = email (publico)
// #nome (É necessário declarar antes)
// this.#email = email (privado)
