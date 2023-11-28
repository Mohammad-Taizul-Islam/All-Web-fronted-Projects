// Add a "current" class to the active link in the navigation
let links = document.querySelectorAll('nav a');

for (let i = 0; i < links.length; i++) {
	if (links[i].href === window.location.href) {
		links[i].classList.add('current');
		break;
	}
}

// Show and hide the mobile menu
let menuIcon = document.querySelector('.menu-icon');
let nav = document.querySelector('nav');

menuIcon.addEventListener('click', function() {
	nav.classList.toggle('show');
});

// Form validation
let form = document.querySelector('form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let messageInput = document.querySelector('#message');

form.addEventListener('submit', function(event) {
	let isValid = true;

	if (nameInput.value.trim() === '') {
		nameInput.classList.add('error');
		isValid = false;
	} else {
		nameInput.classList.remove('error');
	}

	if (emailInput.value.trim() === '') {
		emailInput.classList.add('error');
		isValid = false;
	} else {
		emailInput.classList.remove('error');
	}

	if (messageInput.value.trim() === '') {
		messageInput.classList.add('error');
		isValid = false;
	} else {
		messageInput.classList.remove('error');
	}

	if (!isValid) {
		event.preventDefault();
	}
});
