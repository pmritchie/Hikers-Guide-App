/*
 * events.js
 * 
*/
var isValid = false;
if(document.querySelector('#name')){
	var name = document.querySelector('#name').addEventListener('blur', formValidate, false);
}
if(document.querySelector('#email')){
	var email = document.querySelector('#email').addEventListener('blur', emailValidate, false);
}
if(document.querySelector('#message')){
	var message = document.querySelector('#message').addEventListener('blur', formValidate, false);
}
var sendButton = document.querySelector('#send').addEventListener('click', (e)=>{
	e.preventDefault();
});
// if(document.querySelector('.datebtn')){
// var test = document.querySelectorAll('.datebtn').addEventListener('select',dateSelection, false);
// }

function formValidate(event) {
	var target = event.target;
	var parent = target.parentElement;
	var message = '<label class="error">Do not leave blank!</label>';

	if(!target.value.length >= 1) {
		if(!parent.querySelector('.error')) {
			parent.insertAdjacentHTML('beforeend', message);
		}
	} else {
		parent.removeChild(parent.querySelector('.error'));
	}
}

function emailValidate(event) {
	var target = event.target;
	var parent = target.parentElement;
	var message = '<label class="emailReg">Ex. johnsmith@email.com</label>';

	if(!(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(target.value))) {
		if(!parent.querySelector('.emailReg')) {
			parent.insertAdjacentHTML('beforeend', message);
		}
	} else {
		parent.removeChild(parent.querySelector('.error'));
	}
	alert('test')

	
}

// function dateSelection(event) {
// 	var target = event.target
// 	var events = document.querySelector('#eventDate')
// 	if(target.value ==) {
// 		alert('Yup');
// 	}
// 	else {
// 		alert('Nope')
// 	}
// }
