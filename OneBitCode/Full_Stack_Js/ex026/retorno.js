
function calcularMedia(a, b){
    const media = (a + b)/2
    return media //Retorno = Saída
}
const resultado = calcularMedia(7, 2)
console.log(resultado)


function criarProduto(nome, preco) {
    const produto = {
        nome, //nome: nome
        preco, //preco: preco
        estoque: 1
    }
    return produto
}
// const notebook = criarProduto("Notebok Intel Core i3 8GB", 2500)
// console.log(notebook)
console.log(criarProduto("Notebok Intel Core i3 8GB", 2500))


function areaRetangular(base, altura){
    return base * altura
}
console.log(areaRetangular(3,5))


//É possível retornar uma função dentro de outra função.
function areaQuadrado(lado){
    return areaRetangular(lado, lado)
}
console.log(areaQuadrado(9))


//A função só pode retornar uma única vez.
function ola(){
    let texto = "..."
    return texto
    //A função é encerrada no RETURN, após isso o código não é lido.
    texto = "Olá, mundo"
    console.log(texto)

}
console.log(ola())



function maioridade(idade){
    if (idade >= 18){
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}
console.log(maioridade(20))
console.log(maioridade(16))