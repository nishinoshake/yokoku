<script>
  import { closePlayer, toPrev, toNext } from '../../../store/player'
</script>

<style lang="scss">
  .player-control-action {
    display: flex;
  }
  .player-control-action-item {
    width: 5.5rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @include min {
      width: 4.5rem;
    }
  }
  .player-control-action-button {
    width: 100%;
    height: 100%;
    position: relative;
    color: $color-gray;
    @include center-flex;
    @include hover {
      background-color: $color-dark;
    }
    &.isPrev,
    &.isNext {
      &::before {
        content: '';
        width: 1.3rem;
        height: 1.3rem;
        position: absolute;
        top: 50%;
        left: 50%;
        border-top: 1.4px solid currentColor;
        border-right: 1.4px solid currentColor;
        @include min {
          width: 1.2rem;
          height: 1.2rem;
          border-top-width: 2px;
          border-right-width: 2px;
        }
      }
    }
    &.isPrev:before {
      transform: translate(-28%, -50%) rotate(-135deg);
    }
    &.isNext:before {
      transform: translate(-75%, -50%) rotate(45deg);
    }
    &.isClose {
      &:before,
      &:after {
        content: '';
        width: 2.3rem;
        height: 1.4px;
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: currentColor;
        @include min {
          width: 2.2rem;
          height: 2px;
        }
      }
      &:before {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
</style>

<ul class="player-control-action">
  <li class="player-control-action-item">
    <button
      class="player-control-action-button isPrev"
      aria-label="前の動画を再生する"
      on:click={toPrev} />
  </li>
  <li class="player-control-action-item">
    <button
      class="player-control-action-button isNext"
      aria-label="次の動画を再生する"
      on:click={toNext} />
  </li>
  <li class="player-control-action-item">
    <button
      class="player-control-action-button isClose"
      aria-label="プレイヤーを閉じる"
      on:click={closePlayer} />
  </li>
</ul>
