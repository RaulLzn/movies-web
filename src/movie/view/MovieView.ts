import Observer from '../../shared/Observer/Observer.js'
import MovieModel from '../model/MovieModel.js'
import MovieTemplate from '../template/MovieTemplate.js'
import PaginationController from '../../shared/pagination/controller/PaginationController.js'

export default class MovieView extends Observer<MovieModel> {
  private readonly movie: HTMLElement
  private readonly movieTemplate: MovieTemplate
  private paginationController?: PaginationController
  private domWasCleared: boolean = false

  constructor(private readonly parent: HTMLElement, movieModel: MovieModel) {
    super(movieModel)
    this.movie = document.createElement('movie')
    this.parent.appendChild(this.movie)
    this.movieTemplate = new MovieTemplate([])
  }

  override readonly update = (): void => {
    this.initComponent()
  }

  readonly initComponent = async () => {
    // Asegurar que el elemento movie esté en el DOM
    if (!this.parent.contains(this.movie)) {
      this.parent.innerHTML = '' // Limpiar el contenido anterior
      this.parent.appendChild(this.movie)
      this.domWasCleared = true
    }
    
    const movies = (this.subject as MovieModel).getPaginatedMovies()
    this.movieTemplate.setMovies(movies)
    this.movie.innerHTML = this.movieTemplate.getMoviesGridHTML()
    this.initPagination()
  }

  private readonly initPagination = (): void => {
    const model = (this.subject as MovieModel).getPaginationModel()
    
    const onPageChange = () => {
      this.initComponent()
    }
    
    // Si el DOM fue limpiado o no existe el controlador, crear uno nuevo
    if (!this.paginationController || this.domWasCleared) {
      this.paginationController = new PaginationController(
        this.parent,
        model,
        onPageChange
      )
      this.paginationController.init()
      this.domWasCleared = false
    } else {
      this.paginationController.update()
    }
  }
}
