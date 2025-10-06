import MenuController from '../../menu/controller/MenuController.js'
import MenuFactory from '../../menu/factory/MenuFactory.js'
import MovieController from '../../movie/controller/MovieController.js'
import MovieFactory from '../../movie/factory/MovieFactory.js'
import QueryController from '../../query/controller/QueryController.js'
import QueryFactory from '../../query/factory/Queryfactory.js'
import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  private readonly movie: MovieController
  private readonly menu: MenuController
  private readonly query: QueryController

  constructor(
    private readonly model: IndexModel,
    private readonly view: IndexView
  ) {
    this.movie = MovieFactory.create(this.view.getMainHTML())
    this.menu = MenuFactory.create(this.view.getMenuHTML())
    
    // Conectar Query con Movie a través de callback
    this.query = QueryFactory.create(
      this.view.getQueryHTML(),
      (searchTerm: string) => {
        console.log('IndexController: Received search term:', searchTerm)
        // Usar la interfaz pública de MovieModel para actualizar el término de búsqueda
        this.movie.getModel().setSearchTerm(searchTerm)
      }
    )
  }

  readonly initComponent = () => {
    this.model.initComponent()
    this.view.initComponent()
    this.movie.initComponent()
    this.menu.initComponent()
    this.query.initComponent()
  }
}
