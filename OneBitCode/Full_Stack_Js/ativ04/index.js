
distancia = prompt("Informe a distância em anos-luz:")
opcao = prompt("Digite abaixo para qual unidade deseja converter:\n" + "1. Parsec(pc)\n" + "2. Unidade Astronônima (AU)\n" + "3. Quilômetros(km)")

switch (opcao){
    case "1":
       conversao = distancia * 0.306601
       alert("Distância em anos-luz: " + distancia + "\nConversão para Parsec(pc): " + conversao)
       break
    case "2":
        conversao = distancia * 63241.1
       alert("Distância em anos-luz: " + distancia + "\nConversão para Unidade Astronônima (AU): " + conversao)
       break
    case "3":
        conversao = distancia * 9.5 * (Math.pow(10, 12))
        alert("Distância em anos-luz: " + distancia + "\nConversão para Unidade Astronônima (AU): " + conversao)
        break
    default:
        alert("Distância em anos-luz: " + distancia + "\nUnidade não identificada: Conversão fora do escopo.")
}