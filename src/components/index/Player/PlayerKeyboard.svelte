<script>
  import { tick, onMount, onDestroy } from 'svelte'
  import { sleep, isMouseOrTouch } from '../../../lib/helpers.js'
  import { closePlayer, toPrev, toNext } from '../../../states/player'

  onMount(async () => {
    await tick()

    if (!isMouseOrTouch()) {
      await sleep(2000)
      document.querySelector('#player-title a[tabindex="0"]').focus()
    }
  })

  onDestroy(async () => {
    await tick()

    if (!isMouseOrTouch()) {
      document.getElementById('player-button').focus()
    }
  })

  function handleKeydown({ key }) {
    switch (key) {
      case 'ArrowLeft': {
        return toPrev()
      }
      case 'ArrowRight': {
        return toNext()
      }
      case 'Backspace':
      case 'Delete':
      case 'Escape': {
        return closePlayer()
      }
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />
