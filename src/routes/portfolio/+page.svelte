<script lang="ts">
	import BusinessCard from '$lib/components/smart/BusinessCard.svelte';
</script>

<title>Moises Hidalgo : Portfolio</title>

<div class="view-wrapper">
	<div class="business-card-wrapper">
		<BusinessCard />
	</div>
</div>

<style lang="scss">
	.view-wrapper {
		div.business-card-wrapper {
      max-height: fit-content;
      max-width: fit-content;

			position: absolute;
      inset: 0;

      margin: auto;
		}
	}
</style>
