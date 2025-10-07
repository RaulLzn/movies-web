import AboutModel from '../model/AboutModel.js'
import AboutView from '../view/AboutView.js'

export default class AboutController {
  constructor(
    private readonly model: AboutModel,
    private readonly view: AboutView
  ) {
    console.log('AboutController initialized')
  }

  readonly initComponent = (): void => {
    this.model.initComponent()
    this.view.initComponent()
  }
}
