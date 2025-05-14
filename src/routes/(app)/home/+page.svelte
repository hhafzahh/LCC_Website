<script lang="ts">
	import Navbar from '$lib/components/common/Navbar.svelte';
	import Footer from '$lib/components/common/Footer.svelte';
	import Section from '$lib/components/common/Section.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import Incentives from '$lib/components/home/Incentives.svelte';
	import Sponsors from '$lib/components/home/Sponsors.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>SUTD LCC '25</title>
	<meta name="description" content="SUTD LCC '25" />
</svelte:head>

<div class="relative flex min-h-screen flex-col pt-28">
	<Navbar activePage="home" />
	<Hero />
	{#each data.sections as section, i}
		<Section
			imagePath={section.imagePath}
			imageAlt={section.imageAlt}
			title={section.title}
			subtitle={section.subtitle}
			content={section.content}
			contentOnRight={(i + 1) % 2 === 0}
			homepage
		/>
	{/each}
	<Incentives />
	<Sponsors />
	<Footer />
</div>
