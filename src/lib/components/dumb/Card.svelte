<script lang="ts"></script>

<!--
@component

## Card
Card wrapper component to use for consistent styling.
-->

<div class="card-component">
  <div class="card-content">
    <slot />
  </div>
</div>

<style lang="scss">
  div.card-component {
    margin: 1rem;

    border-radius: 10px;
    background-color: light-dark(var(--white-900), var(--charcoal-900));

    div.card-content {
      width: 100%;
      height: 100%;

      padding: 1rem;
    }
  }
</style>
