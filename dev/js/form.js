const submit = document.getElementById('contact-submit')
const contactMessage = document.getElementById('contact-message')

submit.addEventListener('submit', (e) => {
    e.preventDefault()
    contactMessage.innerText = '¡Gracias por contactar conmigo!'
})
