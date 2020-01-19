<script>
  import { isPlayerOpen } from '../../../states/player'
  import PlayerControlTitle from './PlayerControlTitle.svelte'
  import PlayerControlAction from './PlayerControlAction.svelte'
</script>

<style lang="scss">
  .player-control {
    height: 5.5rem;
    display: flex;
    background-color: $color-black;
    @include min {
      height: 4.5rem;
    }
  }
</style>

<div class="player" class:isPlayerOpen={$isPlayerOpen}>
  <div class="player-control">
    <PlayerControlTitle />
    <PlayerControlAction />
  </div>
</div>
