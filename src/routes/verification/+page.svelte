<script>
	// @ts-nocheck
	import { otp, signupResult, token } from '$lib/store';
	import { onMount, afterUpdate } from 'svelte';
	import { pageLoading, errors } from '$lib/store.js';

	let inputs = Array.from({ length: 6 }).map(() => '');
	const details = $signupResult;
	let the_otp = $otp;
	let error_alert = false;
	let check;
	$: an_error = $errors;

	onMount(() => {
		console.log('error = ', an_error);
		if (an_error === 'Incorrect Input') {
			error_alert = true;
		}
	});

	function validateInput(event) {
		const input = event.target.value;

		if (input.length > 1 || isNaN(input)) {
			event.target.value = '';
		} else {
			const index = event.target.dataset.index;
			inputs[index] = input;
			if (input !== '') {
				const nextInput = event.target.nextElementSibling;
				console.log('index = ', index);
				console.log('nextInput = ', nextInput);
				if (nextInput) {
					nextInput.focus();
				}
			}
		}
	}

	async function handleSubmit() {
		const allInputsEntered = inputs.every((input) => input.length > 0);

		if (!allInputsEntered) {
			error_alert = true;
			errors.set('Incomplete Input');
			return;
		}

		const allInputs = inputs.join('');
		otp.set(allInputs);
		console.log('allInputs = ', allInputs);

		pageLoading.set(true);

		const response = await fetch('https://payln-staging.onrender.com/users/email-verification', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				otp: the_otp,
				user_id: details.result.user.id
			})
		});

		const result = await response.json();
		console.log('response = ', result.status);

		if (result.status === 'error') {
			error_alert = true;
			errors.set('Incorrect Input');
		}
		if (result.data) {
			token.set(result.data.result.access_token);
		}

		pageLoading.set(false);
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
					email: details.result.user.email
				})
			}
		);
		const result = await response.json();
	}
</script>

<!-- Html -->
<!-- Alert -->
<div
	role="alert"
	class:hidden={!error_alert}
	class="absolute top-16 md:right-[0%] z-[99] mx-10 w-[80%] md:w-[30%] rounded border-s-4 border-red-500 bg-red-50 p-4 dark:border-red-600 dark:bg-red-900"
>
	<div class="flex items-center text-center gap-2 text-red-800 dark:text-red-100">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
			/>
		</svg>

		<!-- close button -->
		<button on:click={() => (error_alert = false)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 right-2 top-1 absolute"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<!-- End of close button -->

		<strong class="block font-medium"> That's not right </strong>
	</div>
	{#if an_error === 'Incorrect Input'}
		<p class="mt-2 text-sm text-red-700 dark:text-red-200">
			We apologize for the inconvenience! It appears there was an issue with your input. Please <b>
				double-check and ensure that the information provided is correct
			</b>. Feel free to correct any errors and try again.
			<b>Kindly refrain from refreshing the page</b>
			at this moment. Thank you for your understanding as we work to address this matter.
		</p>
	{:else if an_error === 'Incomplete Input'}
		<p class="mt-2 text-sm text-red-700 dark:text-red-200">
			Apologies for the inconvenience! It seems there's a missing piece in the puzzle. Please make
			sure all required fields are filled out before proceeding. <b>
				Once you've completed all necessary inputs</b
			>, give it another shot. Please <b>avoid refreshing the page</b> for now. Your understanding and
			patience are valued as we diligently work to resolve this issue.
		</p>
	{:else}
		<p class="mt-2 text-sm text-red-700 dark:text-red-200">
			Oops! Something mysterious happened on our end, and we're not entirely sure what it is. Our
			technical team is investigating the issue. In the meantime, please refrain from refreshing the
			page. We appreciate your patience and understanding as we work to unravel this digital enigma
			and get things back on track."
		</p>
	{/if}
</div>

<!-- End of Alert -->
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
<p class="text-center text-red-500 text-base mx-6" />
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
<!-- End of Html -->
