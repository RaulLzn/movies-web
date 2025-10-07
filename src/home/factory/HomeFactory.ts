import HomeController from '../controller/HomeController.js'
import HomeModel from '../model/HomeModel.js'
import HomeView from '../view/HomeView.js'

export default class HomeFactory {
  static readonly create = (parent: HTMLElement): HomeController => {
    const model = new HomeModel()
    const view = new HomeView(parent, model)
    return new HomeController(model, view)
  }
}
