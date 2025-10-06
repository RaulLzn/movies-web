import QueryController from '../controller/QueryController.js'
import QueryModel from '../model/QueryModel.js'
import QueryView from '../view/QueryView.js'

export default class QueryFactory {
  static readonly create = (
    parent: HTMLElement,
    onSearchChange: (term: string) => void
  ): QueryController => {
    const model = new QueryModel()
    const view = new QueryView(parent)
    return new QueryController(model, view, onSearchChange)
  }
}