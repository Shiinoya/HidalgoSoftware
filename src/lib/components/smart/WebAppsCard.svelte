<script lang="ts">
  import { browser } from '$app/environment';
  import BiggerPicture from 'bigger-picture';

  type WebApp = {
    name: string;
    type: string;
    company: string;
  };

  const webApps: WebApp[] = [
    {
      name: 'ActivForce',
      type: 'Dashboard',
      company: 'ActivBody'
    },
    {
      name: 'ActivElite',
      type: 'Dashboard',
      company: 'ActivBody'
    },
    {
      name: 'Account Management',
      type: 'UI Portal',
      company: 'ActivBody'
    }
  ];

  const enlargeImage = () => {
    if (browser) {
      // initialize
      let biggerPicture = BiggerPicture({
        target: document.body
      });

      // open (will be a child of the target element above)
      biggerPicture.open({
        items: [
          {
            img: '/examples/web-app/activforce/01_login.png',
            thumb: '/examples/web-app/activforce/01_login.png',
            alt: 'Example',
            height: 800,
            width: 800
            // if you're using the default intro animation
            // element: node
          }
        ]
      });
    }
  };
  
  // TODO : create a svelte component that houses the image when opened with bigger picture.
  // include close button

  // then do I need bigger picture at all?
</script>

<!--
@component

## Web Applications Card
Shows a list of web applications.

### Features
feature_description
-->

<div id="images">
  <img
    src="/examples/web-app/activforce/01_login.png"
    alt="ActivForce Login"
    width="500px"
    on:click={() => enlargeImage()}
  />
</div>

<div class="web-apps-card-wrapper">
  <h2>Web Applications</h2>

  <!-- // TODO : create grid for layout to include images -->
  <ul>
    {#each webApps as webApp}
      <li>Name: {webApp.name}</li>
      <li>Type: {webApp.type}</li>
      <li>Company: {webApp.company}</li>
      <br />
      <br />
    {/each}
  </ul>
</div>

<style lang="scss">
  div.web-apps-card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    ul {
      padding: 0;
      font-size: 1.1rem;
      font-weight: bold;

      li {
        padding: 0.5em;
        list-style: none;

        text-align: left;
      }
    }
  }
</style>
