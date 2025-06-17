<script lang="ts">
  import Countdown from './Countdown.svelte';
</script>

<title>Board Game Timer</title>

<div class="view-wrapper">
  <h1>Board Game Timer</h1>
  <Countdown minutes={1} />
</div>

<style lang="scss">
  div.view-wrapper {
    // TODO : make this response
    height: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      text-align: center;
      line-height: 1.2em;
    }
  }
</style>
