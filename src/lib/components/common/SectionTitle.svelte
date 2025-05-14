<script lang="ts">
	export let title: string;
	export let subtitle: string | undefined = undefined;
	export let id: string | undefined = undefined;
</script>

<div {id} class="px-8 pb-2">
	{#if subtitle}
		<p class="text-2xl font-bold text-brand-orange md:text-3xl">{subtitle}</p>
	{/if}
	<h1 class="pt-1 text-start text-4xl font-black text-dark-blue md:text-5xl">{title}</h1>
</div>

<style>
	p {
		font-family: 'Figtree', sans-serif;
	}
</style>
