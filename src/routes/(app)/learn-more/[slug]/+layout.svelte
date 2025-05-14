<script lang="ts">
	import '../../../../app.css';
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<div class="app">
	<main>
		<!-- <slot></slot> -->
		{@render children()}
	</main>
</div>

<style>
</style>
