/* add class 'show-menu' to 'nav-menu'*/
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId);
	const nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show-menu')
		})
	}
};
showMenu('nav-toggle', 'nav-menu');

/* remove 'show-menu' from 'nav-menu' */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* scroll sections active link */
const sections = document.querySelectorAll('section[id]');
console.log(sections);

function scrollActive() {
	const scrollY = window.pageYOffset; // it returns the number of pixels the document is currently scrolled along the vertical axis
	console.log(scrollY);

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight; //https://learn.javascript.ru/size-and-scroll#metriki
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id');
		console.log(sectionId);

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
		} else {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
		}
	});
}

window.addEventListener('scroll', scrollActive);

/* change background header */
function scrollHeader() {
	const nav = document.getElementById('header');
	// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 200) nav.classList.add('scroll-header');
	else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/* show scroll top */
function scrollTop() {
	const scrollTop = document.getElementById('scroll-top');
	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
	else scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollTop);


/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
	origin: 'top',
	distance: '30px',
	duration: 1800,
	reset: true
});

sr.reveal(`.home__data, .home__img,
					 .decoration__data,
					 .accessory__content,
					 .footer__content`, {
	origin: 'top',
	interval: 300
});

sr.reveal(`.share__img, .share__content, 
					 .send__content`, {
	origin: 'left',
	interval: 200,
});

sr.reveal(`.share__data, .send__img`, {
	origin: 'right',
	interval: 200,
});