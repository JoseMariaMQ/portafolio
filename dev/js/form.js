const submit = document.getElementById('contact-submit')
const contactMessage = document.getElementById('contact-message')

submit.addEventListener('click', () => {
    contactMessage.innerText = '¡Gracias por contactar conmigo!'
})
