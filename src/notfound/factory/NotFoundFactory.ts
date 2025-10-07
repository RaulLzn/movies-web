import NotFoundController from '../controller/NotFoundController.js'
import NotFoundModel from '../model/NotFoundModel.js'
import NotFoundView from '../view/NotFoundView.js'

export default class NotFoundFactory {
  static readonly create = (
    parent: HTMLElement,
    onHomeClick: () => void,
    onRentalsClick: () => void
  ): NotFoundController => {
    const model = new NotFoundModel()
    const view = new NotFoundView(parent, model, onHomeClick, onRentalsClick)
    return new NotFoundController(model, view)
  }
}
