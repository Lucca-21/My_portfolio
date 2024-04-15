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
