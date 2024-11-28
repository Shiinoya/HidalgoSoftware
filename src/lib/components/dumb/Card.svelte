<script lang="ts"></script>

<!--
@component

## Card
Card wrapper component.

### Features
feature_description

### Props
- prop_name: prop_description
-->

<div class="card-component">
	<div class="card-content">
		<slot />
	</div>
</div>

<style lang="scss">
	div.card-component {
		height: 250px;
		width: 450px;

		margin: 1rem;

		border-radius: 10px;
		background-color: var(--white-900);

    div.card-content {
      width: 100%;
      height: 100%;

      padding: 1rem;
    }
	}
</style>
