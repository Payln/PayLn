<script>
	import { fade, fly } from 'svelte/transition';
	import IntersectionObserver from 'svelte-intersection-observer';
	import PaylnSvgc from '$lib/PaylnSVGC.svelte';
	import { onMount } from 'svelte';
	import Checkout from '../images/Checkout.png';

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
			icon: 'fa-solid fa-hourglass-half',
			title: 'Zero down time',
			description: ''
		}
	];

	const works = [
		{
			icon: 'fa-solid fa-1',
			text: 'Sign up for Payln and get an API key',
			fly: { y: 200, duration: 3000 },
			fade: true
		},
		{
			icon: 'fa-solid fa-2',
			text: 'Add Payln front end widget to your <script/> tag on your website',
			fly: { y: 200, duration: 4000 },
			fade: true
		},
		{
			icon: 'fa-solid fa-3',
			text: 'When the customer checkout, we take over. The customer is given the option to pay with Lightning or BTC',
			fly: { y: 200, duration: 5000 },
			fade: true
		},
		{
			icon: 'fa-solid fa-4',
			text: 'Customer pays and we verify the payment instantly',
			fly: { y: 200, duration: 6000 },
			fade: true
		}
	];
</script>

<svelte:head>
	<title>PayLn</title>
</svelte:head>

<!-- Nav Bar -->
<nav class="bg-[#dedede] border-gray-200 dark:bg-gray-900">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="login" class="flex items-center w-[4.5rem]">
			<PaylnSvgc />
		</a>
		<div class="flex md:order-2">
			<a href="login">
				<button
					type="button"
					class="text-[#223d5b] bg-[#dedede] hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-1"
				>
					Log In
				</button>
			</a>
			<a href="signup">
				<button
					type="button"
					class="text-white bg-[#223d5b] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
				>
					Sign Up
				</button>
			</a>
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
				class="flex w-[95%] mx-auto flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#dedede] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 absolute md:relative"
			>
				{#each ['Learn', 'Pitch', 'About', 'Team'] as item}
					<li>
						<a
							href="#"
							class="block py-2 pl-3 pr-4 text-black md:p-0 hover:bg-slate-400 md:hover:bg-transparent"
							aria-current="page">{item}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
<!--  -->
<div class="mx-auto md:w-[75%] w-[90%]">
	<h1
		class="mb-6 mt-4 text-4xl font-medium leading-none tracking-tight text-[#223d5b] md:text-4xl lg:text-4xl dark:text-white"
	>
		Revolutionizing bitcoin & lightning <br /> payments for african business
	</h1>
	<p class="mb-12 text-lg font-normal text-[#00000060] lg:text-xl">
		Start accepting bitcoin & lightning on your websites with PayLN.
	</p>
</div>
<!--  -->
<div class="grid mx-auto w-[50%] lg:w-screen grid-flow-row lg:grid-flow-col">
	<div class="grid grid-cols-2 lg:grid-cols-3 gap-[2rem] md:gap-[6rem] text-center mx-auto md:mx-4">
		{#each blocks as block}
			<p
				class="text-xl border-2 bg-[#dedede] border-gray-200 rounded-lg shadow p-2 md:p-4 w-[10rem]"
			>
				<span class="pr-3 text-[#223d5b]">
					<i class={block.icon} />
				</span><br />
				{block.title}
				{#if block.description}
					<br />
					<span class="mb-6 text-sm font-normal text-[#00000060] lg:text-md">
						{block.description}
					</span>
				{/if}
			</p>
		{/each}
	</div>
	<div class="lg:w-[30vw] w-[50vw] my-10 mx-auto lg:pl-24 lg:my-auto">
		<img src={Checkout} alt="" />
	</div>
</div>
<!--  -->
<div class="mt-16 bg-[#223d5b] block w-[75%] mx-auto px-16 pb-16 text-white border border-gray-200">
	<div class="flex felx-row">
		<h5 class="mb-2 text-2xl font-bold my-12">E-Commerce</h5>
	</div>
	<!--  -->
	<h5 class="mb-2 text-5xl font-bold my-12">The best way to accept payments</h5>
	<p class="text-gray-400 my-6">
		Accept payments with BTC & Lightning from anywhere in the world, with PayLN Commerce.
	</p>
	<!--  -->
	<div class="pt-[4rem] grid grid-cols-2 gap-6">
		<p><i class="fa-solid fa-clock pr-2" />Get fully set-up in minutes, not days</p>
		<p>
			<i class="fa-solid fa-shield-halved pr-2" />Eliminate fraud — No chargebacks or Identity theft
		</p>
		<p><i class="fa-solid fa-globe pr-2" />Tap into a global customer base</p>
		<p><i class="fa-brands fa-bitcoin pr-2" />No hidden fees ever</p>
	</div>
</div>
<!--  -->
<div class="mx-auto md:w-[75%] w-2/3 pt-24 font-mono">
	<IntersectionObserver {element} bind:intersecting>
		<div bind:this={element}>
			{#if intersecting}
				<h5
					in:fly={{ y: 200, duration: 2000 }}
					out:fade
					class="text-[#223d5b] mb-2 text-3xl font-bold tracking-tight underline underline-offset-8"
				>
					How it works
				</h5>
			{/if}

			{#each works as work}
				{#if intersecting}
					<div in:fly={work.fly} out:fade>
						<p class="my-6">
							<span class="pr-3 text-[#223d5b]">
								<i class={work.icon} />
							</span>
							{work.text}
						</p>
					</div>
				{/if}
			{/each}
		</div>
	</IntersectionObserver>
</div>
<div class="p-[10vh]" />

<a
	href="signup"
	class="bg-[#223d5b] mx-auto block md:w-[80%] w-full p-6 text-white border border-gray-200 md:rounded-lg shadow text-center"
>
	<h5 class="mb-2 text-2xl font-bold">
		Join the future of Payments.<br /> Start accepting payments with Bitcoin & Lightning
	</h5>
</a>

<!--  -->
<footer class="bg-[#dedede] shadow md:shadow-none">
	<div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
		<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
			>© 2023 <a href="/" class="hover:underline">PayLN</a>. All Rights Reserved.
		</span>
		<ul
			class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
		>
			{#each ['About', 'Privacy', 'Policy', 'Licensing', 'Contact'] as item}
				<li>
					<a href="#" class="mr-4 hover:underline md:mr-6">{item}</a>
				</li>
			{/each}
		</ul>
	</div>
</footer>
