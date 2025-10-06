import Subject from "../../shared/Observer/Subject.js";
import PaginationModel from "../../shared/pagination/model/PaginationModel.js";
export default class MovieModel extends Subject {
    movies;
    allMovies;
    searchTerm = '';
    paginationModel;
    constructor() {
        super();
        this.movies = [];
        this.allMovies = [];
        this.paginationModel = new PaginationModel({ itemsPerPage: 10 });
    }
    fetchMovies = async () => {
        const response = await fetch("../database/movies-2020s.json");
        const data = await response.json();
        if (!data) {
            throw new Error("No data found");
        }
        return data;
    };
    getMovies = async () => {
        return this.movies;
    };
    getPaginatedMovies = () => {
        const filteredMovies = this.filterMovies();
        this.movies = this.paginationModel.paginate(filteredMovies);
        return this.movies;
    };
    filterMovies = () => {
        if (!this.searchTerm || this.searchTerm.trim() === '') {
            return this.allMovies;
        }
        const term = this.searchTerm.toLowerCase();
        return this.allMovies.filter((movie) => {
            return ((movie.title && movie.title.toLowerCase().includes(term)) ||
                (movie.extract && movie.extract.toLowerCase().includes(term)) ||
                (movie.genres && movie.genres.some(genre => genre && genre.toLowerCase().includes(term))) ||
                (movie.cast && movie.cast.some(actor => actor && actor.toLowerCase().includes(term))));
        });
    };
    setSearchTerm = (term) => {
        this.searchTerm = term;
        const filteredMovies = this.filterMovies();
        this.paginationModel.setTotalItems(filteredMovies.length);
        this.paginationModel.goToPage(1);
        this.getPaginatedMovies();
        this.notifyAllObservers();
    };
    getSearchTerm = () => {
        return this.searchTerm;
    };
    nextPage = () => {
        this.paginationModel.nextPage();
        this.getPaginatedMovies();
        this.notifyAllObservers();
    };
    previousPage = () => {
        this.paginationModel.previousPage();
        this.getPaginatedMovies();
        this.notifyAllObservers();
    };
    goToPage = (page) => {
        this.paginationModel.goToPage(page);
        this.getPaginatedMovies();
        this.notifyAllObservers();
    };
    getPaginationModel = () => {
        return this.paginationModel;
    };
    initComponent = async () => {
        this.allMovies = await this.fetchMovies();
        this.paginationModel.setTotalItems(this.allMovies.length);
        this.getPaginatedMovies();
        this.notifyAllObservers();
    };
}
