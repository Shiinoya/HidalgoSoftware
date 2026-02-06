<script lang="ts">
  import ImageDisplay from './ImageDisplay.svelte';

  type Props = {
    heroSrc: string;
    gallerySources: string[];
  };

  let { heroSrc, gallerySources }: Props = $props();
  let isOpen = $state(false);

  const openGallery = () => {
    isOpen = true;
  };

  const closeGallery = () => {
    isOpen = false;
  };
</script>

<!--
@component

## Hero & Gallery Display
Shows a hero image with a button and a grid gallery beneath.

### Props
- `heroSrc` (string): Source URL for the hero image.
- `gallerySources` (string[]): Source URLs for the gallery images.
-->

<div class="hero-gallery-wrapper">
  <div class="hero">
    <ImageDisplay src={heroSrc} alt="Hero image" width="100%" />
    <button class="view-more-button" type="button" onclick={openGallery}>View Gallery</button>
  </div>

  {#if isOpen}
    <div class="overlay" role="dialog" aria-modal="true">
      <button class="close-button" type="button" onclick={closeGallery} aria-label="Close gallery">
        <span class="material-symbols-outlined">close</span>
      </button>
      <div class="gallery-grid">
        {#each gallerySources as gallerySrc, index}
          <ImageDisplay
            src={gallerySrc}
            alt={`Gallery image ${index + 1}`}
            width="100%"
            height="300px"
          />
        {/each}
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  div.hero-gallery-wrapper {
    width: 100%;
    max-width: 450px;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  div.hero {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  button.view-more-button {
    align-self: center;
    width: 100%;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 10px;
    background-color: var(--orange-900);
    color: var(--white-900);
    font-weight: 600;
    cursor: pointer;
  }

  div.gallery-grid {
    width: min(90vw, 1400px);
    max-height: 85vh;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
    padding: 1.5rem;
    background-color: #000;
    border-radius: 16px;
    overflow: auto;
  }

  @media (max-width: 600px) {
    div.gallery-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  div.overlay {
    position: fixed;
    inset: 0;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.8);
  }

  button.close-button {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    padding: 0.4rem;
    border: none;
    border-radius: 999px;
    background-color: rgba(255, 255, 255, 0.85);
    color: #111;

    cursor: pointer;
  }

  button.close-button span {
    font-size: 1.5rem;
    line-height: 1;
  }
</style>
