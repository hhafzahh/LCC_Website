<script lang="ts">
	import Navbar from '$lib/components/common/Navbar.svelte';
	import Footer from '$lib/components/common/Footer.svelte';
	import SectionTitle from '$lib/components/common/SectionTitle.svelte';
</script>

<svelte:head>
	<title>Floor Plan for LCC '25</title>
	<meta name="description" content="Floor Plan for LCC '25" />
</svelte:head>

<div class="relative flex min-h-screen flex-col pt-24">
	<Navbar activePage="about" />
	<div id="about-lcc" class="py-8">
		<SectionTitle title="About LCC" />
		<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
			The Learning Celebration Carnival (LCC) is an annual event in SUTD with a long history,
			organised by ROOT in collaboration with the Office of Education, for SUTDents. SUTD students
			who are in their second year and above come together to share their learning experiences to
			juniors in this one-day interactive event. During LCC, seniors will share their experiences
			from different programmes in SUTD, including Overseas Trips, Student Organisations,
			Undergraduate Research Opportunities Programme (UROP), and Sustainability Trips.
		</p>
		<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
			From its humble beginnings as a small showcase event, LCC has evolved into a fun and engaging
			carnival event, complete with its own theme. It offers students a journey through learning and
			exploration.
		</p>
		<p class="px-8 pt-4 text-justify text-lg text-dark-blue sm:text-xl lg:text-2xl">
			For LCC 2025, we went with the theme of “Travel”. Our tagline for LCC 2025, "Borderless
			Learning, Unbridled Passion, Infinite Opportunities" and our theme encompass the idea that
			learning is limitless, extending beyond SUTD and our textbooks to include experiences outside
			the classroom and within a global context. We also hope that our students will have the
			passion to apply what they have learnt and trailblaze a better world by design.
		</p>
	</div>
	<!-- <div id="floor-plan" class="flex flex-grow justify-center py-8"> -->
	<SectionTitle title="Floor Plan" />
	<div id="floor-plan" class="flex flex-grow justify-center py-8">
		<img
			src="learn-more/LCC Floor Plan Map.svg"
			alt="LCC '25 Floor Plan"
			class="px-4 md:w-5/6 lg:w-4/6"
		/>
	</div>
	<Footer />
</div>

<style>
	p {
		font-family: 'Figtree', sans-serif;
	}
</style>
