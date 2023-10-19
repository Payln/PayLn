<script>
	import PaylnSvg from '$lib/PaylnSVG.svelte';

	let sideBar = false;
	let toggleSidebar = () => {
		sideBar = !sideBar;
	};
	let imageOptionSelected = false;

	const toggleImageOption = () => {
		imageOptionSelected = !imageOptionSelected;
	};
	/**
	 * @param {{ key: string; }} event
	 */
	function handle_keydown(event) {
		if (event.key === 'Enter') {
			toggleSidebar();
		}
	}
</script>

<!--  -->

<nav class="fixed top-0 z-50 w-full bg-[#223d5b] border-b border-gray-700">
	<div class="px-3 py-3 lg:px-5 lg:pl-3">
		<div class="flex items-center justify-between">
			<div class="flex items-center justify-start">
				<!--  -->
				<button
					data-drawer-target="logo-sidebar"
					data-drawer-toggle="logo-sidebar"
					aria-controls="logo-sidebar"
					type="button"
					on:click={toggleSidebar}
					class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				>
					<span class="sr-only">Open sidebar</span>
					<i class="fa-solid fa-bars-staggered" />
				</button>
				<!--  -->
				<a href="/Dashboard" class="flex ml-2 md:mr-24">
					<div class="w-[4.5rem] mx-auto">
						<PaylnSvg />
					</div>
				</a>
			</div>
			<div class="flex items-center">
				<div class="flex items-center ml-3">
					<div>
						<button
							type="button"
							on:click={toggleImageOption}
							class="flex text-sm bg-[#223d5b] rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
							aria-expanded="false"
							data-dropdown-toggle="dropdown-user"
						>
							<span class="sr-only">Open user menu</span>
							<i class="fa-solid fa-circle-user text-[30px]" />
						</button>
					</div>
					<div
						class:hidden={!imageOptionSelected}
						class="hidden z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-5 transform translate-x-[1vw] mt-[25vh]"
						id="dropdown-user"
					>
						<div class="px-4 py-3" role="none">
							<p class="text-sm text-gray-900 dark:text-white" role="none">Neil Sims</p>
							<p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
								neil.sims@email.com
							</p>
						</div>
						<ul class="py-1" role="none">
							{#each ['Settings', 'Sign Out'] as item}
								<li>
									<a
										href="#"
										class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
										role="menuitem"
									>
										{item}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>

<aside
	class:transform-none={sideBar}
	id="logo-sidebar"
	class="fixed top-0 left-0 z-40 w-[fit-content] h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-[#223d5b] dark:border-gray-700"
	aria-label="Sidebar"
>
	<div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-[#223d5b]">
		<ul class="space-y-2 font-medium">
			<li>
				<a
					href="/dashboard"
					class="flex bg-gray-400 items-center p-2 text-[#000] rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700 group"
				>
					<i class="fa-solid fa-house-user" />
					<span class="ml-3">Dashboard</span>
				</a>
			</li>
			<li>
				<a
					href="/"
					class="flex items-center p-2 text-[#000] rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
				>
					<i class="fa-solid fa-right-from-bracket" />
					<span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
				</a>
			</li>
		</ul>
	</div>
</aside>
<!--  -->

<slot />
