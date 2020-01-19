import { get, writable, derived } from 'svelte/store'

// state
export const isPlayerOpen = writable(false)
export const trailers = writable([])
export const currentIndex = writable(null)

// getter
export const trailerIds = derived(trailers, $trailers =>
  $trailers.map(t => t.trailerId)
)
export const isLastIndex = derived(
  [currentIndex, trailers],
  ([$currentIndex, $trailers]) => {
    return $currentIndex === $trailers.length - 1
  }
)

// mutation
export const openPlayer = () => isPlayerOpen.set(true)
export const closePlayer = () => isPlayerOpen.set(false)
export const recieveTrailers = entries => trailers.set(entries)
export const setCurrentIndex = index => currentIndex.set(index)
export const toPrev = () => currentIndex.update(val => (val > 0 ? val - 1 : 0))
export const toNext = () => {
  currentIndex.update(val => {
    const lastIndex = get(trailers).length - 1

    if (val >= lastIndex) {
      closePlayer()
      return val
    }

    return val + 1
  })
}
