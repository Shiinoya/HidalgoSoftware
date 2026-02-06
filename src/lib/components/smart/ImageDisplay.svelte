<script lang="ts">
  let { src, alt = 'Image', width = '420px' } = $props();
  let isOpen = $state(false);

  const openImage = () => {
    isOpen = true;
  };

  const closeImage = () => {
    isOpen = false;
  };
</script>

<!--
@component

## Image Display
Displays an image that expands on click, with a close button overlay.

### Props
- `src` (string): Source URL for the image.
- `alt` (string): Alt text for the image.
- `width` (string): Thumbnail width (e.g. `420px`, `60%`).
-->

<div class="image-display">
  <button class="thumbnail-button" type="button" onclick={openImage} style={`width: ${width};`}>
    <img {src} {alt} />
  </button>

  {#if isOpen}
    <div class="overlay" role="dialog" aria-modal="true">
      <button class="close-button" type="button" onclick={closeImage} aria-label="Close image">
        <span class="material-symbols-outlined">close</span>
      </button>
      <img class="expanded-image" {src} {alt} />
    </div>
  {/if}
</div>

<style lang="scss">
  div.image-display {
    display: inline-block;

    button.thumbnail-button {
      padding: 0;
      border: none;
      background: none;
      cursor: pointer;
    }

    button.thumbnail-button img {
      display: block;
      max-width: 100%;
      height: auto;
      border-radius: 8px;
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

    img.expanded-image {
      max-width: min(95vw, 1920px);
      max-height: 85vh;
      border-radius: 12px;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
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
  }
</style>
