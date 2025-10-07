import MenuFactory from '../../menu/factory/MenuFactory.js';
import MovieFactory from '../../movie/factory/MovieFactory.js';
import QueryFactory from '../../query/factory/Queryfactory.js';
import AboutFactory from '../../about/factory/AboutFactory.js';
import HomeFactory from '../../home/factory/HomeFactory.js';
export default class IndexController {
    model;
    view;
    movie;
    menu;
    query;
    about;
    home;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.movie = MovieFactory.create(this.view.getMainHTML());
        this.about = AboutFactory.create(this.view.getMainHTML());
        this.home = HomeFactory.create(this.view.getMainHTML());
        // Crear el menú con callbacks de navegación
        this.menu = MenuFactory.create(this.view.getMenuHTML(), () => this.showHome(), () => this.showMovies(), () => this.showAbout());
        // Conectar Query con Movie a través de callback
        this.query = QueryFactory.create(this.view.getQueryHTML(), (searchTerm) => {
            // Usar la interfaz pública de MovieModel para actualizar el término de búsqueda
            this.movie.getModel().setSearchTerm(searchTerm);
        });
    }
    showHome = () => {
        this.home.initComponent();
    };
    showMovies = () => {
        this.movie.initComponent();
    };
    showAbout = () => {
        this.about.initComponent();
    };
    initComponent = () => {
        this.model.initComponent();
        this.view.initComponent();
        this.home.initComponent();
        this.menu.initComponent();
        this.query.initComponent();
    };
}
