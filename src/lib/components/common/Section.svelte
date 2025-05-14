<script lang="ts">
	import SectionTitle from '$lib/components/common/SectionTitle.svelte';
	import Timeline from '$lib/components/home/Timeline.svelte';
	export let imagePath: string | undefined = undefined;
	export let imageAlt: string | undefined = undefined;
	export let title: string;
	export let subtitle: string;
	export let content: string | undefined = undefined;
	export let contentOnRight: boolean = true;
	export let homepage: boolean = false;
	export let id: string | undefined = undefined;
</script>

<div {id} class="mb-4 grid scroll-mt-24 grid-cols-1 gap-2 sm:grid-cols-2">
	{#if imagePath}
		<div
			class="order-1 {homepage ? '' : 'px-8'} pb-4 md:pb-0 {contentOnRight
				? 'justify-self-start'
				: 'justify-self-end sm:order-2'}"
		>
			{#if homepage}
				<div class="hidden h-auto w-full max-w-2xl pt-16 sm:block lg:pt-0">
					<img src={imagePath} alt={imageAlt} class="h-full w-full" />
				</div>
			{:else}
				<div
					class="relative aspect-[3/2] overflow-hidden rounded-md sm:aspect-square sm:rounded-lg md:rounded-xl lg:rounded-2xl"
				>
					<img src={imagePath} alt={imageAlt} class="h-full w-full object-cover object-center" />
				</div>
			{/if}
		</div>
	{:else}
		<SectionTitle {title} {subtitle} />
	{/if}
	<div class="flex flex-col {contentOnRight ? 'order-1 sm:order-2' : 'order-1'}">
		{#if homepage}
			<SectionTitle {title} {subtitle} />
			{#if title === 'Event Details'}
				<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
					Get ready to take off for SUTD’s Learning Celebration Carnival (LCC)!
				</p>
				<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
					SUTD seniors have come together to share their learning experiences in this one day
					interactive event. Look forward to informative Presentation Booths and engaging Activity
					Booths sharing their experiences from different programmes in SUTD, including Overseas
					Trips, Student Organisations, UROP, and Sustainability.
				</p>
				<p class="relative px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
					Come on down to <span class="relative inline-block">
						<span class="absolute inset-x-0 bottom-0 h-4 bg-yellow-300"></span>
						<span class="relative">Campus Centre</span>
					</span>
					on
					<span class="relative inline-block">
						<span class="absolute inset-x-0 bottom-0 h-4 bg-yellow-300"></span>
						<span class="relative">12 Feb 2025</span>
					</span>
					from
					<span class="relative inline-block">
						<span class="absolute inset-x-0 bottom-0 h-4 bg-yellow-300"></span>
						<span class="relative">3-6pm</span>
					</span> to join in on the adventure and broaden your horizons!
				</p>
				<div class="flex content-center">
					<div class="w-full max-w-3xl">
						<img src="home/bike-path.svg" alt="bike path" />
					</div>
				</div>
			{:else if title === 'Timeline'}
				<Timeline />
				<div class="flex content-center justify-end">
					<div class="hidden w-full max-w-2xl lg:block">
						<img src="home/flight-path.svg" alt="flight path" />
					</div>
				</div>
			{/if}
		{:else if imagePath}
			<SectionTitle {title} {subtitle} />
			{#if subtitle === 'Presentation Booths'}
				<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
					Visit the Presentation Booths to find out about the learning experiences of SUTDents in
					Overseas Experiences, UROP, StuOrgs and Sustainability Trips! You can vote for your
					favourite booth to enter the lucky draw too!
				</p>
			{:else if id === 'activity-booths'}
				<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
					<span class="font-bold">[NEW for 2025!]</span> Head to the Activity Booths to participate in
					fun and engaging activities that showcases learning!
				</p>
			{:else if subtitle === 'Door Gifts'}
				<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
					In line with the Travel theme for LCC 2025, we have provided two useful door gifts for
					people who take part in our activities – a Travel Bag and a Custom LCC Luggage Tag! See
					below for how to obtain a door gift.
				</p>
			{:else if subtitle === 'Event Passport'}
				<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
					Visit Activity Booths to get stamps on your passports! Once you have obtained the required
					number of stamps, head to the redemption booth to obtain your Door Gift!
				</p>
			{:else if subtitle === 'Refreshments Await'}
				<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
					Refreshments (and ice cream 👀) are available to keep you refreshed and energised. Be sure
					to mark your calendars!
				</p>
			{:else if subtitle === 'Lucky Draw'}
				<p class="px-8 pt-4 text-start text-lg text-dark-blue sm:text-xl lg:text-2xl">
					Over $6000 worth of lucky draw prizes up for grabs! Thank you to our sponsors LionsForge
					and Cytron for kindly providing the prizes!
				</p>
				<p class="px-8 pt-4 text-start text-lg text-dark-blue sm:text-xl lg:text-2xl">
					<span class="font-bold">1st prize: </span> LionsForge CRAFTLASER MK2 Laser Cutter inc.
					training session! <span class="font-bold">&nbsp(worth $5499++)</span>
				</p>
				<p class="px-8 pt-4 text-start text-lg text-dark-blue sm:text-xl lg:text-2xl">
					<span class="font-bold">2nd prize: </span> Raspberry Pi 400 Computer Kit + EDU PICO:
					Project & Innovation Kit for Raspberry Pi Pico W + EDU:BIT Training & Project Kit for
					micro:bit<span class="font-bold">&nbsp(worth $331)</span>
				</p>
				<p class="px-8 pt-4 text-start text-lg text-dark-blue sm:text-xl lg:text-2xl">
					<span class="font-bold">3rd prize: </span> Raspberry Pi 400 Computer Kit<span
						class="font-bold"
					>
						&nbsp(worth $175)</span
					>
				</p>
				<p class="px-8 pt-4 text-start text-lg text-dark-blue sm:text-xl lg:text-2xl">
					<span class="font-bold">4th prize: </span> EDU PICO: Project & Innovation Kit for
					Raspberry Pi Pico W<span class="font-bold">&nbsp(worth $78)</span>
				</p>
				<p class="px-8 pt-4 text-start text-lg text-dark-blue sm:text-xl lg:text-2xl">
					<span class="font-bold">5th prize: </span> EDU:BIT Training & Project Kit for micro:bit<span
						class="font-bold"
					>
						&nbsp(worth $78)</span
					>
				</p>
				<p class="px-8 pt-4 text-start text-lg font-bold text-dark-blue sm:text-xl lg:text-2xl">
					Lucky Draw Game – An interactive game you can play to win lucky draw chances!
				</p>
				<ol class="px-8 pt-4 text-start text-lg text-dark-blue sm:text-xl lg:text-2xl">
					<li>1. Visit all the presentation booths and find your favourite one!</li>
					<li>
						2. Vote for your favourite booth at the link: <a
							class="text-brand-orange hover:decoration-4"
							href="https://forms.office.com/r/S23aM8iC0E">https://forms.office.com/r/S23aM8iC0E</a
						>
						(Voting and Lucky Draw Game ends at 17:15 so be sure to do so by then!)
					</li>
					<li>3. Check your email for a password to enter the Lucky Draw Game</li>
					<li>4. Head to the Lucky Draw Game area and play the game to win chances!</li>
					<li>
						5. Stay till the Closing Ceremony at 5.30 pm where we will announce the winners for the
						lucky draw!
					</li>
				</ol>
			{:else if subtitle === 'On-Stage Presentations'}
				<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
					Don't miss out on the on-stage presentations by our students! They will be sharing their
					past experiences like overseas trips and more!
				</p>
			{:else if title === 'Lunchtime Performances'}
				<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
					Before boarding, enjoy a curated selection of festive music during Lunchtime Performances,
					performed by Chinese Orchestra! Head to the Campus Centre from 2 to 2.45 pm and immerse
					yourself in the musical journey. Don't miss out on this unique collab between LTP x LCC!
				</p>
			{/if}
		{:else if title === 'Sustainability Trips'}
			<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
				Experience hands-on learning beyond the classroom through real-world sustainability
				challenges. Learn about SUTD's first Sustainability Trip in Spring 2024 to Kyoto, Japan!
			</p>
			<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
				Gain insights from a country with mature sustainability practices, exploring evolving
				policies, cultural traditions, and success stories.
			</p>
			<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
				Prepare to become a technically grounded innovator capable of contributing to a sustainable
				future.
			</p>
		{:else if title === 'Student Organisations'}
			<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
				Co-curricular activities, also known as Fifth Row activities in SUTD are an important aspect
				of the holistic education of our students.
			</p>
			<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
				Student Organisations are an important component of Fifth Row. There are over 80 student
				groups on campus, and they are grouped into 5 clusters (Arts, Community, Sports, Culture,
				Makers).
			</p>
			<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
				Check out some of their booths at LCC!
			</p>
		{:else if title === 'Overseas Experiences'}
			<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
				SUTD offers overseas opportunities in partnership with other international institutions, to
				enrich students' learning experiences with global perspectives and cross-cultural
				understanding. They include:
			</p>
			<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
				1. GEXP: Take your learning beyond the classroom with inbound or outbound exchange
				programmes, and meet students from across the globe.
			</p>
			<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
				2. Summer/Winter Programmes: Explore short-term overseas experiences offered by partner
				universities, and transform your Summer or Winter vacation into a learning escapade.
			</p>
			<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
				3. GEO: This 1-week overseas immersion programme lets Freshmore students apply what they've
				learned at partner universities in Asia.
			</p>
		{:else if title === 'Undergraduate Research Opportunities Programme'}
			<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
				Research is integral to education at SUTD. The Undergraduate Research Opportunities
				Programme (UROP) helps to foster a spirit of learning and inquiry among undergraduates, by
				engaging faculty and students on cutting edge and innovative research projects.
			</p>
			<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
				Check out some of their booths at LCC!
			</p>
		{:else if title === 'Design AI Tech and Design Innovation'}
			<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
				Check out what Design AI Tech and Design Innovation (DATech) programmes SUTD has to offer!
				They include:
			</p>
			<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
				1. Design-Innovator-in-Residence (DIIR): Learn how they spur micro-innovations and
				effectuate an entrepreneurial mindset among SUTD students.
			</p>
			<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
				2. Baby Shark Fund: Embark on a unique SUTD experience that gives your innovation spirit an
				extra boost. The Baby Shark Fund is a platform for experimentation, validation, building,
				and deploying your ideas to tackle real-world challenges.
			</p>
			<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
				3. Master of Science in Design and Artificial Intelligence for Enterprise: Be equipped to
				apply powerful AI-based analytical tools to real-world applications as design innovators who
				will lead digital transformation with AI at enterprises in various industry sectors.
			</p>
		{/if}
	</div>
</div>

<style>
	p {
		font-family: var(--font-body), sans-serif;
	}
</style>
