export interface SearchCallback {
  (term: string): void
}

export interface QueryConfig {
  placeholder?: string
  debounceTime?: number
}

export interface QueryState {
  searchTerm: string
  isSearching: boolean
}
