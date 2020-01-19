<script>
  import { isAboutOpen } from '../../states/app'
  import IconClose from '../common/icons/close.svelte'
</script>

<style lang="scss">
  .about {
    position: fixed;
    top: 6.6rem;
    left: 0;
    z-index: 110;
    overflow: hidden;
    display: flex;
    visibility: hidden;
    opacity: 0;
    padding: 1.4rem 2rem 2.4rem 4.2rem;
    font-style: italic;
    background-color: $color-white;
    border-radius: 0 0 $radius 0;
    &.isAboutOpen {
      visibility: visible;
      opacity: 1;
    }
    li + li {
      margin-top: 0.3em;
    }
  }
  .about-inside {
    position: relative;
    font-size: 1.2rem;
    line-height: 1.8;
    letter-spacing: 0.14em;
    @include min {
      font-size: 1.1rem;
    }
  }
  .about-block {
    &:nth-of-type(n + 2) {
      margin-top: 1.2rem;
    }
  }
  .about-text {
    white-space: nowrap;
    &:nth-of-type(n + 2) {
      margin-top: 1.2rem;
    }
  }
  .about-link {
    border-bottom: 0.8px solid $color-dark;
    @include min {
      border-bottom: 1px solid $color-dark;
    }
    @include hover {
      color: $color-white;
      background-color: $color-dark;
    }
  }
  .about-close {
    position: relative;
    width: 2.8rem;
    height: calc(2.8rem * 6);
    margin: 0 0 0 1.5rem;
    @include min {
      width: 2.65rem;
      height: calc(2.65rem * 6);
      margin: -0.1rem 0 0 1.5rem;
    }
  }
</style>

<div class="about" class:isAboutOpen={$isAboutOpen}>
  <div class="about-inside">
    <section class="about-block">
      <p class="about-text">
        映画の予告を観られるサイトです。
        <br />
        アクセス状況を把握するために、
        <br />
        Google Analyticsを使用してます。
        <br />
        オプトアウトの方法などは
        <a
          href="https://support.google.com/analytics/topic/2919631"
          target="_blank"
          rel="noopener"
          class="about-link">
          こちら
        </a>
        から。
      </p>
    </section>
    <section class="about-block">
      <ul>
        <li>
          <a
            href="https://houga.cc"
            target="_blank"
            rel="noopener"
            class="about-link"
            on:click|stopPropagation>
            邦画の予告を、朝まで
          </a>
        </li>
        <li>
          <a
            href="https://not-far-from-home.cc"
            target="_blank"
            rel="noopener"
            class="about-link"
            on:click|stopPropagation>
            映画館の近くに住みたい
          </a>
        </li>
        <li>
          <a
            href="mailto:lawson.and.7.11@gmail.com"
            class="about-link"
            on:click|stopPropagation>
            lawson.and.7.11@gmail.com
          </a>
        </li>
      </ul>
    </section>
  </div>
  <div class="about-close">
    <IconClose />
  </div>
</div>
