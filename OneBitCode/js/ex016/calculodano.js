
const nomePersona1 = prompt("Digite o nome do personagem 1: ")
const poderAtaquePersona1 = prompt("Digite o poder de ataque do personagem 1: ") 

const nomePersona2 = prompt("Digite o nome do personagem 2: ")
const vidaPersona2 = prompt("Digite a quantidade de vida do personagem 2:")
const defesaPersona2 = prompt("Digite a quantidade de defesa do personagem 2: ")
const escudoPersona2 = prompt("O personagem 2 possui um escudo? (Responda com S para SIM ou N para NÃO)")

if (poderAtaquePersona1 > defesaPersona2 && escudoPersona2 == "N"){
    dano = poderAtaquePersona1 - defesaPersona2
    vidaAtualizada = vidaPersona2 - dano

    alert("Personagem 1:\n" + "NOME: " + nomePersona1 + "\n" + "PODER DE ATAQUE: " + poderAtaquePersona1 + "\n" +
    "Personagem 2:\n" + "NOME: " + nomePersona2 + "\n" + "VIDA: " + vidaAtualizada + "\n" + "DEFESA: " + defesaPersona2 + "\n" + "ESCUDO: " + escudoPersona2 + "\n" + "DANO SOFRIDO: " + dano)
} else if (poderAtaquePersona1 > defesaPersona2 && escudoPersona2 == "S"){
    dano = poderAtaquePersona1 - defesaPersona2
    danoEscudo = dano / 2
    vidaAtualizada1 = vidaPersona2 - danoEscudo

    alert("Personagem 1:\n" + "NOME: " + nomePersona1 + "\n" + "PODER DE ATAQUE: " + poderAtaquePersona1 + "\n" +
    "Personagem 2:\n" + "NOME: " + nomePersona2 + "\n" + "VIDA: " + vidaAtualizada1 + "\n" + "DEFESA: " + defesaPersona2 + "\n" + "ESCUDO: " + escudoPersona2 + "\n" + "DANO SOFRIDO: " + danoEscudo)
} else if (poderAtaquePersona1 <= defesaPersona2) {
    alert("Personagem 1:\n" + "NOME: " + nomePersona1 + "\n" + "PODER DE ATAQUE: " + poderAtaquePersona1 + "\n" +
    "Personagem 2:\n" + "NOME: " + nomePersona2 + "\n" + "VIDA: " + vidaPersona2 + "\n" + "DEFESA: " + defesaPersona2 + "\n" + "ESCUDO: " + escudoPersona2 + "\n" + "DANO SOFRIDO: 0")
}