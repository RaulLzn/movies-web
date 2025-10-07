import MenuFactory from '../../menu/factory/MenuFactory.js';
import MovieFactory from '../../movie/factory/MovieFactory.js';
import QueryFactory from '../../query/factory/Queryfactory.js';
import AboutFactory from '../../about/factory/AboutFactory.js';
import HomeFactory from '../../home/factory/HomeFactory.js';
import NotFoundFactory from '../../notfound/factory/NotFoundFactory.js';
export default class IndexController {
    model;
    view;
    movie;
    menu;
    query;
    about;
    home;
    notfound;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.movie = MovieFactory.create(this.view.getMainHTML(), () => this.showNotFound());
        this.about = AboutFactory.create(this.view.getMainHTML());
        this.home = HomeFactory.create(this.view.getMainHTML());
        this.notfound = NotFoundFactory.create(this.view.getMainHTML(), () => this.showHome(), () => this.showMovies());
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
    showNotFound = () => {
        this.notfound.initComponent();
    };
    initComponent = () => {
        this.model.initComponent();
        this.view.initComponent();
        this.home.initComponent();
        this.menu.initComponent();
        this.query.initComponent();
    };
}
