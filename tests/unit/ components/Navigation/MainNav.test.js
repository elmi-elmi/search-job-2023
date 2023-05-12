import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/Navigation/MainNav.vue'

describe('MainNAv', () => {
  const mainNavRender = () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAweSome: true
        }
      }
    })
  }
  it('displays company name', () => {
    mainNavRender()
    const companyName = screen.getByText('Bobo Careers')
    expect(companyName).toBeInTheDocument()
  })

  it('displays menu items for navigations', () => {
    mainNavRender()
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationsMenuItemsText = navigationMenuItems.map((item) => item.textContent)
    expect(navigationsMenuItemsText).toEqual([
      'Teams',
      'Locations',
      'Life at Bobo Corp',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })
})
