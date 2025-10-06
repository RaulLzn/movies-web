import Subject from "../../shared/Observer/Subject.js";
import Movie from "../types/Movie.js";
import MovieView from "../view/MovieView.js";
import PaginationModel from "../../shared/pagination/model/PaginationModel.js";

export default class MovieModel extends Subject<MovieView> {
  private movies: Movie[];
  private allMovies: Movie[];
  private searchTerm: string = '';
  private readonly paginationModel: PaginationModel;

  constructor() {
    super();
    this.movies = [];
    this.allMovies = [];
    this.paginationModel = new PaginationModel({ itemsPerPage: 10 });
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
    const filteredMovies = this.filterMovies();
    this.movies = this.paginationModel.paginate(filteredMovies);
    return this.movies;
  };

  readonly filterMovies = (): Movie[] => {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      return this.allMovies;
    }

    const term = this.searchTerm.toLowerCase();
    return this.allMovies.filter((movie) => {
      return (
        (movie.title && movie.title.toLowerCase().includes(term)) ||
        (movie.extract && movie.extract.toLowerCase().includes(term)) ||
        (movie.genres && movie.genres.some(genre => genre && genre.toLowerCase().includes(term))) ||
        (movie.cast && movie.cast.some(actor => actor && actor.toLowerCase().includes(term)))
      );
    });
  };

  readonly setSearchTerm = (term: string): void => {
    this.searchTerm = term;
    const filteredMovies = this.filterMovies();
    this.paginationModel.setTotalItems(filteredMovies.length);
    this.paginationModel.goToPage(1);
    this.getPaginatedMovies();
    this.notifyAllObservers();
  };

  readonly getSearchTerm = (): string => {
    return this.searchTerm;
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
}
