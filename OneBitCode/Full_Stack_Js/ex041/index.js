
const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function (){
    if (input.value == "Olá, mundo!"){
        input.value = "Adeus, mundo!"
    } else {
        input.value = "Olá, mundo!"
    }

    console.log(input.value) //Mostra o valor atual
    console.log(input.getAttribute('value')) //Mostra o valor definido no código HTML
})

document.getElementById('type').addEventListener('click', function(){
    input.type = input.type !== 'radio' ? 'radio' : 'text'
    // input.setAttribute('type', 'date') //Também é possível mudar, contudo não conseguimos alternar.
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder
})