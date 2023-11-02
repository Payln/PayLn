<script>
	// @ts-nocheck
	import '../app.css';
	import { onMount, afterUpdate } from 'svelte';
	import PaylnSvgcl from '$lib/PaylnSVGCL.svelte';
	import { pageLoading } from '$lib/store.js';
	import { page } from '$app/stores';
	import { metaDescriptions } from '$lib/index.js';

	let pageTitle = metaDescriptions.landingPage.title;
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
			pageTitle = metaDescriptions[current_url].title || capitalizeFirstLetter(current_url);
		} else {
			pageTitle = metaDescriptions.landingPage.title;
		}
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
	{#if metaDescriptions[current_url] && metaDescriptions[current_url].description}
		<meta name="description" content={metaDescriptions[current_url].description} />
	{:else}
		<meta name="description" content="PayLN; Pay with Lighting and Bitcoin" />
	{/if}
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
