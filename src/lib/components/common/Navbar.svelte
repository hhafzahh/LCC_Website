<script lang="ts">
	import NavLink from '$lib/components/common/NavLink.svelte';
	export let activePage: string | undefined = undefined;

	const navLinks = [
		{ href: '/home', label: 'HOME', id: 'home' },
		{ href: '/learn-more', label: 'LEARN MORE', id: 'learn-more' },
		{ href: '/about', label: 'ABOUT', id: 'about' },
		{ href: '/countdown', label: 'COUNTDOWN', id: 'countdown' }
	];
</script>

<header
	class="fixed top-0 z-20 mb-8 flex w-full items-center gap-8 bg-dark-blue p-6 xs:justify-between"
>
	<div class="flex items-center gap-2 xs:gap-3 sm:gap-4">
		<a href="/">
			<img src="/lcc-logo.svg" alt="LCC Logo" class="w-8" />
		</a>
		<span class="hidden text-2xl font-bold text-brand-orange xs:block lg:hidden">LCC '25</span>
		<span class="hidden text-2xl font-bold text-brand-orange lg:block"
			>LEARNING CELEBERATION CARNIVAL '25</span
		>
	</div>
	<nav class="flex items-center gap-2 sm:gap-8">
		{#each navLinks as { href, label, id }}
			<NavLink {href} isActive={activePage === id} {label} />
		{/each}
	</nav>
</header>
