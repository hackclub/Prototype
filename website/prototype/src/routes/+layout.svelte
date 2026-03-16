<script lang="ts">
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Prototype | Hack Club</title>
	<meta name="Description" content="Explore the projects from Prototype, a 2025 AI hardware hackathon by Hack Club and AMD where teens built ambitious AI-powered projects with robot arms, AI PCs, and over 1,000 lbs of hardware."/>
</svelte:head>

{@render children()}
