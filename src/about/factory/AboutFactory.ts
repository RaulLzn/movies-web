import AboutController from '../controller/AboutController.js'
import AboutModel from '../model/AboutModel.js'
import AboutView from '../view/AboutView.js'

export default class AboutFactory {
  static readonly create = (parent: HTMLElement): AboutController => {
    const model = new AboutModel()
    const view = new AboutView(parent, model)
    return new AboutController(model, view)
  }
}
