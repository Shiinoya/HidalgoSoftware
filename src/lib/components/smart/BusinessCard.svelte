<script lang="ts">
	import Card from '../dumb/Card.svelte';
</script>

<!--
@component

## component_name
component_description

### Features
feature_description

### Props
- prop_name: prop_description
-->

<Card>
	<div class="business-card-content">
		<div class="contact-information">
			<h2>Moises Hidalgo</h2>
			<h4>Software Engineer</h4>
			<p>contact@hidalgosoftware.com</p>
			<p>(619) 357 0321</p>
		</div>
	</div></Card
>

<style lang="scss">
	div.business-card-content {
		color: var(--text-color-dark);

		div.contact-information {
      margin-top: 6rem;
      text-align: right;

			h2 {
				margin-bottom: 0.5em;
			}

			h4 {
				margin-top: 0.5em;
				margin-bottom: 0;
			}

			p {
				margin: 0.8em 0;
			}
		}
	}
</style>
