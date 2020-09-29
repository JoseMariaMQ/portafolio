const submit = document.getElementById('contact-submit')
const contactMessage = document.getElementById('contact-message')
const form = document.getElementById('form')

submit.addEventListener('click', () => {
    contactMessage.innerText = '¡Gracias por contactar conmigo!'
})

form.addEventListener('submit', () => {
    form.reset()
})

