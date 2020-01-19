<script>
  import HeroTitle from './HeroTitle.svelte'
  import HeroAction from './HeroAction.svelte'
  import HeroNav from './HeroNav.svelte'
  import HeroNoise from './HeroNoise.svelte'
  import HeroBack from './HeroBack.svelte'
</script>

<style lang="scss">
  .hero-container {
    z-index: 20;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    background-color: $color-white;
    @include fit-full(fixed);
  }
  .hero-main {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .hero-screen {
    flex-grow: 1;
    margin: 2rem 0;
    position: relative;
    background-color: $color-snow;
    border-radius: $radius;
    @include center-flex;
  }
</style>

<div class="hero-container">
  <HeroNav />
  <div class="hero-screen">
    <HeroAction />
    <HeroNoise />
    <HeroBack />
  </div>
  <div class="hero-main">
    <HeroTitle />
  </div>
</div>
