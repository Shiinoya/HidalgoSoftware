<script lang="ts">
  import Card from '../dumb/Card.svelte';
</script>

<!--
@component

## Business Card
Component to display contact information and an image.
-->

<Card>
  <div class="business-card-content">
    <img src="headshot.jpg" alt="my face" />

    <div class="contact-information">
      <h2>Moises Hidalgo</h2>
      <h4>Software Engineer</h4>
      <p>contact@hidalgosoftware.com</p>
      <p>(619) 357 0321</p>
    </div>
  </div>
</Card>

<style lang="scss">
  div.business-card-content {
    height: 250px;
    width: 450px;

    display: grid;
    grid-template-columns: 40% auto;
    grid-template-rows: max-content;
    align-items: center;
    overflow: hidden;

    color: var(--text-color-dark);

    img {
      width: 100%;
      clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    }

    div.contact-information {
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
