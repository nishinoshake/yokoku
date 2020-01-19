<script>
  import { openPlayer } from '../../../states/player'
  import IconVolume from '../../common/icons/volume.svelte'
</script>

<style lang="scss">
  .hero-action {
    position: relative;
    :global(> svg) {
      width: 14rem;
      height: 14 * (36 / 256) * 1rem;
      position: absolute;
      z-index: 1;
      top: calc(100% + 2rem);
      left: calc(50% - (14 / 2) * 1rem);
    }
  }
  .hero-action-button {
    width: 8rem;
    height: 8rem;
    position: relative;
    z-index: 2;
    padding-left: 1rem;
    overflow: hidden;
    border: 0.2rem solid $color-modest;
    border-radius: 50%;
    transform: translate3d(0, 0, 0);
    @include center-flex;
    &:before {
      content: '';
      opacity: 0;
      background: url(/images/noise_black.gif) center center repeat;
      background-size: 128px auto;
      @include fit-full;
    }
    &:after {
      content: '';
      width: 0;
      height: 0;
      display: block;
      border-style: solid;
      position: relative;
      border-width: 1.9rem 0 1.9rem 2.8rem;
      border-color: transparent transparent transparent $color-modest;
      transform: translate3d(0, 0, 0);
    }
    @include hover {
      border: none;
      &:before {
        opacity: 1;
      }
      &:after {
        border-color: transparent transparent transparent $color-white;
      }
    }
  }
</style>

<div class="hero-action">
  <button
    type="button"
    id="player-button"
    aria-label="予告を再生する"
    class="hero-action-button"
    on:click={openPlayer} />
  <IconVolume />
</div>
