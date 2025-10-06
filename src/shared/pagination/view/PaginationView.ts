import PaginationModel from '../model/PaginationModel.js'
import { PaginationTemplate } from '../template/PaginationTemplate.js'

export default class PaginationView {
  private readonly pagination: HTMLElement
  private readonly template: PaginationTemplate
  private readonly model: PaginationModel
  private readonly onPageChange: () => void

  constructor(
    parent: HTMLElement,
    model: PaginationModel,
    onPageChange: () => void
  ) {
    this.model = model
    this.onPageChange = onPageChange
    this.pagination = document.createElement('pagination')
    parent.appendChild(this.pagination)
    this.template = new PaginationTemplate()
  }

  readonly render = (): void => {
    const currentPage = this.model.getCurrentPage()
    const totalPages = this.model.getTotalPages()
    const hasPrevious = this.model.hasPreviousPage()
    const hasNext = this.model.hasNextPage()

    const html = this.template.getPaginationHTML(
      currentPage,
      totalPages,
      hasPrevious,
      hasNext
    )

    this.pagination.innerHTML = html
    this.attachEventListeners()
  }


  private readonly attachEventListeners = (): void => {
    const prevBtn = this.pagination.querySelector<HTMLButtonElement>(
      '[data-action="previous"]'
    )
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.model.previousPage()
        this.onPageChange()
      })
    }

    const nextBtn = this.pagination.querySelector<HTMLButtonElement>(
      '[data-action="next"]'
    )
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.model.nextPage()
        this.onPageChange()
      })
    }
  }
}
