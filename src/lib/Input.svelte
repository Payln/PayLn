<!-- Input.svelte -->
<script>
	// @ts-nocheck

	export let type = 'text';
	export let value = '';
	export let placeholder = '';
	export let required = false;
	export let style = '';

	function handleChange(event) {
		value = event.target.value;
	}
</script>

<input {type} {value} {placeholder} {required} on:input={handleChange} class={style} />
