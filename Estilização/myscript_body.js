/* ================= Hamburger ================ */

const hamburger = document.querySelector('button#hb_button')
const nav = document.querySelector('nav')
const hb_img = document.querySelector('img#hb_open')

hamburger.addEventListener ('click', clicou)

function clicou() {
    hamburger.classList.toggle('active')
    nav.classList.toggle('active')

    if (hb_img.getAttribute('src') !== 'close.svg') {
        hb_img.setAttribute('src', 'close.svg')
    } else {
        hb_img.setAttribute('src', 'open.svg')
    }

    const about = document.querySelector('#about_nav')
    const overview = document.querySelector('#overview_nav')
    const contact = document.querySelector('#contact_nav')
    
    about.addEventListener ('click', clicou2)
    overview.addEventListener ('click', clicou2)
    contact.addEventListener ('click', clicou2)

    function clicou2() {
        hamburger.classList.remove('active')
        nav.classList.remove('active')

        if (hb_img.getAttribute('src') === 'close.svg') {
            hb_img.setAttribute('src', 'open.svg')
        } else {
        }
    }
}

/* ================================= Button animation ============================ */

var button = document.querySelector('input#button')

button.addEventListener('mouseenter', sendEnter)
button.addEventListener('mouseout', sendOut)
button.addEventListener('click', sendClick)

function sendEnter() {
    button.style.backgroundColor = `#75cbd8`
    button.style.color = `#2c3e50` 
}

function sendOut() {
    button.style.backgroundColor = `#4ca1af`
    button.value = 'Send'
    button.style.color = `white`
}

function sendClick() {
    button.value = '✔'
    button.style.backgroundColor = `green`
    button.style.color = `white`
}

/* ----------------------------------- Button redirect ------------------------------- */

function queda_button() {
    location.replace("https://www.instagram.com/p/C8qkZw3t6zz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==")
}
function cyber_button() {
    location.replace("https://lucca-21.github.io/Trabalho_empreendedorismo/")
}
function jaguar_button() {
    location.replace("https://www.instagram.com/reel/C8qk3jPq8DF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==")
}
