<script lang="ts">
	import BusinessCard from '$lib/components/smart/BusinessCard.svelte';
</script>

<title>Moises Hidalgo : Portfolio</title>

<div class="view-wrapper">
	<h1>Moises Hidalgo</h1>

	<span class="business-card-wrapper">
		<BusinessCard />
	</span>
</div>

<style lang="scss">
	.view-wrapper {
		text-align: center;

		display: flex;
		flex-direction: column;
    align-items: center;

    span.business-card-wrapper {
      margin-top: 10rem;
    }
	}
</style>
