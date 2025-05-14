<script lang="ts">
	import RegionCarouselSlide from '$lib/components/learn-more/RegionCarouselSlide.svelte';
	import Navbar from '$lib/components/common/Navbar.svelte';
	import Footer from '$lib/components/common/Footer.svelte';
	import SectionTitle from '$lib/components/common/SectionTitle.svelte';
	import Section from '$lib/components/common/Section.svelte';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	emblaCarouselSvelte.globalOptions = { loop: true };
</script>

<svelte:head>
	<title>Learn more about LCC '25</title>
	<meta name="description" content="Learn more about LCC '25" />
</svelte:head>

<div class="relative flex min-h-screen flex-col pt-28">
	<Navbar activePage="learn-more" />
	<SectionTitle title="Regions" />
	<div class="embla flex-grow">
		<div class="embla__viewport pb-6 md:pb-8" use:emblaCarouselSvelte>
			<div
				class="embla__container grid grid-flow-col [grid-auto-columns:80%] xs:[grid-auto-columns:75%] sm:[grid-auto-columns:70%] md:[grid-auto-columns:65%] lg:[grid-auto-columns:50%]"
			>
				{#each Object.entries(data.regions) as [image, slideInfo]}
					<RegionCarouselSlide {image} title={slideInfo.title} link={slideInfo.link} />
				{/each}
			</div>
		</div>
	</div>
	<SectionTitle title="What’s In Store For You" />
	{#each data.sections as section, i}
		<Section
			id={section.id}
			imagePath={section.imagePath}
			imageAlt={section.imageAlt}
			title={section.title}
			subtitle={section.subtitle}
			contentOnRight={i % 2 === 0}
		/>
	{/each}
	<Footer />
</div>

<style>
	.embla {
		overflow: hidden;
		width: 100%;
		margin: auto;
		--slide-spacing: 0.75rem;
	}

	@media (min-width: 448px) {
		.embla {
			--slide-spacing: 1rem;
		}
	}

	@media (min-width: 640px) {
		.embla {
			--slide-spacing: 1.5rem;
		}
	}

	@media (min-width: 768px) {
		.embla {
			--slide-spacing: 2rem;
		}
	}

	@media (min-width: 1024px) {
		.embla {
			--slide-spacing: 3rem;
		}
	}

	.embla__container {
		margin-left: calc(var(--slide-spacing) * -1);
	}
</style>
