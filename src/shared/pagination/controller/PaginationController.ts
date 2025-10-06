import PaginationModel from '../model/PaginationModel.js'
import PaginationView from '../view/PaginationView.js'

export default class PaginationController {
  private model: PaginationModel
  private view: PaginationView

  constructor(
    parent: HTMLElement,
    model: PaginationModel,
    onPageChange: () => void
  ) {
    this.model = model
    this.view = new PaginationView(parent, this.model, () => {
      this.view.render()
      onPageChange()
    })
  }

  readonly init = (): void => {
    this.view.render()
  }

  readonly update = (): void => {
    this.view.render()
  }

  readonly getModel = (): PaginationModel => {
    return this.model
  }
}
