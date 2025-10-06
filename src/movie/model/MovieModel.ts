import Subject from "../../shared/Observer/Subject.js";
import Movie from "../types/Movie.js";
import MovieView from "../view/MovieView.js";
import PaginationModel from "../../shared/pagination/model/PaginationModel.js";

export default class MovieModel extends Subject<MovieView> {
  private movies: Movie[];
  private allMovies: Movie[];
  private readonly paginationModel: PaginationModel;
  private searchQuery: string = '';
  private filteredMovies: Movie[];

  constructor() {
    super();
    this.movies = [];
    this.allMovies = [];
    this.paginationModel = new PaginationModel({ itemsPerPage: 10 });
    this.filteredMovies = [];
  }

  readonly fetchMovies = async (): Promise<Movie[]> => {
    const response = await fetch("../database/movies-2020s.json");
    const data = await response.json();
    if (!data) {
      throw new Error("No data found");
    }
    return data as Movie[];
  };

  readonly getMovies = async (): Promise<Movie[]> => {
    return this.movies;
  };

  readonly getPaginatedMovies = (): Movie[] => {
    const moviesToPaginate = this.searchQuery ? this.filteredMovies : this.allMovies;
    this.movies = this.paginationModel.paginate(moviesToPaginate);
    return this.movies;
  };

  readonly nextPage = (): void => {
    this.paginationModel.nextPage();
    this.getPaginatedMovies();
    this.notifyAllObservers();
  };

  readonly previousPage = (): void => {
    this.paginationModel.previousPage();
    this.getPaginatedMovies();
    this.notifyAllObservers();
  };

  readonly goToPage = (page: number): void => {
    this.paginationModel.goToPage(page);
    this.getPaginatedMovies();
    this.notifyAllObservers();
  };

  readonly getPaginationModel = (): PaginationModel => {
    return this.paginationModel;
  };

  readonly initComponent = async (): Promise<void> => {
    this.allMovies = await this.fetchMovies();
    this.paginationModel.setTotalItems(this.allMovies.length);
    this.getPaginatedMovies();
    this.notifyAllObservers();
  };

    readonly searchMovies = (query: string): void => {
    // 1. Guardar el query (trim para quitar espacios)
    this.searchQuery = query.trim().toLowerCase()
    
    // 2. Si el query está vacío, restaurar todo
    if (!this.searchQuery) {
      this.filteredMovies = []
      this.paginationModel.setTotalItems(this.allMovies.length)
      this.paginationModel.goToPage(1)
      this.getPaginatedMovies()
      this.notifyAllObservers()
      return
    }
    
    // 3. Filtrar películas por título
    this.filteredMovies = this.allMovies.filter(movie => 
      movie.title.toLowerCase().includes(this.searchQuery)
    )
    
    // 4. Actualizar paginación con nuevo total
    this.paginationModel.setTotalItems(this.filteredMovies.length)
    
    // 5. Ir a página 1
    this.paginationModel.goToPage(1)
    
    // 6. Obtener primeras 10 del filtro
    this.getPaginatedMovies()
    
    // 7. Notificar a la vista
    this.notifyAllObservers()
  }
}
