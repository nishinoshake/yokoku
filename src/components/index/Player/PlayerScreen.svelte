<script>
  import { onMount, tick } from 'svelte'
  import {
    trailers,
    trailerIds,
    currentIndex,
    setCurrentIndex,
    isPlayerOpen,
    closePlayer
  } from '../../../store/player'

  let player = null
  let iframeRef = null
  let intervalId = null
  let canPlay = false
  let shouldPlay = false
  let isPlaying = false

  $: isLastIndex = $currentIndex === $trailers.length - 1

  onMount(() => {
    createPlayer($trailerIds[0])
  })

  currentIndex.subscribe(async index => {
    await tick()

    if ($isPlayerOpen && index !== player.getPlaylistIndex()) {
      player.playVideoAt(index)
    }
  })

  isPlayerOpen.subscribe(async val => {
    await tick()

    if (val) {
      play()
    } else {
      if ($currentIndex !== null) {
        stop()
      }
    }
  })

  function createPlayer(trailerId) {
    window.onYouTubeIframeAPIReady = () => {
      player = new YT.Player(iframeRef, {
        width: '1280',
        height: '720',
        videoId: trailerId,
        playerVars: {
          controls: 2,
          playsinline: 1
        },
        events: {
          onReady: () => {
            canPlay = true

            if (shouldPlay) {
              play()
            }
          },
          onStateChange: async ({ data }) => {
            switch (data) {
              case YT.PlayerState.ENDED:
                setCurrentIndex(player.getPlaylistIndex())

                await tick()

                if (isLastIndex && player.getCurrentTime() > 10) {
                  closePlayer()
                }
                break
              case YT.PlayerState.PLAYING:
                if (!isPlaying) {
                  isPlaying = true
                }
                break
            }
          }
        }
      })
    }

    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'

    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  }

  function play(index = 0) {
    if (!$isPlayerOpen) {
      return
    }

    // プレイヤーの準備ができてなかったら完了を待つ
    if (!canPlay) {
      shouldPlay = true
      return
    }

    if (shouldPlay) {
      shouldPlay = false
    }

    setCurrentIndex(index)

    player.loadPlaylist($trailerIds, index)

    intervalId = setInterval(() => {
      if (player && player.getPlaylistIndex) {
        const index = player.getPlaylistIndex()

        if (index !== $currentIndex) {
          setCurrentIndex(index)
        }
      }
    }, 100)
  }

  function stop() {
    if (intervalId) {
      clearInterval(intervalId)
    }

    if (shouldPlay) {
      shouldPlay = false
    }

    setCurrentIndex(null)

    if (canPlay) {
      player.stopVideo()
    }

    isPlaying = false
  }
</script>

<style lang="scss">
  .player-screen {
    flex-grow: 1;
    position: relative;
    :global(iframe) {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 1;
      transition: opacity 0.6s linear;
      will-change: opacity;
    }
    &.isPlaying {
      :global(iframe) {
        opacity: 1;
      }
    }
  }
</style>

<div class="player-screen" class:isPlaying>
  <div bind:this={iframeRef} />
</div>
