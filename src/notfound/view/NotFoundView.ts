import NotFoundTemplate from '../template/NotFoundTemplate.js'
import NotFoundModel from '../model/NotFoundModel.js'

export default class NotFoundView {
  private readonly notFoundTemplate: NotFoundTemplate

  constructor(
    private readonly parent: HTMLElement,
    private readonly model: NotFoundModel,
    private readonly onHomeClick: () => void,
    private readonly onRentalsClick: () => void
  ) {
    this.notFoundTemplate = new NotFoundTemplate()
  }

  readonly initComponent = (): void => {
    this.render()
    this.attachEventListeners()
  }

  readonly render = (): void => {
    const notFoundInfo = this.model.getNotFoundInfo()
    this.parent.innerHTML = this.notFoundTemplate.getNotFoundHTML(notFoundInfo)
  }

  private readonly attachEventListeners = (): void => {
    const homeBtn = this.parent.querySelector('[data-action="home"]')
    const rentalsBtn = this.parent.querySelector('[data-action="rentals"]')

    if (homeBtn) {
      homeBtn.addEventListener('click', () => {
        this.onHomeClick()
      })
    }

    if (rentalsBtn) {
      rentalsBtn.addEventListener('click', () => {
        this.onRentalsClick()
      })
    }
  }
}
