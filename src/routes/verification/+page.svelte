<script>
	// @ts-nocheck

	/**
	 * @param {Event & { target: HTMLTextAreaElement }} event
	 */
	function validateInput(event) {
		const input = event.target.value;

		if (input.length > 1 || isNaN(input)) {
			event.target.value = '';
		}
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

<div class="flex flex-row justify-between mx-10 sm:mx-[25%] py-12">
	{#each Array.from({ length: 6 }) as item}
		<div
			class="focus-within:ring-blue-500 rounded-md focus-within:border-blue-500 box-border h-12 w-12 p-2 border-2 border-gray-300"
		>
			<textarea
				rows="1"
				on:input={validateInput}
				class="block w-full h-full text-center text-lg font-medium text-gray-900 bg-transparent resize-none outline-none"
			/>
		</div>
	{/each}
</div>
<div class="w-2/3 max-w-md mx-auto">
	<button
		type="button"
		class="px-6 w-full py-3.5 text-base font-medium text-white bg-[#223d5b] hover:bg-[#335c8b] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
		>Submit</button
	>
</div>

<p class="mt-6 mx-6 text-center text-xl font-normal text-gray-900 lg:text-xl sm:px-16 xl:px-48">
	Didn't receive the code? Check your spam folder or click
	<a href="#" class=" text-yellow-600"> Resend Code. </a>
</p>
