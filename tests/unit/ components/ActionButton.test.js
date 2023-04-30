import { screen, render } from '@testing-library/vue'
import { expect } from 'vitest'
import ActionButton from '@/components/ActionButton.vue'

describe('ActionButton', () => {
  it('render text', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    })
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('applies one of severals styles to button', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    })
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass('primary')
  })
})
