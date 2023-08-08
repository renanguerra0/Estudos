
function useLightTheme(){
    document.body.style.color = 'black'
    document.body.style.backgroundColor = 'white'
}

function useDarkTheme(){
    document.body.style.color = 'white'
    document.body.style.backgroundColor = 'black'
}

function switchTheme(){
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)