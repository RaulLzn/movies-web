import HomeTemplate from '../template/HomeTemplate.js'
import HomeModel from '../model/HomeModel.js'

export default class HomeView {
  private readonly homeTemplate: HomeTemplate

  constructor(
    private readonly parent: HTMLElement,
    private readonly model: HomeModel
  ) {
    this.homeTemplate = new HomeTemplate()
  }

  readonly initComponent = (): void => {
    this.render()
  }

  readonly render = (): void => {
    const welcomeInfo = this.model.getWelcomeInfo()
    this.parent.innerHTML = this.homeTemplate.getHomeHTML(welcomeInfo)
  }
}
