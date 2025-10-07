import MenuController from '../controller/MenuController.js'

export default class MenuFactory {
  static readonly create = (
    parent: HTMLElement,
    onShowHome?: () => void,
    onShowMovies?: () => void,
    onShowAbout?: () => void
  ) => {
    const controller = new MenuController(parent, onShowHome, onShowMovies, onShowAbout)
    return controller
  }
}
