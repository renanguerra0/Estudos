
function addHouse() {

    let numRes = document.querySelector("input[name='numeroRes']").value
    let bairro1 = document.querySelector("input[name='bairro']").value
    let cidade1 = document.querySelector("input[name='cidade']").value
    let areaCasa = document.querySelector("input[name='areaDaCasa']").value

    let listaLI = document.createElement('li')
    listaLI.innerText = "Número: " + numRes + "\nBairro: " + bairro1 + "\nCidade: " + cidade1 + "\nÁrea da casa: " + areaCasa

    let botaoRemover = document.createElement("button")
    botaoRemover.type = "button"
    botaoRemover.innerText = "Remover"
    botaoRemover.setAttribute("onclick", "removerItem(this)")

    listaLI.appendChild(botaoRemover)

    document.getElementById("listaUL").appendChild(listaLI)
}


function removerItem(button){
    let removerLI = button.parentNode
    document.getElementById("listaUL").removeChild(removerLI)
}