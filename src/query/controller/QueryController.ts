import QueryModel from '../model/QueryModel.js'
import QueryView from '../view/QueryView.js'

export default class QueryController {
  constructor(
    private readonly model: QueryModel,
    private readonly view: QueryView,
    private readonly onSearchChange: (term: string) => void
  ) {}

  readonly initComponent = () => {
    this.model.initComponent()
    this.view.initComponent()
    
    this.view.onSearch((term: string) => {
      this.model.setSearchTerm(term)
      this.onSearchChange(term)
    })
  }
}