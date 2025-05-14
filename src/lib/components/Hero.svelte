<script>
	import Header from './Header.svelte';
	import SectionWrapper from './SectionWrapper.svelte';
</script>

<SectionWrapper>
	<br />
	<br />
	<div
		class="mx-auto flex max-w-[1400px] flex-1 flex-col items-center justify-between gap-10 pb-10 md:flex-row md:pb-14"
	>
		<div class="dropShadow flex-1">
			<h2 class="mb-4 text-5xl font-extrabold text-dark-blue sm:text-2xl md:text-7xl lg:text-8xl">
				LEARNING CELEBRATION CARNIVAL 2025
			</h2>
			<h4 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
				<span class="font-caladea font-light italic text-orange-500"> Learning </span>
				<span class="font-figtree font-extralight"> beyond borders, </span><br />
				<span class="font-caladea font-light italic text-orange-500"> Passion </span>
				<span class="font-figtree font-extralight"> beyond expectations </span>
			</h4>

			<br />
			<button
				type="button"
				class="button mb-2 me-2 rounded-full bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
			>
				Sign up now
			</button>
		</div>
		<div class="flex-1 text-left">
			<img
				src="assets/study-abroad-pana.svg"
				alt="Hero Image"
				class="m:w-full h-auto w-full sm:max-w-none"
			/>
		</div>
	</div>
</SectionWrapper>
