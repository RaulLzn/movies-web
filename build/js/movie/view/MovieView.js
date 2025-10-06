import Observer from '../../shared/Observer/Observer.js';
import MovieTemplate from '../template/MovieTemplate.js';
import PaginationController from '../../shared/pagination/controller/PaginationController.js';
export default class MovieView extends Observer {
    parent;
    movie;
    movieTemplate;
    paginationController;
    constructor(parent, movieModel) {
        super(movieModel);
        this.parent = parent;
        this.movie = document.createElement('movie');
        this.parent.appendChild(this.movie);
        this.movieTemplate = new MovieTemplate([]);
    }
    update = () => {
        this.initComponent();
    };
    initComponent = async () => {
        const movies = this.subject.getPaginatedMovies();
        this.movieTemplate.setMovies(movies);
        this.movie.innerHTML = this.movieTemplate.getMoviesGridHTML();
        this.initPagination();
    };
    initPagination = () => {
        const model = this.subject.getPaginationModel();
        const onPageChange = () => {
            this.initComponent();
        };
        if (!this.paginationController) {
            this.paginationController = new PaginationController(this.parent, model, onPageChange);
            this.paginationController.init();
        }
        else {
            this.paginationController.update();
        }
    };
}
