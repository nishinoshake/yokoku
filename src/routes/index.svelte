<script context="module">
  export async function preload() {
    const { createClient } = require('contentful')

    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })

    try {
      const res = await client.getEntries({
        content_type: 'curerntTrailerList',
        limit: 1
      })

      if (res && res.items && res.items.length === 1) {
        const entries = res.items[0].fields.currentTrailer.map(
          ({ fields }) => ({ title: fields.title, trailerId: fields.trailerId })
        )

        return { entries }
      } else {
        console.error('取得した予告のデータが不正です')

        this.error(500, '取得した予告のデータが不正です')
      }
    } catch (err) {
      console.error(err)

      this.error(500, err.message)
    }
  }
</script>

<script>
  import { isAboutOpen, closeAbout } from '../states/app.js'
  import { isPlayerOpen } from '../states/player.js'
  import { recieveTrailers } from '../states/player.js'
  import SEO from '../components/common/SEO.svelte'
  import Hero from '../components/index/Hero/Hero.svelte'
  import About from '../components/index/About.svelte'
  import Player from '../components/index/Player/Player.svelte'

  export let entries

  const handleClickContainer = () => {
    if ($isAboutOpen) {
      closeAbout()
    }
  }

  recieveTrailers(entries)
</script>

<style lang="scss">
  .container {
    position: relative;
    z-index: 0;
    height: 100%;
  }
</style>

<svelte:head>
  <SEO />
</svelte:head>

<div class="container" on:click={() => handleClickContainer()}>
  <Hero />
  <About />
  <Player />
</div>
