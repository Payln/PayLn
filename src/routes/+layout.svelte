<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import PaylnSvgcl from '$lib/PaylnSVGCL.svelte';

	let isLoading = true;

	onMount(() => {
		isLoading = false;
	});

	let openNav = false;
	const toggleNavBar = () => {
		openNav = !openNav;
	};
</script>

<!--  -->
<div class="dark dark:bg-[#223d5b]" />

{#if isLoading}
	<div class="mx-auto my-[10vh] w-[15rem]">
		<PaylnSvgcl />
	</div>
{:else}
	<slot />
{/if}
