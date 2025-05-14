<script lang="ts">
	export let href: string;
	export let isActive: boolean;
	export let label: string;
</script>

<a
	href={isActive ? undefined : href}
	class="text-center {isActive
		? 'pointer-events-none font-semibold text-brand-orange'
		: 'text-white hover:text-blue-400'} text-sm duration-200 md:text-base"
>
	{label}
</a>
