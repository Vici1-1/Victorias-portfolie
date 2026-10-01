const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
	menuIcon.addEventListener('click', () => {
		navbar.classList.toggle('open');
	});
	navbar.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			navbar.classList.remove('open');
		});
	});
}

if (typeof ScrollReveal !== 'undefined') {
	const sr = ScrollReveal({
		distance: '40px',
		duration: 1200,
		reset: false
	});
	sr.reveal('.home-text', { delay: 100, origin: 'left' });
	sr.reveal('.about-img', { delay: 150, origin: 'left' });
	sr.reveal('.about-text', { delay: 200, origin: 'right' });
	sr.reveal('.inner', { delay: 150, origin: 'bottom' });
	sr.reveal('.experience-content', { delay: 150, origin: 'bottom' });
	sr.reveal('.skills-content', { delay: 150, origin: 'bottom' });
	sr.reveal('.portfolio-content', { delay: 150, origin: 'bottom' });
	sr.reveal('.contact-text', { delay: 150, origin: 'bottom' });
}
