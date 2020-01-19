<script>
  import { trailers, currentIndex, isPlayerOpen } from '../../../states/player'
  import PlayerControlTitleRow from './PlayerControlTitleRow.svelte'

  let titleWidth = 0

  $: listY =
    $currentIndex === null ? 0 : `${(-100 * $currentIndex) / $trailers.length}%`
</script>

<style lang="scss">
  .player-control-title {
    flex-grow: 1;
    position: relative;
    overflow: hidden;
    &:after {
      content: '';
      width: 1.6rem;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      pointer-events: none;
      background: linear-gradient(
        to right,
        rgba($color-black, 0),
        rgba($color-black, 1)
      );
    }
  }
  .player-control-title-list {
    transition: transform 1.1s $easeInOutQuart;
    will-change: transform;
  }
  .player-control-title-item {
    width: 100%;
    height: 5.5rem;
    position: relative;
    @include min {
      height: 4.5rem;
    }
  }
</style>

<div
  id="player-title"
  class="player-control-title"
  bind:clientWidth={titleWidth}>
  <ul
    class="player-control-title-list"
    style="transform: translate3d(0, {listY}, 0)">
    {#each $trailers as trailer, index}
      <li class="player-control-title-item">
        <PlayerControlTitleRow
          title={trailer.title}
          isActive={index === $currentIndex}
          wrapWidth={$isPlayerOpen ? titleWidth : 0} />
      </li>
    {/each}
  </ul>
</div>
