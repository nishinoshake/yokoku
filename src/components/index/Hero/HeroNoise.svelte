<script>
  import { onMount } from 'svelte'
  import imagesLoaded from 'imagesloaded'

  let isLoaded = false
  let noiseRef = null

  onMount(() => {
    imagesLoaded(noiseRef, { background: true }, d => {
      isLoaded = true
    })
  })
</script>

<style lang="scss">
  .hero-noise {
    opacity: 0;
    background: url(/images/noise_white.gif) center center repeat;
    background-size: 128px auto;
    transition: opacity 2.5s linear;
    border-radius: $radius;
    @include fit-full;
    &.isLoaded {
      opacity: 1;
    }
  }
</style>

<div class="hero-noise" class:isLoaded bind:this={noiseRef} />
