import MenuController from '../../menu/controller/MenuController.js'
import MenuFactory from '../../menu/factory/MenuFactory.js'
import MovieController from '../../movie/controller/MovieController.js'
import MovieFactory from '../../movie/factory/MovieFactory.js'
import QueryController from '../../query/controller/QueryController.js'
import QueryFactory from '../../query/factory/Queryfactory.js'
import AboutController from '../../about/controller/AboutController.js'
import AboutFactory from '../../about/factory/AboutFactory.js'
import HomeController from '../../home/controller/HomeController.js'
import HomeFactory from '../../home/factory/HomeFactory.js'
import NotFoundController from '../../notfound/controller/NotFoundController.js'
import NotFoundFactory from '../../notfound/factory/NotFoundFactory.js'
import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  private readonly movie: MovieController
  private readonly menu: MenuController
  private readonly query: QueryController
  private readonly about: AboutController
  private readonly home: HomeController
  private readonly notfound: NotFoundController

  constructor(
    private readonly model: IndexModel,
    private readonly view: IndexView
  ) {
    this.movie = MovieFactory.create(
      this.view.getMainHTML(),
      () => this.showNotFound()
    )
    this.about = AboutFactory.create(this.view.getMainHTML())
    this.home = HomeFactory.create(this.view.getMainHTML())
    this.notfound = NotFoundFactory.create(
      this.view.getMainHTML(),
      () => this.showHome(),
      () => this.showMovies()
    )
    
    // Crear el menú con callbacks de navegación
    this.menu = MenuFactory.create(
      this.view.getMenuHTML(),
      () => this.showHome(),
      () => this.showMovies(),
      () => this.showAbout()
    )
    
    // Conectar Query con Movie a través de callback
    this.query = QueryFactory.create(
      this.view.getQueryHTML(),
      (searchTerm: string) => {
        // Usar la interfaz pública de MovieModel para actualizar el término de búsqueda
        this.movie.getModel().setSearchTerm(searchTerm)
      }
    )
  }

  readonly showHome = (): void => {
    this.home.initComponent()
  }

  readonly showMovies = (): void => {
    this.movie.initComponent()
  }

  readonly showAbout = (): void => {
    this.about.initComponent()
  }

  readonly showNotFound = (): void => {
    this.notfound.initComponent()
  }

  readonly initComponent = () => {
    this.model.initComponent()
    this.view.initComponent()
    this.home.initComponent()
    this.menu.initComponent()
    this.query.initComponent()
  }
}
