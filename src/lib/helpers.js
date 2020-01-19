export function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function shuffleArray(arr) {
  return arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])
}

export function range(length) {
  return Array.from({ length }, (v, k) => k)
}

export const withStop = (e, callback) => {
  e.stopPropagation()
  callback()
}

export const isMouseOrTouch = () => {
  return ['mouse', 'touch'].includes(document.documentElement.dataset.whatinput)
}
