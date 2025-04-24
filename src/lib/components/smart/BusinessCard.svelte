<script lang="ts">
  import Card from '../dumb/Card.svelte';
</script>

<!--
@component

## Business Card
Component to display contact information and an image.
-->

<div class="business-card-wrapper">
  <Card>
    <div class="business-card-content">
      <img src="headshot.jpg" alt="my face" />

      <div class="contact-information">
        <h1>Moises Hidalgo</h1>
        <h3>Software Engineer | Web Developer</h3>
        <p>contact-card@hidalgosoftware.com</p>
        <p>(619) 357 0321</p>
      </div>
    </div>
  </Card>
</div>

<style lang="scss">
  div.business-card-wrapper {
    max-width: 450px;

    div.business-card-content {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 0.5em;

      color: light-dark(var(--charcoal-900), var(--white-900));

      img {
        width: 50%;
        clip-path: circle();
        // TODO : adjust positioning of photo
      }

      div.contact-information {
        text-align: center;

        h4 {
          margin-bottom: 0;
        }

        p {
          margin: 1em 0;

          font-weight: bold;
        }
      }
    }
  }
</style>
