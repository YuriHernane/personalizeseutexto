let personalize = document.querySelector('#titulo')

let titulo = document.querySelector('.inputtext')
let tamanho = document.querySelector('.inputtamanho')
let color = document.querySelector('#color')

function mudartitulo() {
    personalize.innerHTML = titulo.value
}

function georgia() {
    personalize.style.fontFamily = 'Georgia, Times, serif'
}

function cambria() {
    personalize.style.fontFamily = 'Cambria, Cochin, Georgia, Times, serif'
}

function arial() {
    personalize.style.fontFamily = 'Arial, Helvetica, sans-serif'
}

function lucida() {
    personalize.style.fontFamily = 'Arial, Helvetica, sans-serif'
}

function verdana() {
    personalize.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif'
}

function mudartamanho() {
    personalize.style.fontSize = tamanho.value
}

function mudarcor() {
    personalize.style.color = color.value
}