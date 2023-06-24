
//Parâmetros = Entrada
function dobro(x){
    alert("O dobro de " + x + " é " + (x * 2))
}

// dobro(5)
// dobro(8)
// dobro()

function dizerOla(nome){
    alert("Olá, " + nome + "!")
}

// dizerOla("Renan")

function soma(a, b, c){
    alert("O resultado da soma é " + (a + b + c))
}

// soma(7, 4, 1)
// soma(23,3, 7)


//O parâmetro segue a ordem.
function criarUsuario(nome, email, senha, tipo ="admin"){
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo
    }
    console.log(usuario)
}

//É possível deixar um parãmetro com o valor padrão.
function novoUsuario(nome,tipo ="admin",email, senha, ){
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo
    }
    console.log(usuario)
}

// criarUsuario("Renan", "renan@email.com", "1234")
// novoUsuario("Renan", "admin", "renan@email.com", "1234")

//Exemplo de função com muitos parâmetros.
function muitosParametros(nome, telefone, endereco, aniversario, email, senha){

}
muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")


//Conforme exemplo acima, uma função com muitos parâmetros pode se tornar difícil de se ler com o tempo. Dito isso, podemos transformar esse variados parâmetros em um objeto, visando um melhor controle e organização. 
function ObjetoComoParametro(usuario){
    usuario.nome
    usuario.telefone
    usuario.endereco
    usuario.aniversario
    usuario.email
    usuario.senha
}

const dadosUsuario = {
    nome: "",
    telefone: "",
    endereco: "",
    aniversario: "",
    email: "",
    senha: ""
}

ObjetoComoParametro(dadosUsuario)
