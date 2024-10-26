let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName() {
	let name = document.getElementById('contact-name').value;

	if(name.length == 0) {
		nameError.innerHTML = 'Name is required';
		return false;
		// Если имя не соответствует формату, то выводится сообщение "Write full name"
	} else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
		nameError.innerHTML = 'Write full name';
		return false;
	} else {
		nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
		return true;
	}
}

function validatePhone() {
    let phone = document.getElementById('contact-phone').value;

	if(phone.length == 0) {
		phoneError.innerHTML = 'Phone is required';
		return false;
	} else if (phone.length !== 10) {
		phoneError.innerHTML = 'Phone no should be 10 digits';
		return false;
	} else if (!phone.match(/^[0-9]{10}$/)) {
		phoneError.innerHTML = 'Only digits...';
		return false;
	} else {
		phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
		return true
	}
}

function validateEmail() {
	let email = document.getElementById('contact-email').value;

	if (email.length == 0) {
		emailError.innerHTML = 'Email is required'
		return false
	} else if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
		emailError.innerHTML = 'Email Invalid'
		return false
	} else {
		emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
		return true
	}
}

function validateMessage() {
	let message = document.getElementById('contact-message').value;
	let required = 30;
	let left = required - message.length;

	if (left > 0) {
		messageError.innerHTML = left + ' more characters required'
		return false;
	} else {
		messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
		return true;
	}
}

function validateForm() {
	if (!validateName() || !validatePhone() || !validateEmail() ||validateMessage()) {
		submitError.style.display = 'block';
		submitError.innerHTML = 'Fix error to submit';
		setTimeout(() => {
			submitError.style.display = 'none'
		}, 3000);
		return false
	}
}