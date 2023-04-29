import { describe, it, expect } from 'vitest'
import { evenOrOdd, multiply } from '@/playgound'

describe('evenOrOdd', () => {
  describe('when number is even', () => {
    it('indicates the number is even', () => {
      expect(evenOrOdd(4)).toBe('even')
    })
  })

  describe('when number is odd', () => {
    it('indicates the number is odd', () => {
      expect(evenOrOdd(3)).toBe('odd')
    })
  })
})

describe('multiply', () => {
  it('multiply two number', () => {
    expect(multiply(2, 3)).toBe(6)
  })
})
