function addInput(){
    const ul = document.getElementById('inputs') //Buscando o ID "inputs"

    const newLi = document.createElement('li') //Criando o elemento com a tag "li"
    newLi.className = 'list-item' //A classe ta tag "li" será "list-item"
    newLi.innerText = 'Novo input: ' //O texto visualizado na página será "Novo input"
    //O "innerHTML" também pode ser utilizado, contudo traz vulnerabilidade. 

    const newInput = document.createElement('input')
    newInput.type = 'text' //O tipo da tag "input" será texto
    newInput.name = 'input' //O nome da tag "input" será input

    //Organizando nós
    newLi.appendChild(newInput) //newLi é um elemento pai de newInput, ou seja, o newInput está dentro de newLi.
    ul.appendChild(newLi) //ul é um elemento pai de newLi
}