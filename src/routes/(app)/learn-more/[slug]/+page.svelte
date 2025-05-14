<script lang="ts">
	import Navbar from '$lib/components/common/Navbar.svelte';
	import Footer from '$lib/components/common/Footer.svelte';
	import SectionTitle from '$lib/components/common/SectionTitle.svelte';
	import Section from '$lib/components/common/Section.svelte';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaCarouselType } from 'embla-carousel';
	import type { PageData } from './$types';
	export let data: PageData;
	function getVotingStatus() {
		const votingStartTime = new Date('February 12, 2025 15:30:00 GMT+08:00');
		const votingEndTime = new Date('February 12, 2025 17:15:00 GMT+08:00');
		const currentTime = new Date();

		if (currentTime < votingStartTime) {
			return 'before';
		} else if (currentTime >= votingStartTime && currentTime <= votingEndTime) {
			return 'during';
		} else {
			return 'after';
		}
	}
	// import PosterCarouselSlide from '$lib/components/learn-more/PosterCarouselSlide.svelte';
	// emblaCarouselSvelte.globalOptions = { loop: true, skipSnaps: true };
	// let selectedPosterIndex: number | null = null;
	// function handleClick(index: number) {
	// 	selectedPosterIndex = index;
	// }
	// function handleClose() {
	// 	selectedPosterIndex = null;
	// }
	// let emblaApi: EmblaCarouselType;
	// function logSelectedScrollSnap(emblaApi: EmblaCarouselType): void {
	// 	console.log(emblaApi.selectedScrollSnap());
	// }
	// function onInit(event: CustomEvent<EmblaCarouselType>): void {
	// 	emblaApi = event.detail;
	// 	emblaApi.on('slidesInView', logSelectedScrollSnap);
	// }
</script>

<svelte:head>
	<title>Learn more about LCC '25</title>
	<meta name="description" content="Learn more about LCC '25" />
</svelte:head>

<div class="relative flex min-h-screen flex-col pt-28">
	<Navbar />
	<Section title={data.title} subtitle={data.subtitle} content={data.content} contentOnRight />
	<!-- {#if data.posters.length > 0}
		<SectionTitle title="Posters" />
	{/if}
	<div class="embla flex-grow">
		<div class="embla__viewport pb-6 md:pb-8" use:emblaCarouselSvelte onemblaInit={onInit}>
			{#if data.posters.length > 2}
				<div
					class="embla__container grid grid-flow-col {selectedPosterIndex !== null
						? '[grid-auto-columns:100%]'
						: '[grid-auto-columns:80%] xs:[grid-auto-columns:75%] sm:[grid-auto-columns:70%] md:[grid-auto-columns:65%] lg:[grid-auto-columns:50%]'}"
				>
					{#each data.posters as poster, i}
						<div
							class="cursor-pointer text-left"
							onclick={() => handleClick(i)}
							onkeydown={(e) => e.key === 'Enter' && handleClick(i)}
							role="button"
							tabindex="0"
						>
							<PosterCarouselSlide
								imagePath={poster.imagePath}
								title={poster.title}
								groupName={poster.groupName}
								index={i}
								{selectedPosterIndex}
								onClose={handleClose}
							/>
						</div>
					{/each}
				</div>
			{:else}
				<div class="embla__container grid grid-flow-row justify-items-center sm:grid-flow-col">
					{#each data.posters as poster, i}
						<PosterCarouselSlide
							imagePath={poster.imagePath}
							title={poster.title}
							groupName={poster.groupName}
							index={i}
							{selectedPosterIndex}
							onClose={handleClose}
						/>
					{/each}
				</div>
			{/if}
		</div>
	</div> -->
	{#if getVotingStatus() === 'before'}
		<div>
			<p class="mb-8 text-center text-base font-bold sm:text-lg lg:text-xl">
				Vote for your favorite poster when the exhibition starts!
			</p>
		</div>
	{:else if getVotingStatus() === 'during'}
		<div>
			<p class="mb-8 text-center text-base font-bold sm:text-lg lg:text-xl">
				Vote for your favorite poster at <a
					class="font-bold text-brand-orange underline hover:decoration-4"
					href="https://forms.office.com/r/S23aM8iC0E">https://forms.office.com/r/S23aM8iC0E</a
				> now!
			</p>
		</div>
	{:else}
		<div>
			<p class="mb-8 text-center text-base font-bold sm:text-lg lg:text-xl">
				Voting has ended. Thank you for participating!
			</p>
		</div>
	{/if}
	<div class="flex-grow"></div>
	<Footer />
</div>

<style>
	p {
		font-family: 'Figtree', sans-serif;
	}
	.embla {
		width: 100%;
		overflow: hidden;
		margin: auto;
	}
	.embla__viewport {
		overflow: hidden;
	}
</style>
