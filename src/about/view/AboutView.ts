import AboutTemplate from '../template/AboutTemplate.js'
import AboutModel from '../model/AboutModel.js'

export default class AboutView {
  private readonly aboutTemplate: AboutTemplate

  constructor(
    private readonly parent: HTMLElement,
    private readonly model: AboutModel
  ) {
    this.aboutTemplate = new AboutTemplate()
  }

  readonly initComponent = (): void => {
    this.render()
  }

  readonly render = (): void => {
    const personalInfo = this.model.getPersonalInfo()
    this.parent.innerHTML = this.aboutTemplate.getAboutHTML(personalInfo)
  }
}
