import { get } from 'svelte/store'
import { isPlayerOpen, openPlayer } from '../../../src/store/player'

describe('store/player', () => {
  describe('openPlayer', () => {
    test('最初は非表示の状態から', () => {
      expect(get(isPlayerOpen)).toBe(false)
    })
    test('表示できる', () => {
      openPlayer()
      expect(get(isPlayerOpen)).toBe(true)
    })
  })
})