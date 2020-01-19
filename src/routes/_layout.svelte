<script>
  import { onMount } from 'svelte'

  onMount(async () => {
    await import('what-input')
  })
</script>

<style lang="scss" global>
  @import 'styles/global.scss';
</style>

<slot />
