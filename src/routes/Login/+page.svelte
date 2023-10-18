<script>
	import PaylnSvg from './PaylnSVG.svelte';

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
</script>

<div class="p-2 sm:p-6 md:p-10">
	<section class="flex flex-col sm:flex-row justify-center">
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
			<form class="space-y-12" action="#">
				<h5 class="md:text-3xl text-xl font-medium text-[#223d5b] text-center">Login to PayLn</h5>
				<div>
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
					<input
						type="email"
						name="email"
						id="email"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="name@company.com"
						required
					/>
				</div>
				<div class="relative">
					<label for="password" class="block mb-2 text-sm font-medium text-gray-900"
						>Your password</label
					>
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
					<input
						type={pass_Type}
						name="password"
						id="password"
						placeholder="••••••••"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						required
					/>
				</div>
				<div class="flex items-start">
					<a href="#" class="mx-auto text-sm text-[#223d5b] hover:underline">Lost Password?</a>
				</div>
				<button
					type="submit"
					class="w-full text-white bg-[#223d5b] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
					>Login to your account</button
				>
				<div class="text-sm font-medium text-gray-900ha">
					Not registered? <a href="Signup" class="text-[#223d5b] hover:underline">Create account</a>
				</div>
			</form>
		</div>

		<!-- Other Side -->
		<div
			class="relative hidden sm:block w-full p-4 max-w-md bg-[#223d5b] border border-gray-200 border-l-transparent rounded-r-lg shadow sm:p-6 md:p-8"
		>
			<div class="pt-[20vh]">
				<PaylnSvg />
			</div>
		</div>
	</section>
</div>
