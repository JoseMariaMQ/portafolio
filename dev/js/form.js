const contactMessage = document.getElementById('contact-message')

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    contactMessage.innerText = '¡Gracias por contactar conmigo!'
})
