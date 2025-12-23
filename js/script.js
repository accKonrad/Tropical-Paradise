burgerBtn = document.querySelector('.burger-btn')
navMenu = document.querySelector('.nav')
allSection = document.querySelectorAll('.section')
allLinks = document.querySelectorAll('.nav__item a')
year = document.getElementById('currentYear')

//Adding current year to footer
const currentYear = new Date().getFullYear()
year.textContent = currentYear

// Adding delay for everyone link in nav
let delay = 0.0
allLinks.forEach(link => {
	link.style.animationDelay += delay + 's'
	delay += 0.2
})

// Toggle Menu by burger icon and add slide animation
function toggleNavMenu() {
	if (!navMenu.classList.contains('nav--active')) {
		navMenu.classList.add('nav--active')

		allLinks.forEach(link => {
			link.classList.add('slide')
		})
	} else {
		navMenu.classList.remove('nav--active')
		allLinks.forEach(link => {
			link.classList.remove('slide')
		})
	}
}

// Event Listeners
burgerBtn.addEventListener('click', toggleNavMenu)

allLinks.forEach(link => {
	link.addEventListener('click', toggleNavMenu)
})
