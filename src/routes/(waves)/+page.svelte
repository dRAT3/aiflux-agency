<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import Features from '$lib/components/organisms/Features.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import Engaging from '$lib/components/organisms/Engaging.svelte';
	import type { Feature, BlogPost } from '$lib/utils/types';

	export let data: {
		features: Feature[];
		posts: BlogPost[];
	};

	let { features, posts } = data;
</script>

<div class="container">
	<Hero />
	<About />
	<Features {features} />
	<Engaging />
	{#if posts && posts.length > 0}
		<RecentPosts {posts} />
	{/if}

</div>
