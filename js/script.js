burgerBtn = document.querySelector('.burger-btn')
navMenu = document.querySelector('.nav')

function toggleNavMenu() {
	navMenu.classList.toggle('nav--active')
}

burgerBtn.addEventListener('click', toggleNavMenu)
