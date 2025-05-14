<script>
	const events = [
		{
			time: '14:00',
			title: 'Lunchtime Performances',
			details: ['Check them out too!', 'LTP x LCC'],
			duration: '45min'
		},
		{
			time: '15:00',
			title: 'Opening Address',
			details: 'by SUTD Acting Provost Prof Lim Seh Chun',
			duration: '15min'
		},
		{
			time: '15:30',
			title: 'Exhibition & Carnival',
			details: [
				'Presentation Booths',
				'On-stage Presentations',
				' • Kyoto Sustainability Trip (15:30 - 15:45)',
				' • LegoMRI (16:00 - 16:15)',
				'Activity Booths',
				'Door Gifts',
				'Poster Voting & Lucky Draw Game (ends at 17:15)'
			],
			duration: '2h'
		},
		{
			time: '17:30',
			title: 'Award Presentation & Lucky Draw',
			details: 'by SUTD Associate Provost (Education) Prof Ashraf Kassim',
			duration: '20min'
		},
		{
			time: '17:55',
			title: 'Closing Address',
			details: 'by Prof Ashraf',
			duration: '5min'
		}
	];
</script>

<div class="timeline-grid px-8 pt-4">
	{#each events as event}
		<div class="flex flex-col items-center">
			<div class="text-2xl font-bold md:text-3xl">{event.time}</div>
			<div class="text-lg text-gray-500 md:text-xl">({event.duration})</div>
		</div>
		<div class="flex h-full flex-none flex-col items-center">
			<div
				class="size-8 rounded-full {event.title === 'Lunchtime Performances'
					? 'bg-blue-500'
					: 'bg-brand-orange'}"
			></div>
			<div class={event.title === 'Closing Address' ? '' : 'w-1 flex-1 bg-gray-300'}></div>
		</div>
		<div class="flex flex-grow flex-col pb-4">
			<div class="text-2xl font-bold md:text-3xl">{event.title}</div>
			<div class="pt-1 text-lg text-dark-blue md:text-xl">
				{#if Array.isArray(event.details)}
					{#each event.details as detail}
						{detail}<br />
					{/each}
				{:else}
					{event.details}
				{/if}
			</div>
		</div>
	{/each}
</div>

<style>
	.timeline-grid {
		display: grid;
		grid-template-columns: auto auto 1fr;
		column-gap: 1rem;
		row-gap: 0;
	}
</style>
