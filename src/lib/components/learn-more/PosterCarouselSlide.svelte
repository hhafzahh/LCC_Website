<script lang="ts">
	import { scale } from 'svelte/transition';
	const { imagePath, title, groupName, index, selectedPosterIndex, onClose } = $props<{
		imagePath: string;
		title: string;
		groupName: string;
		index: number;
		selectedPosterIndex: number | null;
		onClose: () => void;
	}>();

	let selected = $derived(selectedPosterIndex === index);
	let loading = $state(false); // Fixed: Declared with $state
	let imageLoaded = $state(false); // Also adding $state here for consistency

	$effect(() => {
		if (selected) {
			loadImage();
		}
	});

	function stopPropagation(handler: () => void) {
		return (e: Event) => {
			e.stopPropagation();
			handler();
		};
	}

	const loadImage = () => {
		if (imageLoaded) {
			return;
		}

		const timeout = setTimeout(() => (loading = true), 100);

		const img = new Image();
		img.onload = () => {
			imageLoaded = true;
			clearTimeout(timeout);
			loading = false;
		};
		img.src = imagePath;
	};
</script>

<div
	class="embla__slide {selected ? 'selected' : ''}"
	onclick={() => !selected && loadImage()}
	onkeydown={(e) => e.key === 'Enter' && !selected && loadImage()}
	role="button"
	tabindex="0"
>
	<div class="block transition-transform duration-200">
		<div class="relative">
			<div class="flex flex-col">
				{#if !selected}
					<div class="w-full bg-white px-4 pt-8" aria-label="Click to develop the poster">
						{#if loading}
							<div class="w-full text-center">Loading...</div>
						{:else}
							<div class="flex aspect-square w-full items-center justify-center bg-gray-200">
								Click to develop the poster
							</div>
						{/if}
					</div>
				{:else}
					<button
						type="button"
						class="w-full bg-white px-4 pt-8"
						onclick={stopPropagation(onClose)}
						transition:scale={{ duration: 200 }}
					>
						<img src={imagePath} alt="Region for {title}" class="h-fit w-full object-cover" />
					</button>
				{/if}
				<div class="bg-white p-4 shadow-xl">
					<p class="text-start font-mono text-base font-bold md:text-lg lg:text-xl">{title}</p>
					<p class="text-start font-mono text-base font-bold md:text-lg lg:text-xl">
						Group {groupName}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.embla__slide {
		padding-left: var(--slide-spacing);
		padding-right: var(--slide-spacing);
		--slide-spacing: 8vw;
	}
	.embla__slide.selected {
		--slide-spacing: 0;
	}
</style>
