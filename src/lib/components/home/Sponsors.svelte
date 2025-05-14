<script lang="ts">
	import SectionTitle from '$lib/components/common/SectionTitle.svelte';

	const sponsor_tiers = [
		{
			tier: 'Diamond',
			gradient: 'from-cyan-400 to-sky-500',
			sponsors: [
				{
					name: 'LionsForge',
					logo: 'home/sponsors/lionsforge-logo.png',
					link: 'https://lionsforge.com.sg'
				}
			]
		},
		{
			tier: 'Silver',
			gradient: 'from-gray-400 to-slate-500',
			sponsors: [
				{
					name: 'Cytron Technologies',
					logo: 'home/sponsors/cytron-logo.png',
					link: 'https://sg.cytron.io'
				}
			]
		}
	];
</script>

<div class="my-8 flex flex-col">
	<SectionTitle title="Sponsors" />
	{#each sponsor_tiers as { tier, gradient, sponsors }}
		<div class="flex flex-col items-center px-8 pb-8">
			<div
				class="whitespace-nowrap bg-gradient-to-br {gradient} bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
			>
				{tier}
			</div>
			{#each sponsors as sponsor}
				<div class="w-48 pb-2 pt-2 sm:w-64">
					<!-- <div class="bg-gradient-to-br {gradient} rounded-full p-3"> -->
					<a href={sponsor.link}
						><img src={sponsor.logo} alt="{sponsor.name} logo" class="h-full w-full" /></a
					>
					<!-- </div> -->
				</div>
			{/each}
		</div>
	{/each}
</div>
