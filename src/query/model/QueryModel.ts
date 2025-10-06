export default class QueryModel {
  private searchTerm: string = ''

  readonly setSearchTerm = (term: string): void => {
    this.searchTerm = term
  }

  readonly getSearchTerm = (): string => this.searchTerm

  readonly initComponent = () => {
    console.log('QueryModel initialized')
  }
}