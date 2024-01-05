//Herança de protótipo

const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso(){
        console.log("Curso criado!")
    }
}


//Nesse método precisamos passar 2 parâmetros: 
//1)Objeto que vai herdar as propriedades 2)Objeto que vai ceder as propriedades
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()