// @ts-nocheck
import { passwordMatch, emailCheck, submitting } from '$lib/store.js';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function formSubmit(formData) {
	switch (true) {
		case emailRegex.test(formData.email) == false:
			console.log('Invalid email');
			emailCheck.set('Invalid email');
			break;
		case formData.password !== formData.confirm_password || formData.password == '':
			console.log('Password and confirm password do not match');
			passwordMatch.set('Password and confirm password do not match');
			break;
		case formData.password.length < 8:
			console.log('Password is too short');
			passwordMatch.set('Password is too short');
			break;
		default:
			submitting.set(true);
			const response = await fetch('https://payln-staging.onrender.com/auth/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});
			const result = await response.json();
			submitting.set(false);
			console.log(result);
			break;
	}
}

export { formSubmit };
