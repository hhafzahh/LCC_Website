<script>
	const incentives = [
		{
			icon: '/home/ice-cream.svg',
			title: 'Food',
			description: 'No one learns effectively on an empty stomach!',
			link: '/learn-more#food'
		},
		{
			icon: '/home/present.svg',
			title: 'Gifts',
			description: 'Take home the gift of knowledge and more!',
			link: '/learn-more#door-gifts'
		},
		{
			icon: '/home/trophy.svg',
			title: 'Prizes',
			description: 'Prizes await for participants and presenters!',
			link: '/learn-more#lucky-draw'
		}
	];
</script>

<div class="grid grid-cols-1 py-1 sm:grid-cols-3">
	<div class="col-span-1 self-center sm:col-span-3">
		<img src="/home/blob-top.svg" alt="top of blob background" class="max-h-24 w-full" />
	</div>
	<div class="col-span-1 self-center bg-light-gray sm:col-span-3">
		<h1
			class="px-8 pb-4 text-start text-4xl font-black text-light-orange sm:max-w-full md:text-5xl"
		>
			Take <span class="italic text-brand-orange">More</span> Than Just Knowledge
		</h1>
	</div>
	{#each incentives as { icon, title, description, link }, i}
		<div
			class="{i === 0
				? 'col-start-1'
				: ''} flex flex-col items-center bg-light-gray pb-4 text-center"
		>
			<img src={icon} alt={title} class="mb-4 size-32" />
			<h3 class="">
				<a
					class="px-8 text-2xl font-bold text-light-orange underline hover:text-brand-orange hover:decoration-4 md:text-3xl"
					href={link}>{title}</a
				>
			</h3>
			<p class="px-8 text-lg text-light-orange md:text-xl">{description}</p>
		</div>
	{/each}
	<div class="col-span-1 self-center sm:col-span-3">
		<img src="/home/blob-bottom.svg" alt="bottom of blob background" class="max-h-32 w-full" />
	</div>
</div>

<style>
	div h3,
	div p {
		font-family: 'Figtree', sans-serif;
	}
</style>
