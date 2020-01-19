<script>
  import { isPlayerOpen } from '../../../store/player'
  import PlayerKeyboard from './PlayerKeyboard.svelte'
  import PlayerScreen from './PlayerScreen.svelte'
  import PlayerControl from './PlayerControl.svelte'
</script>

<style lang="scss">
  .player {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -10000;
    top: 0;
    left: 0;
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    display: flex;
    flex-direction: column;
    background-color: $color-black;
    will-change: opacity;
    &.isPlayerOpen {
      visibility: visible;
      opacity: 1;
      z-index: 10000;
      pointer-events: auto;
      transition: opacity 0.6s 1.9s linear, visibility 0s 1.9s;
    }
  }
</style>

{#if $isPlayerOpen}
  <PlayerKeyboard />
{/if}

<div class="player" class:isPlayerOpen={$isPlayerOpen}>
  <PlayerScreen />
  <PlayerControl />
</div>
