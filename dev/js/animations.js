const events = [document.getElementById('skills-items'), document.getElementById('portfolio-img'),
    document.getElementById('experience-description1'), document.getElementById('experience-description2'),
    document.getElementById('education-description1'), document.getElementById('education-description2'),
    document.getElementById('education-description3'), document.getElementById('contact-container')]

window.addEventListener('scroll', () => {
    for(let event of events) {
        if(event.getBoundingClientRect().top < window.innerHeight) {
            event.classList.add('animations')
        }
    }
})
