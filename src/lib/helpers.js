export function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export const isMouseOrTouch = () => {
  return ['mouse', 'touch'].includes(document.documentElement.dataset.whatinput)
}
