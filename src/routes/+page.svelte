<script>
	import { fade, fly } from 'svelte/transition';
	import IntersectionObserver from 'svelte-intersection-observer';
	import PaylnSvgc from '$lib/PaylnSVGC.svelte';
	import { onMount } from 'svelte';

	let isLoading = true;

	onMount(() => {
		isLoading = false;
	});

	let openNav = false;
	const toggleNavBar = () => {
		openNav = !openNav;
	};

	/**
	 * @type {HTMLDivElement}
	 */
	let element;
	/**
	 * @type {any}
	 */
	let intersecting;

	const blocks = [
		{
			icon: 'fa-solid fa-bolt',
			title: 'Instant payment with lightning',
			description: ''
		},
		{
			icon: 'fa-solid fa-wallet',
			title: 'Wallet dashboard',
			description: ''
		},
		{
			icon: 'fa-solid fa-money-bill-1-wave',
			title: 'Zero fees',
			description: 'Customers incur zero fees on payment.'
		},
		{
			icon: 'fa-solid fa-money-bill-transfer',
			title: 'Convert bitcoin & lightning to local currency',
			description: ''
		},
		{
			icon: 'fa-solid fa-hand-holding-dollar',
			title: 'Pay suppliers',
			description: '(pay international invoice)'
		},
		{
			icon: 'fa-solid fa-comments',
			title: '24/7 human customer support',
			description: ''
		}
	];
</script>

<svelte:head>
	<title>PayLn</title>
</svelte:head>

<!-- Nav Bar -->
<nav class="bg-white border-gray-200 dark:bg-gray-900">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="login" class="flex items-center w-[4.5rem]">
			<PaylnSvgc />
		</a>
		<div class="flex md:order-2">
			<button
				type="button"
				class="text-[#223d5b] bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-1"
				>Log In</button
			>
			<button
				type="button"
				class="text-white bg-[#223d5b] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
				>Sign Up</button
			>
			<button
				data-collapse-toggle="navbar-cta"
				on:click={toggleNavBar}
				type="button"
				class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-cta"
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>
				<i class="fa-solid fa-bars" />
			</button>
		</div>
		<div
			class:hidden={!openNav}
			class="items-center justify-between w-full md:flex md:w-auto md:order-1"
			id="navbar-cta"
		>
			<ul
				class="flex w-[95%] mx-auto flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 absolute md:relative"
			>
				{#each ['Learn', 'Pitch', 'About', 'Team'] as item}
					<li>
						<a
							href="#"
							class="block py-2 pl-3 pr-4 text-black md:p-0 hover:bg-slate-400"
							aria-current="page">{item}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
<!--  -->
<div class="mx-auto md:w-[75%] w-2/3">
	<h1
		class="mb-6 mt-4 text-4xl font-medium leading-none tracking-tight text-[#223d5b] md:text-4xl lg:text-4xl dark:text-white"
	>
		Revolutionizing bitcoin & lightning <br /> payments for african business
	</h1>
	<p class="mb-12 text-lg font-normal text-[#00000060] lg:text-xl">
		Start accepting bitcoin & lightning on your websites with PayLN.
	</p>
	<!--  -->
	<div class="grid grid-cols-2 lg:grid-cols-3 gap-[5rem] text-center mx-4 md:w-1/2 max-w-fit">
		{#each blocks as block}
			<p class="text-xl border-2 bg-white border-gray-200 rounded-lg shadow p-2">
				<span class="pr-3 text-[#223d5b]">
					<i class={block.icon} />
				</span><br />
				{block.title}
				{#if block.description}
					<span class="mb-6 text-sm font-normal text-[#00000060] lg:text-md">
						{block.description}
					</span>
				{/if}
			</p>
		{/each}
		<p class="col-span-2 lg:col-span-3 text-xl border-2 bg-white border-gray-200 rounded-lg shadow">
			<span class="pr-3 text-[#223d5b]">
				<i class="fa-solid fa-hourglass-half" />
			</span><br />
			Zero down time
		</p>
	</div>
	<!--  -->
	<IntersectionObserver {element} bind:intersecting>
		<div class="pt-[100vh]">
			<h5 class="mb-2 text-3xl font-bold tracking-tight underline underline-offset-8">
				How it works
			</h5>
			<div bind:this={element}>
				{#if intersecting}
					<div in:fly={{ y: 200, duration: 3000 }} out:fade>
						<p>
							<span class="pr-3 text-[#223d5b]">
								<i class="fa-solid fa-1" />
							</span>
							Sign up for Payln and get an api key
						</p>
					</div>
					<div in:fly={{ y: 200, duration: 4000 }} out:fade>
						<p>
							<span class="pr-3 text-[#223d5b]">
								<i class="fa-solid fa-2" />
							</span>
							Add Payln front end widget to your script tag on your website
						</p>
					</div>
				{/if}
			</div>
		</div></IntersectionObserver
	>
	<div class="p-[30vh]" />
</div>
