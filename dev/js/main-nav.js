const headerNav = document.getElementById('nav')
const mainNav = document.getElementById('main-nav')
const toggleMenu = document.getElementById('toggle-menu')

const body = document.getElementById('body')
const header = document.getElementById('header')
const nav = document.getElementById('nav')

/*if(!headerNav.classList.contains('nav__show')) {
    toggleMenu.addEventListener('click', (e) => {
        if(!mainNav.classList.contains('main-nav__show')){
            headerNav.classList.add('nav__show')
            mainNav.classList.add('main-nav__show')
            toggleMenu.classList.add('show')
        } else {
            headerNav.classList.remove('nav__show')
            mainNav.classList.remove('main-nav__show')
            toggleMenu.classList.remove('show')
        }
    })
}*/

//Show menu
toggleMenu.addEventListener('click', (e) => {
    if(e.target.id === 'toggle-menu' || e.target.parentElement.id === 'toggle-menu') {
        headerNav.classList.toggle('nav__show')
        mainNav.classList.toggle('main-nav__show')
        toggleMenu.classList.toggle('show')
    }
})

//Change color nav bar when scrolling and header bottom position <= 100px
window.addEventListener('scroll', (e) => {
    if(header.getBoundingClientRect().bottom <= 100) {
        nav.classList.add('nav__color')
    } else {
        nav.classList.remove('nav__color')
    }
})


