import type { SearchCallback } from '../types/QueryTypes.js'

export default class QueryView {
  private searchCallback?: SearchCallback

  constructor(
    private readonly parent: HTMLElement
  ) {}

  readonly initComponent = (): void => {
    this.attachEventListeners()
  }

  readonly onSearch = (callback: (term: string) => void): void => {
    this.searchCallback = callback
  }

  private readonly attachEventListeners = (): void => {
    const searchInput = this.parent.querySelector<HTMLInputElement>('input[type="text"]')
    const searchForm = this.parent as HTMLFormElement
    
    if (searchInput) {
      let debounceTimer: number
      
      // Event listener para input con debounce
      searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer)
        debounceTimer = window.setTimeout(() => {
          const term = (e.target as HTMLInputElement).value
          this.searchCallback?.(term)
        }, 300)
      })
    }
    
    // Prevenir el submit del formulario
    if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault()
        if (searchInput) {
          this.searchCallback?.(searchInput.value)
        }
      })
    }
  }
}