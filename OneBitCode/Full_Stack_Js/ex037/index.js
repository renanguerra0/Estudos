
function register(element){
    const usuario = element.children.usuario.value
    const senha = element.children.senha.value
    const confirmarSenha = element.children.confirmarSenha.value

    if (senha == confirmarSenha){
        alert("Usuário " + usuario + " registrado!")
    } else {
        alert("As senhas não conferem!")
    }

}