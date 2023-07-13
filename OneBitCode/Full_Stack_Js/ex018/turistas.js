
const nome = prompt("Qual o seu nome? ")
let cidadesVisitadas = ""
let contador = 0
let continuar = prompt("Visitou alguma cidade? Sim/Não")

while (continuar === "Sim"){
    let cidade = prompt("Qual o nome da cidade visitada? ")
    cidadesVisitadas = cidadesVisitadas + " - " + cidade + "\n"
    contador += 1
    continuar = prompt("Você visitou alguma outra cidade? Sim/Não")

}
alert("Informações do turista: " + "\nNOME: " + nome + "\nCidades Visitadas: " + "\n" + cidadesVisitadas + "\nQuantidade: " + contador)