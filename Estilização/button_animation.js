/* ================================= Button animation ============================ */

var button = document.querySelector('input#button')

button.addEventListener('mouseenter', enter)
button.addEventListener('mouseout', out)
button.addEventListener('click', clicou)

function enter() {
    button.style.backgroundColor = `#75cbd8`
    button.style.color = `#2c3e50` 
}

function out() {
    button.style.backgroundColor = `#4ca1af`
    button.value = 'Send'
    button.style.color = `white`
}

function clicou() {
    button.value = '✔'
    button.style.backgroundColor = `green`
    button.style.color = `white`
}