<script>
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

	const formFields = [
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
		},
		{
			label: 'Your Country',
			type: 'text',
			name: 'country',
			id: 'floating_country',
			placeholder: '',
			required: true
		},
		{
			label: 'Your City',
			type: 'text',
			name: 'City',
			id: 'floating_City',
			placeholder: '',
			required: true
		},
		{
			label: 'Your State',
			type: 'text',
			name: 'State',
			id: 'floating_State',
			placeholder: '',
			required: true
		},
		{
			label: 'Your Postal Code',
			type: 'text',
			name: 'Postal_Code',
			id: 'floating_Postal_Code',
			placeholder: '',
			required: true
		},
		{
			label: 'Address',
			type: 'text',
			name: 'Address',
			id: 'floating_Address',
			placeholder: '',
			required: true
		},
		{
			label: 'Website URL',
			type: 'text',
			name: 'Website_URL',
			id: 'floating_Website_URL',
			placeholder: '',
			required: true
		}
	];
</script>

<section class="p-2 sm:p-6 md:p-10">
	<div
		class="w-full p-4 mx-auto max-w-md bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8"
	>
		<h3 class="md:text-3xl text-xl capitalize font-medium text-[#223d5b] pb-4">
			Sign up for PaLyn
		</h3>
		<form>
			{#each formFields as field}
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
							type={pass_Type}
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
			<div class="grid md:grid-cols-2 md:gap-6">
				<div class="relative z-0 w-full mb-6 group">
					<input
						type="text"
						name="floating_first_name"
						id="floating_first_name"
						class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						for="floating_first_name"
						class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>First name</label
					>
				</div>
				<div class="relative z-0 w-full mb-6 group">
					<input
						type="text"
						name="floating_last_name"
						id="floating_last_name"
						class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						for="floating_last_name"
						class="peer-focus:font-medium absolute text-sm text-gray-500 0 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>Last name</label
					>
				</div>
			</div>
			<div class="relative z-0 w-full mb-6 group">
				<input
					type="text"
					name="floating_company"
					id="floating_company"
					class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
				/>
				<label
					for="floating_company"
					class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>Company Name(E.g Google)</label
				>
			</div>
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
					>Submit</button
				>
				<button
					type="button"
					class="text-white bg-[#223d5b] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
				>
					<a data-sveltekit-preload-data="load" href="/">Login</a>
				</button>
			</div>
		</form>
	</div>
</section>
