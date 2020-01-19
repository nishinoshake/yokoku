<script>
  import { isMouseOrTouch } from '../../../lib/helpers'
  import { isAboutOpen, openAbout, closeAbout } from '../../../states/app'
  import { isPlayerOpen } from '../../../states/player'
  import IconAbout from '../../common/icons/about.svelte'

  const handleClickNav = () => {
    if ($isAboutOpen) {
      closeAbout()

      if (!isMouseOrTouch()) {
        document.getElementById('nav-button').focus()
      }
    } else {
      openAbout()
    }
  }
</script>

<style lang="scss">
  .hero-nav-button {
    width: 14rem;
    display: block;
    will-change: opacity, transform;
    &.isPlayerOpen {
      opacity: 0;
      transition: opacity 0.4s linear;
    }
    @include hover {
      background-color: $color-dark;
      svg {
        fill: $color-white;
      }
    }
  }
  .hero-nav-button-inside {
    width: 100%;
    position: relative;
    display: block;
    &:before {
      content: '';
      display: block;
      padding-top: 14.0625%;
    }
  }
</style>

<button
  id="nav-button"
  class="hero-nav-button"
  class:isPlayerOpen={$isPlayerOpen}
  aria-label="サイトの説明を見る"
  on:click|stopPropagation={handleClickNav}>
  <span class="hero-nav-button-inside">
    <IconAbout />
  </span>
</button>
