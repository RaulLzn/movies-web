import MenuItem from '../types/MenuItem.js'

export default class MenuModel {
  private readonly menu: MenuItem[]

  constructor(
    private readonly onShowHome?: () => void,
    private readonly onShowMovies?: () => void,
    private readonly onShowAbout?: () => void,
    private readonly onUpdateView?: () => void
  ) {
    this.menu = [
      {
        label: 'Home',
        link: '#home',
        active: true,
        action: () => {
          this.setActiveItem('Home')
          this.onUpdateView?.()
          this.onShowHome?.()
        },
      },
      {
        label: 'Rentals',
        link: '#rentals',
        active: false,
        action: () => {
          this.setActiveItem('Rentals')
          this.onUpdateView?.()
          this.onShowMovies?.()
        },
      },
      {
        label: 'About',
        link: '#about',
        active: false,
        action: () => {
          this.setActiveItem('About')
          this.onUpdateView?.()
          this.onShowAbout?.()
        },
      },
    ]
  }

  readonly getMenu = (): MenuItem[] => this.menu

  readonly setActiveItem = (label: string): void => {
    this.menu.forEach(item => {
      item.active = item.label === label
    })
  }

  readonly initComponent = () => {}
}
