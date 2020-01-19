<script>
  import IconLogo from '../../common/icons/logo.svelte'
  import { isPlayerOpen } from '../../../states/player'
</script>

<style lang="scss">
  .hero-title {
    width: 14rem;
    will-change: opacity;
    &.isPlayerOpen {
      opacity: 0;
      transition: opacity 0.4s linear;
    }
  }
  .hero-title-inside {
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

<h1 class="hero-title" class:isPlayerOpen={$isPlayerOpen}>
  <span class="hero-title-inside">
    <IconLogo />
  </span>
</h1>
