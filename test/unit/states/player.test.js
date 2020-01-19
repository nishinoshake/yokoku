import { get } from 'svelte/store'
import { isPlayerOpen, openPlayer } from '../../../src/states/player'

describe('stores/player', () => {
  describe('openPlayer', () => {
    test('初期は非表示', () => {
      expect(get(isPlayerOpen)).toBe(false)
    })
    test('表示できる', () => {
      openPlayer()
      expect(get(isPlayerOpen)).toBe(true)
    })
  })
})