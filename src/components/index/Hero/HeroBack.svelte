<script>
  import { isPlayerOpen } from '../../../states/player'

  let scale = 1
  let backRef = null

  isPlayerOpen.subscribe(val => {
    if (typeof window === undefined) {
      return
    }

    if (val) {
      const w = backRef.clientWidth
      const h = backRef.clientHeight
      const scaleX = window.innerWidth / w
      const scaleY = window.innerHeight / h

      scale = Math.max(scaleX, scaleY) + 0.05
    } else {
      scale = 1
    }
  })
</script>

<style lang="scss">
  .hero-black {
    z-index: 3;
    opacity: 0;
    background-color: $color-black;
    pointer-events: none;
    border-radius: $radius;
    will-change: opacity, transform;
    @include fit-full;
    &.isPlayerOpen {
      opacity: 1;
      transition: opacity 0.6s linear, transform 2s $easeInCubic;
    }
  }
</style>

<div
  class="hero-black"
  class:isPlayerOpen={$isPlayerOpen}
  bind:this={backRef}
  style="transform: scale({scale})" />
