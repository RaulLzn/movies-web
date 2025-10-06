import Subject from "../../shared/Observer/Subject.js";
import PaginationModel from "../../shared/pagination/model/PaginationModel.js";
export default class MovieModel extends Subject {
    movies;
    allMovies;
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
        this.movies = this.paginationModel.paginate(this.allMovies);
        return this.movies;
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
