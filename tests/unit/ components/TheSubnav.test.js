import { render, screen } from '@testing-library/vue'
import { expect, describe } from 'vitest'

import TheSubnav from '@/components/TheSubnav.vue'

describe('TheSubnav', () => {
  describe('when user on job page', () => {
    it('displays job page', () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAweSome: true
          }
        },
        data() {
          return {
            onJobResultPage: true
          }
        }
      })

      const jobCount = screen.getByText(/1653/i)
      expect(jobCount).toBeInTheDocument()
    })
  })
  describe('when user is not on job page', () => {
    it('displays job page', () => {
      render(TheSubnav, {
        data() {
          return {
            global: {
              stubs: {
                FontAweSome: true
              }
            },
            onJobResultPage: false
          }
        }
      })

      const jobCount = screen.queryByText('1653')
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
