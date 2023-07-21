
function addContact(){
    const contactSection = document.getElementById("contacts-list")

    const h3 = document.createElement('h3') //Criando elemento h3
    h3.innerText = "Contato"

    const ul = document.createElement('ul') //Criando elemento ul

    const nameLi = document.createElement('li') //Criando elemento li
    nameLi.innerText = "Nome: " //Atribuindo um texto ao li

    const nameInput = document.createElement('input') //Criando elemento input
    nameInput.type = "text"
    nameInput.name = "fullname"

    nameLi.appendChild(nameInput) //nameLi é pai de nameInput
    ul.appendChild(nameLi) //ul é pai de nameLi
    ul.appendChild(document.createElement('br'))


    const phoneLi = document.createElement('li')
    phoneLi.innerText = "Telefone: "
    
    const phoneInput = document.createElement('input')
    phoneInput.type = "text"
    phoneInput.name = "phone"

    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    const addressLi = document.createElement('li')
    addressLi.innerHTML = '<label for="address">Endereço: </label>' //Utilizando o innerHTML o código é reconhecido como uma tag HTML. Caso fosse utilizado o innerText, todo esse trecho teria sido lido apenas como umn texto.
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'

    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))

    contactSection.append(h3, ul) //Adicionando os elementos "h3" e "ul" na tag "section" para serem mostrados da tela.
}


function removeContact(){
    const contactSection = document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length - 1]) //Removendo o nó que está dentro de um elemento
    contactSection.removeChild(contacts[contacts.length -1])
}