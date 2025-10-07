import HomeModel from '../model/HomeModel.js'
import HomeView from '../view/HomeView.js'

export default class HomeController {
  constructor(
    private readonly model: HomeModel,
    private readonly view: HomeView
  ) {
    console.log('HomeController initialized')
  }

  readonly initComponent = (): void => {
    this.model.initComponent()
    this.view.initComponent()
  }
}
