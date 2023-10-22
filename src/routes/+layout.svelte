<script>
	// @ts-nocheck

	import '../app.css';
	import { onMount, afterUpdate } from 'svelte';
	import PaylnSvgcl from '$lib/PaylnSVGCL.svelte';
	import { pageLoading } from '$lib/store.js';
	import { page } from '$app/stores';

	let pageTitle = 'PayLN';
	let current_url = $page.url.href.split('/').pop();
	let isLoading;
	const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

	pageLoading.subscribe((value) => {
		isLoading = value;
	});

	onMount(() => {
		pageLoading.set(false);
	});

	afterUpdate(() => {
		current_url = $page.url.href.split('/').pop();
		if (current_url != '') {
			pageTitle = capitalizeFirstLetter(current_url);
		}
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<!--  -->
<div class="dark dark:bg-[#223d5b]" />

{#if isLoading}
	<div class="mx-auto mt-[30vh] w-[15rem]">
		<PaylnSvgcl />
	</div>
{:else}
	<slot />
{/if}
