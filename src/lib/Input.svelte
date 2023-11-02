<!-- Input.svelte -->
<script>
	// @ts-nocheck

	export let type = 'text';
	export let value = '';
	export let placeholder = '';
	export let required = false;
	export let style = '';
	export let name = '';
	export let id = '';

	function handleChange(event) {
		value = event.target.value;
	}
</script>

<input {name} {id} {type} {value} {placeholder} {required} on:input={handleChange} class={style} />
