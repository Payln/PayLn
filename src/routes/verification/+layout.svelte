<script>
	import PaylnSvg from '$lib/PaylnSVG.svelte';
</script>

<nav class="fixed top-0 z-50 w-full bg-[#223d5b] border-b border-gray-700">
	<div class="px-3 py-3 lg:px-5 lg:pl-3">
		<div class="flex items-center justify-between">
			<div class="flex items-center justify-start">
				<a href="/" class="flex ml-2 md:mr-24">
					<div class="w-[4.5rem] mx-auto">
						<PaylnSvg />
					</div>
				</a>
			</div>
		</div>
	</div>
</nav>
<slot />
