import MenuModel from '../model/MenuModel.js'
import MenuView from '../view/MenuView.js'

export default class MenuController {
  private readonly model: MenuModel
  private readonly view: MenuView

  constructor(
    parent: HTMLElement,
    onShowHome?: () => void,
    onShowMovies?: () => void,
    onShowAbout?: () => void
  ) {
    this.view = new MenuView(parent)
    this.model = new MenuModel(
      onShowHome,
      onShowMovies,
      onShowAbout,
      () => this.view.updateActiveState(this.model.getMenu())
    )
  }

  readonly setActiveMenuItem = (label: string): void => {
    this.model.setActiveItem(label)
    this.view.updateActiveState(this.model.getMenu())
  }

  readonly initComponent = () => {
    this.model.initComponent()
    this.view.initComponent(this.model.getMenu())
  }
}
