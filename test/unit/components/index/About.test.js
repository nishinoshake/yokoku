import { render } from '@testing-library/svelte'
import About from '../../../../src/components/index/About.svelte'

describe('About', () => {
  test('テキストある', () => {
    const { container } = render(About)

    expect(container).toHaveTextContent('映画館の近くに住みたい')
  })
})