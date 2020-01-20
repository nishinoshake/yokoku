<script>
  export let title = ''
  export let isActive = false
  export let wrapWidth = 0

  let titleRef = null
  let titleWidth = 0
  let isLong = false

  $: animationDuration = isLong ? `${(7000 * titleWidth) / 100}ms` : '0s'

  $: {
    if (isActive || wrapWidth) {
      titleWidth = titleRef.clientWidth

      if (titleWidth > wrapWidth) {
        if (!isLong) {
          isLong = true
        }
      } else {
        if (isLong) {
          isLong = false
        }
      }
    }
  }
</script>

<style lang="scss">
  .player-control-text {
    line-height: 1;
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    align-items: center;
    font-size: 1.6rem;
    font-style: italic;
    letter-spacing: 0.14em;
    will-change: transform;
    @include fit-full;
    &.isLong {
      .player-control-text-inside {
        animation: ticker 100s 4.5s linear infinite;
        will-change: transform;
      }
    }
  }
  .player-control-text-link {
    display: flex;
    text-decoration: none;
    color: $color-gray;
    @include hover {
      color: $color-primary;
    }
  }
  .player-control-text-inside {
    padding: 0 0.8rem 0 1.6rem;
    @include min {
      padding: 0 2.2rem;
    }
  }

  @keyframes ticker {
    0% {
      transform: translate3d(0, 0, 0);
    }
    30%,
    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }
</style>

<span class=" player-control-text" class:isLong>
  <a
    href="https://www.google.co.jp/search?q={encodeURIComponent(title)}"
    target="_blank"
    rel="noopener"
    aria-label="Googleで{title}を検索する"
    tabindex={isActive ? '0' : '-1'}
    class="player-control-text-link">
    <span
      class="player-control-text-inside"
      style="animation-duration: {animationDuration}"
      bind:this={titleRef}>
      {title}
    </span>
    {#if isLong}
      <span
        class="player-control-text-inside"
        style="animation-duration: {animationDuration}">
        {title}
      </span>
    {/if}
  </a>
</span>
