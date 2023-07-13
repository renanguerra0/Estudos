

const palavra = prompt("Informe uma palavra: ")

let palavraInvertida = ""

//Atribuindo o -1 ao length a contagem passar a ser do final para o começo. Além disso a fórmula passa a considerar a última posição do termo ao invés do tamanho da String.
for (let i = palavra.length - 1; i >= 0; i--){
    palavraInvertida = palavraInvertida + palavra[i]
}

if (palavra === palavraInvertida){
    alert(palavra + " é um palíndromo")
} else {
    alert(palavra + " não é um palíndromo\n\n" + palavra + " é diferente de " + palavraInvertida)
}