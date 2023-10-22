<script>
	// @ts-nocheck
	import { otp, signupResult } from '$lib/store';
	import { onMount } from 'svelte';
	import { pageLoading, error } from '$lib/store.js';

	let inputs = Array.from({ length: 6 }).map(() => '');
	let the_otp;
	let last_details;
	let is_submitting;
	let an_error;

	pageLoading.subscribe((value) => {
		is_submitting = value;
	});
	error.subscribe((value) => {
		an_error = value;
	});

	onMount(() => {
		const storedResult = localStorage.getItem('signupResult');

		if (storedResult !== null) {
			const result = JSON.parse(storedResult);
			signupResult.set(result);
			localStorage.removeItem('signupResult');
		}
	});

	function validateInput(event) {
		const input = event.target.value;

		if (input.length > 1 || isNaN(input)) {
			event.target.value = '';
		} else {
			const index = event.target.dataset.index;
			inputs[index] = input;
		}
	}

	otp.subscribe((value) => {
		the_otp = value;
	});

	signupResult.subscribe((value) => {
		last_details = value;
	});
	async function handleSubmit() {
		const allInputsEntered = inputs.every((input) => input.length > 0);

		if (allInputsEntered) {
			const allInputs = inputs.join('');
			otp.set(allInputs);
			// sending them to the server
			pageLoading.set(true);
			const response = await fetch('https://payln-staging.onrender.com/users/email-verification', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					otp: the_otp,
					user_id: last_details.result.user.id
				})
			});
			const result = await response.json();
			if (result.data) {
				localStorage.setItem('token', JSON.stringify(result.data.result.access_token));
			}
			pageLoading.set(false);
			if (result.status == 'error') {
				error.set(result.message);
			}
		} else {
			error.set('Please enter all inputs');
		}
	}

	async function resendOtp() {
		const response = await fetch(
			'https://payln-staging.onrender.com/users/send-email-verification',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: last_details.result.user.email
				})
			}
		);
		const result = await response.json();
	}
</script>

<h3
	class="my-24 text-2xl md:text-3xl lg:text-4xl mx-12 text-center font-medium leading-none tracking-tight text-gray-900 dark:text-white capitalize"
>
	Enter your verification code
</h3>
<p class="mb-6 mx-6 text-center text-xl font-normal text-gray-900 lg:text-xl sm:px-16 xl:px-48">
	We've sent a verification code to your email to ensure it's really you. Please enter the code
	below to proceed with your <span class="text-[#223d5b]">Sign Up</span>.
</p>

<div class="flex flex-row sm:justify-between justify-evenly mx-2 sm:mx-[25%] lg:mx-[30%] py-12">
	{#each inputs as input, index}
		<div
			class="focus-within:ring-blue-500 rounded-md focus-within:border-blue-500 box-border h-12 w-12 p-2 border-2 border-gray-300"
		>
			<textarea
				rows="1"
				on:input={validateInput}
				bind:value={inputs[index]}
				data-index={index}
				class="block w-full h-full text-center text-lg font-medium text-gray-900 bg-transparent resize-none outline-none"
			/>
		</div>
	{/each}
</div>
<p class="text-center text-red-500 text-base mx-6">{an_error}</p>
<div class="w-2/3 mt-4 max-w-md mx-auto">
	<button
		type="button"
		on:click={handleSubmit}
		class="px-6 w-full py-3.5 text-base font-medium text-white bg-[#223d5b] hover:bg-[#335c8b] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
		>Submit</button
	>
</div>

<p class="mt-6 mx-6 text-center text-xl font-normal text-gray-900 lg:text-xl sm:px-16 xl:px-48">
	Didn't receive the code? Check your spam folder or click
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<span
		aria-label="send otp again"
		tabindex="0"
		role="button"
		on:click={resendOtp}
		class=" text-yellow-600"
	>
		Resend Code.
	</span>
</p>
