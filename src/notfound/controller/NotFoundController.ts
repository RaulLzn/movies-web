import NotFoundModel from '../model/NotFoundModel.js'
import NotFoundView from '../view/NotFoundView.js'

export default class NotFoundController {
  constructor(
    private readonly model: NotFoundModel,
    private readonly view: NotFoundView
  ) {
    console.log('NotFoundController initialized')
  }

  readonly initComponent = (): void => {
    this.model.initComponent()
    this.view.initComponent()
  }
}
