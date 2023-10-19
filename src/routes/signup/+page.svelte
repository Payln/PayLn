<script>
	import PaylnSvg from '$lib/PaylnSVG.svelte';

	let pass_Type = 'password';

	const pass_Visibility = () => {
		if (pass_Type == 'password') {
			pass_Type = 'text';
		} else {
			pass_Type = 'password';
		}
	};

	/**
	 * @param {{ key: string; }} event
	 */

	function KeyDown(event) {
		if (event.key === 'Enter') {
			pass_Visibility();
		}
	}

	const formField1 = [
		{
			label: 'Email address',
			type: 'email',
			name: 'floating_email',
			id: 'floating_email',
			placeholder: '',
			required: true
		},
		{
			label: 'Password',
			type: 'password',
			name: 'floating_password',
			id: 'floating_password',
			placeholder: '',
			required: true
		},
		{
			label: 'Confirm password',
			type: 'password',
			name: 'repeat_password',
			id: 'floating_repeat_password',
			placeholder: '',
			required: true
		}
	];

	const formField2 = [
		{
			label: 'Website URL',
			type: 'text',
			name: 'Website_URL',
			id: 'floating_Website_URL',
			placeholder: '',
			required: true
		},
		{
			label: 'Company Name(E.g Google)',
			type: 'text',
			name: 'floating_company',
			id: 'floating_company',
			placeholder: '',
			required: true
		}
	];

	let Name_field = [
		{ name: 'floating_first_name', id: 'floating_first_name', label: 'First name' },
		{ name: 'floating_last_name', id: 'floating_last_name', label: 'Last name' }
	];

	let State_field = [
		{ name: 'City', id: 'floating_City', label: 'City' },
		{ name: 'Postal_Code', id: 'floating_Postal_Code', label: 'Postal Code' }
	];

	let Country_field = [
		{ name: 'country', id: 'floating_country', label: 'Country' },
		{ name: 'State', id: 'floating_State', label: 'State' }
	];
</script>

<section class="p-2 sm:p-6 md:p-10">
	<div class="flex flex-col items-center sm:items-stretch sm:w-full sm:flex-row sm:justify-center">
		<!-- Top Logo -->
		<div
			class="w-full h-[10vh] sm:hidden p-2 max-h-sm max-w-sm bg-[#223d5b] border border-gray-200 rounded-t-lg shadow flex justify-center"
		>
			<div class="w-[6rem] mt-[1rem]">
				<PaylnSvg />
			</div>
		</div>
		<!-- End of Top Logo  -->
		<div
			class="w-full p-4 max-w-sm bg-white border border-gray-200 border-r-transparent rounded-b-lg sm:rounded-l-lg shadow sm:p-6 md:p-8"
		>
			<h3 class="md:text-3xl text-xl capitalize font-medium text-[#223d5b] pb-4">
				Sign up for PayLn
			</h3>
			<form>
				<!--  -->
				<div class="grid md:grid-cols-2 md:gap-6">
					{#each Name_field as field}
						<div class="relative z-0 w-full mb-6 group">
							<input
								type="text"
								name={field.name}
								id={field.id}
								class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								required
							/>
							<label
								for={field.id}
								class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
								>{field.label}</label
							>
						</div>
					{/each}
				</div>
				<!--  -->
				{#each formField1 as field}
					<div class="relative z-0 w-full mb-6 group">
						{#if field.label === 'Password' || field.label === 'Confirm password'}
							<input
								type={pass_Type}
								name={field.name}
								id={field.id}
								class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder={field.placeholder}
								required={field.required}
							/>
							<!-- Password Visibility Icon -->
							<span class="absolute bottom-3 right-0 flex items-center px-2 cursor-pointer">
								<i
									on:click={pass_Visibility}
									on:keydown={KeyDown}
									class:fa-eye-slash={pass_Type == 'text'}
									class:fa-eye={pass_Type !== 'text'}
									class="fas"
									aria-label={pass_Type == 'text' ? 'Hide password' : 'Show password'}
									role="button"
									tabindex="0"
								/>
							</span>
							<!-- End Password Visibility Icon -->
						{:else}
							<input
								type={field.type}
								name={field.name}
								id={field.id}
								class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder={field.placeholder}
								required={field.required}
							/>
						{/if}
						<label
							for={field.id}
							class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							{field.label}
						</label>
					</div>
				{/each}
				<!--  -->
				<!--  -->
				<div class="grid md:grid-cols-2 md:gap-6">
					{#each Country_field as field}
						<div class="relative z-0 w-full mb-6 group">
							<input
								type="text"
								name={field.name}
								id={field.id}
								class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								required
							/>
							<label
								for={field.id}
								class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
								>{field.label}</label
							>
						</div>
					{/each}
				</div>
				<!--  -->
				<!--  -->
				<div class="grid md:grid-cols-2 md:gap-6">
					{#each State_field as field}
						<div class="relative z-0 w-full mb-6 group">
							<input
								type="text"
								name={field.name}
								id={field.id}
								class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								required
							/>
							<label
								for={field.id}
								class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
								>{field.label}</label
							>
						</div>
					{/each}
				</div>
				<!--  -->
				{#each formField2 as field}
					<div class="relative z-0 w-full mb-6 group">
						<input
							type={pass_Type}
							name={field.name}
							id={field.id}
							class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder={field.placeholder}
							required={field.required}
						/>
						<label
							for={field.id}
							class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							{field.label}
						</label>
					</div>
				{/each}
				<!--  -->
				<div class="pb-12">
					<label for="about" class="block mb-2 text-sm font-medium text-gray-900 capitalize"
						>about your company</label
					>
					<textarea
						id="about"
						rows="4"
						class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
						placeholder="Write about your company..."
					/>
				</div>
				<div class="flex flex-row justify-between">
					<button
						type="submit"
						class="text-white bg-[#223d5b] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
						><a href="dashboard">Submit</a></button
					>
					<button
						type="button"
						class="text-white bg-[#223d5b] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
					>
						<a data-sveltekit-preload-data="hover" href="/">Login</a>
					</button>
				</div>
			</form>
		</div>
		<!-- Side Logo -->
		<div
			class="relative hidden sm:block w-full p-4 max-w-sm bg-[#223d5b] border border-gray-200 border-l-transparent rounded-r-lg shadow sm:p-6 md:p-8"
		>
			<div class="mt-[125%] mx-auto text-center w-[10rem]">
				<PaylnSvg />
			</div>
		</div>
		<!-- End of Side Logo -->
	</div>
</section>
