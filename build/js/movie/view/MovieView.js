import Observer from '../../shared/Observer/Observer.js';
import MovieTemplate from '../template/MovieTemplate.js';
import PaginationController from '../../shared/pagination/controller/PaginationController.js';
export default class MovieView extends Observer {
    parent;
    onRentClick;
    movie;
    movieTemplate;
    paginationController;
    domWasCleared = false;
    constructor(parent, movieModel, onRentClick) {
        super(movieModel);
        this.parent = parent;
        this.onRentClick = onRentClick;
        this.movie = document.createElement('movie');
        this.parent.appendChild(this.movie);
        this.movieTemplate = new MovieTemplate([]);
    }
    update = () => {
        this.initComponent();
    };
    initComponent = async () => {
        // Asegurar que el elemento movie esté en el DOM
        if (!this.parent.contains(this.movie)) {
            this.parent.innerHTML = ''; // Limpiar el contenido anterior
            this.parent.appendChild(this.movie);
            this.domWasCleared = true;
        }
        const movies = this.subject.getPaginatedMovies();
        this.movieTemplate.setMovies(movies);
        this.movie.innerHTML = this.movieTemplate.getMoviesGridHTML();
        this.attachRentButtonListeners();
        this.initPagination();
    };
    attachRentButtonListeners = () => {
        const rentButtons = this.movie.querySelectorAll('.movie-btn-rental button');
        rentButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.onRentClick?.();
            });
        });
    };
    initPagination = () => {
        const model = this.subject.getPaginationModel();
        const onPageChange = () => {
            this.initComponent();
        };
        // Si el DOM fue limpiado o no existe el controlador, crear uno nuevo
        if (!this.paginationController || this.domWasCleared) {
            this.paginationController = new PaginationController(this.parent, model, onPageChange);
            this.paginationController.init();
            this.domWasCleared = false;
        }
        else {
            this.paginationController.update();
        }
    };
}
