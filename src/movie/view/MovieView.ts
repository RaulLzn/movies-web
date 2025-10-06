import Observer from '../../shared/Observer/Observer.js'
import MovieModel from '../model/MovieModel.js'
import MovieTemplate from '../template/MovieTemplate.js'
import PaginationController from '../../shared/pagination/controller/PaginationController.js'

export default class MovieView extends Observer<MovieModel> {
  private readonly movie: HTMLElement
  private readonly movieTemplate: MovieTemplate
  private paginationController?: PaginationController

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
    
    if (!this.paginationController) {
      this.paginationController = new PaginationController(
        this.parent,
        model,
        onPageChange
      )
      this.paginationController.init()
    } else {
      this.paginationController.update()
    }
  }
}
