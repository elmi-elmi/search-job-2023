import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'

describe('MainNAv', () => {
  it('displays company name', () => {
    render(MainNav)
    screen.debug()
    const companyName = screen.getByText('Bobo Careers')
    expect(companyName).toBeInTheDocument()
  })

  it('displays menu items for navigations', () => {
    render(MainNav)
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
