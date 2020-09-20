const icon1 = document.getElementById('portfolio-icon1')
const icon2 = document.getElementById('portfolio-icon2')

const img1 = document.querySelectorAll('.portfolio__img1')
const img2 = document.querySelectorAll('.portfolio__img2')

icon1.classList.toggle('portfolio__icon-checked')

if(icon1.classList.contains('portfolio__icon-checked') && !icon2.classList.contains('portfolio__icon-checked')) {
    for(const img of img2) img.classList.toggle('portfolio__img-hidden')

    icon2.addEventListener('click', (e) => {
        icon2.classList.add('portfolio__icon-checked')
        icon1.classList.remove('portfolio__icon-checked')

        for(const img of img1) img.classList.add('portfolio__img-hidden')
        for(const img of img2) img.classList.remove('portfolio__img-hidden')
    })
    icon1.addEventListener('click', (e) => {
        icon1.classList.add('portfolio__icon-checked')
        icon2.classList.remove('portfolio__icon-checked')

        for(const img of img2) img.classList.add('portfolio__img-hidden')
        for(const img of img1) img.classList.remove('portfolio__img-hidden')
    })
}
